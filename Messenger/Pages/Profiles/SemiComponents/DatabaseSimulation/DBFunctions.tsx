// Oleksii Kovalenko telegram - @traewe

import {
  pickedProfile,
  functionsToUndoActionsWhileChangingRole,
  tempRole,
} from "./DBVariables";
import { user } from "./DBUser";
import { channel } from "./DBChannel";
import { group } from "./DBGroup";

export const GetProfile = () => {
  switch (pickedProfile.current) {
    case "user": {
      return user;
    }
    case "group": {
      return group;
    }
    case "channel": {
      return channel;
    }
  }
};

export function addFunction(func: () => void): void {
  functionsToUndoActionsWhileChangingRole.functions.push(func);
}

export function executeFunctions(): void {
  functionsToUndoActionsWhileChangingRole.functions.forEach((func) => func());
}

export function clearFunctions(): void {
  functionsToUndoActionsWhileChangingRole.functions = [];
}

export const GetRole = () => {
  if (channel.selectedRole) {
    return channel.selectedRole;
  } else {
    return tempRole;
  }
};
