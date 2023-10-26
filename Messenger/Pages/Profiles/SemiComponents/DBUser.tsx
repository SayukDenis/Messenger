export interface UserProps {
  ImagePath: string;
  Nickname: string;
  selectedInterval: number;
  isMuted: boolean;
  isBlocked: boolean;
  profileName: string;
  lastTimeOnline: string;
  MembersCount: string;
  isEmergencyMessagesEnabled: boolean;
  GroupBio: string;
  branches: Array<Branch>;
  photosAndVideos: Array<PhotoOrVideo>;
  files: Array<File>;
  clearChatText: string;
  removalText: string;
}

export const user: UserProps = {
  ImagePath: "https://picsum.photos/id/1084/536/354",
  Nickname: "Aboba ABOBA aboba ABOBA AboBA BaoBAB",
  selectedInterval: 0,
  isMuted: false,
  isBlocked: false,
  profileName: "Олексій Док Док Док",
  lastTimeOnline: "Був online давно",
  MembersCount: "10 members",
  isEmergencyMessagesEnabled: false,
  GroupBio: "Aboba - cool",
  branches: new Array<Branch>(),
  clearChatText: "Do you really want to clear chat?",
  removalText: "Do you really want to delete",
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
};

export class Branch {
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
