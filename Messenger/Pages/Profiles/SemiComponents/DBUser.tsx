interface tempUserProps {
  selectedAlbum: Album;
  selectedPhotosAndVideos: Array<PhotoOrVideo>;
  selectedBranch: BranchParent;
}

export const tempUser: tempUserProps = {
  selectedAlbum: null,
  selectedPhotosAndVideos: new Array<PhotoOrVideo>(),
  selectedBranch: null,
};

export interface UserProps {
  ImagePath: string;
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
  clearChatText: string;
  removalText: string;
  voice: Array<Voice>;
  links: Array<Link>;
  albums: Array<Album>;
}

export const user: UserProps = {
  ImagePath: "https://picsum.photos/id/1084/536/354",
  MembersName: [
    { name: "Aboba ABOBA aboba ABOBA AboBA BaoBAB" },
    { name: "Aboba ABOBA aboba ABOBA AboBA" },
    { name: "Aboba ABOBA aboba ABOBA AboBA BaoBAB Abob" },
    { name: "Viktor" },
  ],
  selectedInterval: 0,
  isMuted: false,
  isBlocked: false,
  profileName: "Aboba boba abob bibob",
  lastTimeOnline: "Був online давно",
  MembersCount: "10 members",
  isEmergencyMessagesEnabled: false,
  GroupBio: "Aboba - cool",
  branchParents: new Array<BranchParent>(),
  clearChatText: "Do you really want to clear chat?",
  removalText: "Do you really want to delete",
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
  ],
  photosAndVideos: [
    { url: "https://picsum.photos/id/1/5000/3333" },
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

  constructor(name: string) {
    this.name = name;
  }
}

export interface AuditLogProps {
  MembersName: Array<Nicknames>;
  Descriptions: Array<Nicknames>;
  Photo: Array<PhotoOrVideo>;
}

export const AuditLog: AuditLogProps = {
  MembersName: [
    { name: "Aboba ABOBA aboba ABOBA AboBA BaoBAB" },
    { name: "Aboba ABOBA aboba ABOBA AboBA" },
    { name: "Aboba ABOBA aboba ABOBA AboBA BaoBAB Abob" },
    { name: "Viktor" },
  ],
  Descriptions: [
    { name: " A Deleted b" },
    { name: " A Deleted b" },
    { name: " A Deleted b" },
    { name: " A Deleted b" },
  ],
  Photo: [
    { url: "https://picsum.photos/id/2/5000/3333" },
    { url: "https://picsum.photos/id/2/5000/3333" },
    { url: "https://picsum.photos/id/2/5000/3333" },
    { url: "https://picsum.photos/id/2/5000/3333" },
  ],
};
