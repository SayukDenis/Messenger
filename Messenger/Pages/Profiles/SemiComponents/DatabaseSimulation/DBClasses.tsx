// Oleksii Kovalenko telegram - @traewe

export class BranchParent {
  name: string;
  emoji: string;
  color: string;
  children: Array<BranchChild>;

  constructor(
    name: string,
    emoji: string,
    color: string,
    children: Array<BranchChild>
  ) {
    this.name = name;
    this.emoji = emoji;
    this.color = color;
    this.children = children;
  }
}

export class BranchChild {
  name: string;
  emoji: string;
  color: string;

  constructor(name: string, emoji: string, color: string) {
    this.name = name;
    this.emoji = emoji;
    this.color = color;
  }
}

export class PhotoOrVideo {
  url: string;

  constructor(url: string) {
    this.url = url;
  }
}

export class File {
  name: string;
  format: string;

  constructor(name: string, format: string) {
    this.name = name;
    this.format = format;
  }
}

export class Voice {
  author: string;
  time: string;
  date: string;

  constructor(author: string, time: string, date: string) {
    this.author = author;
    this.time = time;
    this.date = date;
  }
}

export class Link {
  name: string;
  url: string;

  constructor(name: string, url: string) {
    this.name = name;
    this.url = url;
  }
}

export class Album {
  name: string;
  mainPhoto: PhotoOrVideo;
  photosAndVideos: Array<PhotoOrVideo>;

  constructor(
    name: string,
    mainPhoto: PhotoOrVideo,
    photosAndVideos: Array<PhotoOrVideo>
  ) {
    this.name = name;
    this.mainPhoto = mainPhoto;
    this.photosAndVideos = photosAndVideos;
  }
}

export class Contact {
  avatar: string;
  name: string;
  id: number;
}

export class Role {
  name: string;
  emoji: string;
  color: string;
  removeMembersPermission: boolean;
  blockMembersPermission: boolean;
  manageRolesPermission: boolean;
  manageBranchesPermission: boolean;
  seeTheAuditLogPermission: boolean;
  considerChannelsPermission: boolean;
  considerBranchPermission: boolean;
  manageTheServerPermission: boolean;
  sendAMessagePermission: boolean;
  sendAVoiceMessagePermission: boolean;
  subscribers: Array<Contact>;

  constructor(
    name: string,
    emoji: string,
    color: string,
    removeMembersPermission: boolean,
    blockMembersPermission: boolean,
    manageRolesPermission: boolean,
    manageBranchesPermission: boolean,
    seeTheAuditLogPermission: boolean,
    considerChannelsPermission: boolean,
    considerBranchPermission: boolean,
    manageTheServerPermission: boolean,
    sendAMessagePermission: boolean,
    sendAVoiceMessagePermission: boolean,
    subscribers: Array<Contact>
  ) {
    this.name = name;
    this.emoji = emoji;
    this.color = color;
    this.removeMembersPermission = removeMembersPermission;
    this.blockMembersPermission = blockMembersPermission;
    this.manageRolesPermission = manageRolesPermission;
    this.manageBranchesPermission = manageBranchesPermission;
    this.seeTheAuditLogPermission = seeTheAuditLogPermission;
    this.considerChannelsPermission = considerChannelsPermission;
    this.considerBranchPermission = considerBranchPermission;
    this.manageTheServerPermission = manageTheServerPermission;
    this.sendAMessagePermission = sendAMessagePermission;
    this.sendAVoiceMessagePermission = sendAVoiceMessagePermission;
    this.subscribers = subscribers;
  }
}

export class ChannelOrGroupEvent {
  author: Contact;
  text: string;
}
