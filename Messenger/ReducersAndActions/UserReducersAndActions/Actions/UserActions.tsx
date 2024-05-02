export const setSelfProfileUser = (selfProfile: any) => {
  console.log('setSelfProfileUser', selfProfile?.name);
  return {
    type: "SET_SELF_PROFILE_USER",
    selfProfile,
  }
};

export const setDialogues = (dialogues: any) => {
  // console.log('setDialogues', dialogues);
  return {
    type: "SET_DIALOGUES",
    dialogues,
  }
};