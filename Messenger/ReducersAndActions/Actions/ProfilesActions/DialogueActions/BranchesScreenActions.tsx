// Oleksii Kovalenko telegram - @traewe

export const setIsDeleteBranchPressed = (value: string) => ({
  type: "SET_IS_DELETE_BRANCH_PRESSED",
  payload: value,
});

export const setPickedEmoji = (value: string) => ({
  type: "SET_PICKED_EMOJI",
  payload: value,
});

export const setBranchNameToRemove = (name: string) => ({
  type: "SET_BRANCH_NAME_TO_REMOVE",
  payload: name,
});

export const setBranchName = (name: string) => ({
  type: "SET_BRANCH_NAME",
  payload: name,
});

export const setIsEmojiSelectionVisible = (value: boolean) => ({
  type: "SET_IS_EMOJI_SELECTION_VISIBLE",
  payload: value,
});

export const setIsColorSelectionVisible = (value: boolean) => ({
  type: "SET_IS_COLOR_SELECTION_VISIBLE",
  payload: value,
});

export const setPickedColor = (color: string) => ({
  type: "SET_PICKED_COLOR",
  payload: color,
});

export const setIsSpecialColorSelectionVisible = (value: boolean) => ({
  type: "SET_IS_SPECIAL_COLOR_SELECTION_VISIBLE",
  payload: value,
});

export const setLengthOfAllEmojisPlusSpaces = (value: number) => ({
  type: "SET_LENGTH_OF_ALL_EMOJIS_PLUS_SPACES",
  payload: value,
});

export const setColor = (color: string) => ({
  type: "SET_COLOR",
  payload: color,
});

export const setInputText = (text: string) => ({
  type: "SET_INPUT_TEXT",
  payload: text,
});
