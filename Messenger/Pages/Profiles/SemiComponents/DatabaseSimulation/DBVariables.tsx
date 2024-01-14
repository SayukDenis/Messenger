// Oleksii Kovalenko telegram - @traewe

import { Contact, Role } from "./DBClasses";

export const pickedProfile = { current: "" };

interface functionsToUndoActionsWhileChangingRoleProps {
  functions: (() => void)[];
}

export let functionsToUndoActionsWhileChangingRole: functionsToUndoActionsWhileChangingRoleProps =
  { functions: [] };

export const contacts: Array<Contact> = [
  { avatar: "https://picsum.photos/id/2/5000/3333", name: "Dmytro", id: 1 },
  {
    avatar: "https://picsum.photos/id/1/5000/3333",
    name: "Dmytrod wad awdwad awd awd awd awd awd aw",
    id: 2,
  },
  {
    avatar: "https://picsum.photos/id/1/5000/3333",
    name: "Dmytrodawd awd awd wdad wd awd wa d",
    id: 3,
  },
  {
    avatar: "https://picsum.photos/id/1084/536/354",
    name: "ХЕЛЛЛЛЛОУУУУУ",
    id: 4,
  },
  { avatar: "https://picsum.photos/id/1/5000/3333", name: "Dmytro", id: 5 },
  { avatar: "https://picsum.photos/id/1/5000/3333", name: "Dmytro", id: 6 },
  { avatar: "https://picsum.photos/id/1/5000/3333", name: "Dmytro", id: 7 },
  { avatar: "https://picsum.photos/id/1/5000/3333", name: "Dmytro", id: 8 },
  { avatar: "https://picsum.photos/id/1/5000/3333", name: "Dmytro", id: 9 },
  { avatar: "https://picsum.photos/id/1/5000/3333", name: "Dmytro", id: 10 },
  { avatar: "https://picsum.photos/id/1/5000/3333", name: "Dmytro", id: 11 },
  { avatar: "https://picsum.photos/id/1/5000/3333", name: "Dmytro", id: 12 },
  { avatar: "https://picsum.photos/id/1/5000/3333", name: "Dmytro", id: 13 },
  { avatar: "https://picsum.photos/id/1/5000/3333", name: "Dmytro", id: 14 },
  { avatar: "https://picsum.photos/id/1/5000/3333", name: "Dmytro", id: 15 },
  { avatar: "https://picsum.photos/id/1/5000/3333", name: "Dmytro", id: 16 },
  { avatar: "https://picsum.photos/id/1/5000/3333", name: "Dmytro", id: 17 },
  { avatar: "https://picsum.photos/id/1/5000/3333", name: "Dmytro", id: 18 },
  { avatar: "https://picsum.photos/id/1/5000/3333", name: "Dmytro", id: 19 },
];

export const tempRole: Role = {
  name: "",
  emoji: "",
  color: "",
  removeMembersPermission: true,
  blockMembersPermission: true,
  manageRolesPermission: true,
  manageBranchesPermission: true,
  seeTheAuditLogPermission: true,
  considerChannelsPermission: true,
  considerBranchPermission: true,
  manageTheServerPermission: true,
  sendAMessagePermission: true,
  sendAVoiceMessagePermission: true,
  subscribers: new Array<Contact>(),
};

/*const roleCharacter = () => {
    if (channel.selectedRole) {
      return channel.selectedRole;
    } else {
      return tempRole;
    }
  };*/
