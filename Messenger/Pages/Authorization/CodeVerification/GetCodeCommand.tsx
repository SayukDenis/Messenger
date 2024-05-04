import { codeForAuthorizationEndPoint, listentingServer } from "../../ChatList/Constants/ServerConection";

interface IGetCodeCommand {
    Execute(
        setCodeForCheck: React.Dispatch<React.SetStateAction<string>>,
        requestData: any
    ): void;
}
class GetCodeCommand implements IGetCodeCommand {
    private setCodeForCheck: React.Dispatch<React.SetStateAction<string>>;
    private requestData: any;
    constructor(setCodeForCheck: any, requestData: any) {
        this.setCodeForCheck = setCodeForCheck;
        this.requestData = requestData;
    }

    public Execute(): void {
        {
            let serverUrl = listentingServer + codeForAuthorizationEndPoint;
            fetch(serverUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(this.requestData),
            })
                .then(async (response) => {
                    return await response.json();
                })
                .then((data) => {
                    console.log("Відповідь від сервера:", data);
                    this.setCodeForCheck(data.code);
                })
                .catch((error) => {
                    console.error("Помилка:", error);
                });
        };
    }

}
export default GetCodeCommand;