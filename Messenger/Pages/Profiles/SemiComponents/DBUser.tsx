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
};
