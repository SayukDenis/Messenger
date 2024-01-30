// Oleksii Kovalenko telegram - @traewe

import {
  PhotoOrVideo,
  BranchParent,
  BranchChild,
  Voice,
  Link,
  Album,
  File,
  Role,
  Contact,
  ChannelOrGroupEvent,
} from "./DBClasses";

export interface ChannelProps {
  ImagePath: string;
  phoneNumber: string;
  username: string;
  bio: string;
  selectedInterval: number;
  isMuted: boolean;
  isBlocked: boolean;
  profileName: string;
  avatars: Array<PhotoOrVideo>;
  branchParents: Array<BranchParent>;
  photosAndVideos: Array<PhotoOrVideo>;
  files: Array<File>;
  voice: Array<Voice>;
  links: Array<Link>;
  albums: Array<Album>;
  subscribers: Array<Contact>;
  events: Array<ChannelOrGroupEvent>;
  roles: Array<Role>;
  selectedRole: Role;
  selectedBranchParent: BranchParent;
  selectedBranchChild: BranchChild;
  selectedPhotosAndVideos: Array<PhotoOrVideo>;
  selectedAlbum: Album;
  selectedPhoto: PhotoOrVideo;
  link: string;
}

export const channel: ChannelProps = {
  ImagePath: "https://picsum.photos/id/1084/536/354",
  phoneNumber: null,
  username: null,
  bio: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  selectedInterval: 0,
  isMuted: false,
  isBlocked: false,
  profileName: "My channel xD",
  branchParents: new Array<BranchParent>(),
  link: "https://translate.google.com.ua",
  avatars: [
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
      url: "https://fastly.picsum.photos/id/1027/200/300.jpg?hmac=WCxdERZ7sgk4jhwpfIZT0M48pctaaDcidOi3dKSHJYY",
    },
    {
      url: "https://www.techsmith.com/blog/wp-content/uploads/2016/11/what-is-high-res.jpg",
    },
    {
      url: "https://www.creativeboom.com/uploads/articles/e8/e8e93075801e9f3b444d2f0173ce5f17c8182112_1620.jpg",
    },
    {
      url: "https://fastly.picsum.photos/id/1027/200/300.jpg?hmac=WCxdERZ7sgk4jhwpfIZT0M48pctaaDcidOi3dKSHJYY",
    },
    {
      url: "https://www.techsmith.com/blog/wp-content/uploads/2016/11/what-is-high-res.jpg",
    },
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
  ],
  subscribers: [
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 5,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 1,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "dawd awd awd aw daw dawdawd awd awdawd awd aw d a",
      id: 2,
    },
    {
      avatar: "https://picsum.photos/id/1/5000/3333",
      name: "Dmytro",
      id: 3,
    },
    {
      avatar: "https://picsum.photos/id/2/5000/3333",
      name: "Dmytro",
      id: 4,
    },
  ],
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
  selectedRole: null,
  selectedBranchParent: null,
  selectedBranchChild: null,
  selectedPhotosAndVideos: new Array<PhotoOrVideo>(),
  selectedAlbum: null,
  selectedPhoto: null,
};
