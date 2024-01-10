interface tempUserProps {
  selectedAlbum: Album;
  selectedPhotosAndVideos: Array<PhotoOrVideo>;
  selectedBranchParent: BranchParent;
  selectedBranchChild: BranchChild;
  selectedPhoto: PhotoOrVideo;
}

export const tempUser: tempUserProps = {
  selectedAlbum: null,
  selectedPhotosAndVideos: new Array<PhotoOrVideo>(),
  selectedBranchParent: null,
  selectedBranchChild: null,
  selectedPhoto: null,
};

export interface UserProps {
  ImagePath: string;
  phoneNumber: string;
  username: string;
  bio: string;
  MembersName: Array<Nicknames>;
  selectedInterval: number;
  isMuted: boolean;
  isBlocked: boolean;
  profileName: string;
  lastTimeOnline: string;
  MembersCount: string;
  isEmergencyMessagesEnabled: boolean;
  GroupBio: string;
  avatars: Array<PhotoOrVideo>;
  branchParents: Array<BranchParent>;
  photosAndVideos: Array<PhotoOrVideo>;
  files: Array<File>;
  voice: Array<Voice>;
  links: Array<Link>;
  albums: Array<Album>;
}

export const user: UserProps = {
  ImagePath: "https://picsum.photos/id/1084/536/354",
  phoneNumber: "+380 12 345 67 89",
  username: "@myUsername",
  bio: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  MembersName: [
    { name: "Aboba ABOBA aboba ABOBA AboBA BaoBAB", Vissible: 1 },
    { name: "Aboba ABOBA aboba ABOBA AboBA", Vissible: 0 },
    { name: "Aboba ABOBA aboba ABOBA AboBA BaoBAB Abob", Vissible: 0 },
    { name: "Viktor", Vissible: 1 },
  ],
  selectedInterval: 0,
  isMuted: false,
  isBlocked: false,
  profileName: "My name",
  lastTimeOnline: "Був online давно",
  MembersCount: "10 members",
  isEmergencyMessagesEnabled: false,
  GroupBio: "Aboba - cool",
  branchParents: new Array<BranchParent>(),
  avatars: [
    {
      url: "https://fastly.picsum.photos/id/866/400/400.jpg?hmac=oHJBlOQwtaF75oX43dFtPf4At_GRLEx9FQqkkfpLR5U",
    },
    {
      url: "https://fastly.picsum.photos/id/1027/200/300.jpg?hmac=WCxdERZ7sgk4jhwpfIZT0M48pctaaDcidOi3dKSHJYY",
    },
    {
      url: "https://fastly.picsum.photos/id/221/400/400.jpg?hmac=inxjrW3lVI716UFQqWe0R7u-0YXiXoD5LraYwPvV51c",
    },
    {
      url: "https://fastly.picsum.photos/id/866/400/400.jpg?hmac=oHJBlOQwtaF75oX43dFtPf4At_GRLEx9FQqkkfpLR5U",
    },
    {
      url: "https://fastly.picsum.photos/id/1027/200/300.jpg?hmac=WCxdERZ7sgk4jhwpfIZT0M48pctaaDcidOi3dKSHJYY",
    },
    {
      url: "https://fastly.picsum.photos/id/221/400/400.jpg?hmac=inxjrW3lVI716UFQqWe0R7u-0YXiXoD5LraYwPvV51c",
    },
  ],
  photosAndVideos: [
    {
      url: "https://www.creativeboom.com/uploads/articles/e8/e8e93075801e9f3b444d2f0173ce5f17c8182112_1620.jpg",
    },
    {
      url: "https://fastly.picsum.photos/id/1027/200/300.jpg?hmac=WCxdERZ7sgk4jhwpfIZT0M48pctaaDcidOi3dKSHJYY",
    },
    {
      url: "https://www.techsmith.com/blog/wp-content/uploads/2016/11/what-is-high-res.jpg",
    },
    { url: "https://picsum.photos/id/2/5000/3333" },
    { url: "https://picsum.photos/id/1/5000/3333" },
    { url: "https://picsum.photos/id/1/5000/3333" },
    { url: "https://picsum.photos/id/1084/536/354" },
    { url: "https://picsum.photos/id/1/5000/3333" },
    { url: "https://picsum.photos/id/1/5000/3333" },
    { url: "https://picsum.photos/id/1/5000/3333" },
    { url: "https://picsum.photos/id/1/5000/3333" },
    { url: "https://picsum.photos/id/1/5000/3333" },
    { url: "https://picsum.photos/id/1/5000/3333" },
    { url: "https://picsum.photos/id/1/5000/3333" },
    { url: "https://picsum.photos/id/1/5000/3333" },
    { url: "https://picsum.photos/id/1/5000/3333" },
    { url: "https://picsum.photos/id/1/5000/3333" },
    { url: "https://picsum.photos/id/1/5000/3333" },
    { url: "https://picsum.photos/id/1/5000/3333" },
    { url: "https://picsum.photos/id/1/5000/3333" },
    { url: "https://picsum.photos/id/1/5000/3333" },
    { url: "https://picsum.photos/id/1/5000/3333" },
    {
      url: "https://fastly.picsum.photos/id/866/400/400.jpg?hmac=oHJBlOQwtaF75oX43dFtPf4At_GRLEx9FQqkkfpLR5U",
    },
  ],
  files: [
    { name: "file1", format: "png" },
    { name: "Hello, world", format: "jpeg" },
    { name: "file1", format: "png" },
    { name: "file1", format: "png" },
    { name: "file1", format: "png" },
    { name: "file1", format: "png" },
    { name: "file1", format: "png" },
    {
      name: "Lorem ipsumdawd awd awd awd dwad wadawd wadad wda wdawd ad aw daw",
      format: "txt",
    },
    { name: "Лабораторна №1 Саюк Денис", format: "docx" },
    { name: "file1", format: "png" },
    { name: "file1", format: "png" },
    { name: "file1", format: "pdf" },
    { name: "file1 pdf IMPORTANT", format: "pdf" },
    { name: "file1", format: "png" },
    { name: "file1", format: "png" },
    { name: "file1", format: "pdf" },
    { name: "file1", format: "png" },
    { name: "file1", format: "png" },
    { name: "file1", format: "pdf" },
    { name: "file1", format: "png" },
    { name: "file1", format: "png" },
    { name: "file1", format: "pdf" },
    { name: "file1", format: "png" },
    { name: "file1", format: "png" },
    { name: "file1", format: "pdf" },
    { name: "file1", format: "png" },
    { name: "file1", format: "pdf" },
    { name: "file1", format: "png" },
    { name: "file1", format: "png" },
    { name: "file1", format: "pdf" },
    { name: "file1", format: "png" },
    { name: "file1", format: "png" },
    { name: "file1", format: "pdf" },
  ],
  voice: [
    { author: "Олексій", time: "15:09", date: "15.10.2023" },
    { author: "Олексій", time: "15:09", date: "15.10.2023" },
    { author: "Віктор", time: "15:09", date: "04.10.2023" },
    { author: "Капець довге ім'я", time: "23:15", date: "15.12.2003" },
    {
      author: "Lorem ipsum dolor sit amet, consectetur",
      time: "15:09",
      date: "15.10.2023",
    },
    { author: "Олексій", time: "15:09", date: "15.10.2023" },
    { author: "Олексій", time: "15:09", date: "15.10.2023" },
    { author: "Олексій", time: "15:09", date: "15.10.2023" },
    { author: "Олексій", time: "15:09", date: "15.10.2023" },
    { author: "Олексій", time: "15:09", date: "15.10.2023" },
    { author: "Олексій", time: "15:09", date: "15.10.2023" },
    { author: "Олексій", time: "15:09", date: "15.10.2023" },
    { author: "Олексій", time: "15:09", date: "15.10.2023" },
    { author: "Олексій", time: "15:09", date: "15.10.2023" },
    { author: "Олексій", time: "15:09", date: "15.10.2023" },
    { author: "Олексій", time: "15:09", date: "15.10.2023" },
    { author: "Олексій", time: "15:09", date: "15.10.2023" },
    { author: "Олексій", time: "15:09", date: "15.10.2023" },
    { author: "Олексій", time: "15:09", date: "15.10.2023" },
    { author: "Олексій", time: "15:09", date: "15.10.2023" },
    { author: "Олексій", time: "15:09", date: "15.10.2023" },
  ],
  links: [
    {
      name: "Important info",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ],
  albums: [
    {
      name: "Name",
      mainPhoto: { url: "https://picsum.photos/id/1/5000/3333" },
      photosAndVideos: [
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/1084/536/354" },
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/2/5000/3333" },
      ],
    },
    {
      name: "Aboba",
      mainPhoto: { url: "https://picsum.photos/id/1/5000/3333" },
      photosAndVideos: [
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/1084/536/354" },
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/2/5000/3333" },
      ],
    },
    {
      name: "Aboba",
      mainPhoto: { url: "https://picsum.photos/id/1/5000/3333" },
      photosAndVideos: [
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/1084/536/354" },
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/2/5000/3333" },
      ],
    },
    {
      name: "Aboba",
      mainPhoto: { url: "https://picsum.photos/id/1/5000/3333" },
      photosAndVideos: [
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/1084/536/354" },
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/2/5000/3333" },
      ],
    },
    {
      name: "Aboba",
      mainPhoto: { url: "https://picsum.photos/id/1/5000/3333" },
      photosAndVideos: [
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/1084/536/354" },
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/2/5000/3333" },
      ],
    },
    {
      name: "Aboba",
      mainPhoto: { url: "https://picsum.photos/id/1/5000/3333" },
      photosAndVideos: [
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/1084/536/354" },
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/2/5000/3333" },
      ],
    },
    {
      name: "Aboba",
      mainPhoto: { url: "https://picsum.photos/id/1/5000/3333" },
      photosAndVideos: [
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/1084/536/354" },
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/2/5000/3333" },
      ],
    },
    {
      name: "Aboba",
      mainPhoto: { url: "https://picsum.photos/id/1/5000/3333" },
      photosAndVideos: [
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/1084/536/354" },
        { url: "https://picsum.photos/id/2/5000/3333" },
        { url: "https://picsum.photos/id/2/5000/3333" },
      ],
    },
  ],
};

interface branchModeProps {
  mode: string;
}

export const branchMode: branchModeProps = { mode: null };

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

export class Nicknames {
  name: string;
  Vissible: number;

  constructor(name: string) {
    this.name = name;
  }
}

export interface AuditLogProps {
  MembersName: Array<Nicknames>;
  Descriptions: Array<Nicknames>;
  Photo: Array<PhotoOrVideo>;
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

interface selectedRoleProps {
  selectedRole: Role;
}

export const selectedRole: selectedRoleProps = {
  selectedRole: null,
};

export const roleCharacter = () => {
  if (selectedRole.selectedRole) {
    return selectedRole.selectedRole;
  } else {
    return tempRole;
  }
};

export interface ChannelProps {
  subscribersQuantity: number;
  subscribers: Array<Contact>;
  branchParents: Array<BranchParent>;
  events: Array<ChannelEvent>;
  roles: Array<Role>;
}

export const channel: ChannelProps = {
  subscribersQuantity: 1002313,
  subscribers: [],
  branchParents: new Array<BranchParent>(),
  roles: new Array<Role>(),
  events: [
    {
      author: {
        avatar: "https://picsum.photos/id/2/5000/3333",
        name: "Dmytro",
        id: 1,
      },
      text: "Deleted user @traewe",
    },
    {
      author: {
        avatar: "https://picsum.photos/id/2/5000/3333",
        name: "Aboba",
        id: 1,
      },
      text: "Deleted user @traewe",
    },
    {
      author: {
        avatar: "https://picsum.photos/id/2/5000/3333",
        name: "wda dwd ad awd awd aw dawdawd awdawd awd awd awd awd awd awd wad a d",
        id: 1,
      },
      text: "Deleted the message @traewe",
    },
    {
      author: {
        avatar:
          "https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0",
        name: "Dmytro",
        id: 1,
      },
      text: "Added user @traewe",
    },
    {
      author: {
        avatar: "https://picsum.photos/id/2/5000/3333",
        name: "Dmytro",
        id: 1,
      },
      text: "Deleted user @traewe",
    },
    {
      author: {
        avatar: "https://picsum.photos/id/2/5000/3333",
        name: "Dmytro",
        id: 1,
      },
      text: "Deleted user @traewe",
    },
    {
      author: {
        avatar: "https://picsum.photos/id/2/5000/3333",
        name: "Dmytro",
        id: 1,
      },
      text: "Deleted user @traewe",
    },
    {
      author: {
        avatar: "https://picsum.photos/id/2/5000/3333",
        name: "Dmytro",
        id: 1,
      },
      text: "Deleted user @traewe",
    },
    {
      author: {
        avatar: "https://picsum.photos/id/2/5000/3333",
        name: "Dmytro",
        id: 1,
      },
      text: "Deleted user @traewe",
    },
    {
      author: {
        avatar: "https://picsum.photos/id/2/5000/3333",
        name: "Dmytro",
        id: 1,
      },
      text: "Deleted user @traewe",
    },
    {
      author: {
        avatar: "https://picsum.photos/id/2/5000/3333",
        name: "Dmytro",
        id: 1,
      },
      text: "Deleted user @traewe",
    },
    {
      author: {
        avatar: "https://picsum.photos/id/2/5000/3333",
        name: "Dmytro",
        id: 1,
      },
      text: "Deleted user @traewe",
    },
    {
      author: {
        avatar: "https://picsum.photos/id/2/5000/3333",
        name: "Dmytro",
        id: 1,
      },
      text: "Deleted user @traewe",
    },
    {
      author: {
        avatar: "https://picsum.photos/id/2/5000/3333",
        name: "Dmytro",
        id: 1,
      },
      text: "Deleted user @traewe",
    },
    {
      author: {
        avatar: "https://picsum.photos/id/2/5000/3333",
        name: "Dmytro",
        id: 1,
      },
      text: "Deleted user @traewe",
    },
    {
      author: {
        avatar: "https://picsum.photos/id/2/5000/3333",
        name: "Dmytro",
        id: 1,
      },
      text: "Deleted user @traewe",
    },
    {
      author: {
        avatar: "https://picsum.photos/id/2/5000/3333",
        name: "Dmytro",
        id: 1,
      },
      text: "Deleted user @traewe",
    },
    {
      author: {
        avatar: "https://picsum.photos/id/2/5000/3333",
        name: "Dmytro",
        id: 1,
      },
      text: "Deleted user @traewe",
    },
    {
      author: {
        avatar: "https://picsum.photos/id/2/5000/3333",
        name: "Dmytro",
        id: 1,
      },
      text: "Deleted user @traewe",
    },
    {
      author: {
        avatar: "https://picsum.photos/id/2/5000/3333",
        name: "Dmytro",
        id: 1,
      },
      text: "Deleted user @traewe",
    },
    {
      author: {
        avatar: "https://picsum.photos/id/2/5000/3333",
        name: "Dmytro",
        id: 1,
      },
      text: "Deleted user @traewe",
    },
    {
      author: {
        avatar: "https://picsum.photos/id/2/5000/3333",
        name: "Dmytro",
        id: 1,
      },
      text: "Deleted user @traewe",
    },
    {
      author: {
        avatar: "https://picsum.photos/id/2/5000/3333",
        name: "Dmytro",
        id: 1,
      },
      text: "Deleted user @traewe",
    },
    {
      author: {
        avatar: "https://picsum.photos/id/2/5000/3333",
        name: "Dmytro",
        id: 1,
      },
      text: "Deleted user @traewe",
    },
  ],
};

export class ChannelEvent {
  author: Contact;
  text: string;
}

interface tempGroupProps {
  selectedBranchParent: BranchParent;
  selectedBranchChild: BranchChild;
}

export const tempGroup: tempGroupProps = {
  selectedBranchParent: null,
  selectedBranchChild: null,
};

interface tempChannelProps {
  selectedBranchParent: BranchParent;
  selectedBranchChild: BranchChild;
  selectedRole: Role;
}

export const tempChannel: tempChannelProps = {
  selectedBranchParent: null,
  selectedBranchChild: null,
  selectedRole: null,
};

export class Contact {
  avatar: string;
  name: string;
  id: number;
}

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

export interface groupProps {
  branchParents: Array<BranchParent>;
}

export const group: groupProps = { branchParents: new Array<BranchParent>() };

export const character = () => {
  switch (branchMode.mode) {
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

export const tempCharacter = () => {
  switch (branchMode.mode) {
    case "user": {
      return tempUser;
    }
    case "group": {
      return tempGroup;
    }
    case "channel": {
      return tempChannel;
    }
  }
};

// It is created to return all acts if user goes back after changing role instead of pressing 'Done'
type MyFunction = () => void;
type FunctionArray = Array<MyFunction>;
var functions: FunctionArray = [];

export function addFunction(func: MyFunction): void {
  functions.push(func);
}

export function executeFunctions(): void {
  functions.forEach((func) => func());
}

export function clearFunctions(): void {
  functions = [];
}
