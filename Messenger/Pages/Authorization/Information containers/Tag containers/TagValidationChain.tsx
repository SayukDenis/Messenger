import { listentingServer, matchTagForAuthorizationEndPoint } from "../../../ChatList/Constants/ServerConection";

interface TagValidationHandler {
  setNext(handler: TagValidationHandler): TagValidationHandler;
  handle(input: string, setTextOfTipsString: any, setIsValid: any): any;
}

abstract class BaseTagValidationHandler implements TagValidationHandler {
  private nextHandler: TagValidationHandler | null = null;

  setNext(handler: TagValidationHandler): TagValidationHandler {
    this.nextHandler = handler;
    return handler;
  }

  async handle(input: string, setTextOfTipsString: any, setIsValid: any): Promise<void> {
    if (this.nextHandler) {
      await this.nextHandler.handle(input, setTextOfTipsString, setIsValid);
    }
  }
}

export class LengthValidationHandler extends BaseTagValidationHandler {
  handle(input: string, setTextOfTipsString: any, setIsValid: any): any{
    if (input.length == 0) {
      setTextOfTipsString("We are waiting for your tag input");
      setIsValid(false);
      return;
    } else if (input.length < 5) {
      setTextOfTipsString("Your tag is shorter than 5 characters");
      setIsValid(false);
      return;
    } else if (input.length > 16) {
      setTextOfTipsString("Your tag is longer than 16 characters");
      setIsValid(false);
      return;
    }
    super.handle(input, setTextOfTipsString, setIsValid);
  }
}

export class SymbolValidationHandler extends BaseTagValidationHandler
{
  handle(input: string, setTextOfTipsString: any, setIsValid: any): any{
    const regex = /^[0-9a-z_]{5,16}$/;
    if (!regex.test(input)) {
      setTextOfTipsString("Your tag has invalid characters.");
      setIsValid(false);
      return;
    }
    super.handle(input, setTextOfTipsString, setIsValid);
  }
}

export class IsMatchTagsValidationHandler extends BaseTagValidationHandler {
  async isMatchTags(input:string) { 
    try {
    const serverUrl = listentingServer + matchTagForAuthorizationEndPoint;
    const requestData = {
    input,
    };
    const response = await fetch(serverUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });
    const data = await response.json();
    console.log("Відповідь від сервера:", data);
    return data.isMatch;
    } catch (error) {
      console.error("Помилка:", error);
      return undefined;
    }
  }

  async handle(input: string, setTextOfTipsString: any, setIsValid: any): Promise<void> {
    try {
      const isMatchTag = await this.isMatchTags(input);
      if (isMatchTag) {
        setIsValid(false);
        setTextOfTipsString("This tag exists.");
        return;
      }
      setIsValid(true);
      setTextOfTipsString("Your tag is valid.");
    } catch (error) {
      console.error("Error checking if tag exists:", error);
      setIsValid(false);
      setTextOfTipsString("Error checking if tag exists.");
    }
  }
}