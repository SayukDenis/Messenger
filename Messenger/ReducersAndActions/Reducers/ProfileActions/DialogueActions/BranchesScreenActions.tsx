// Oleksii Kovalenko telegram - @traewe

const initialState = {
  isDeleteBranchPressed: false,
  branchNameToRemove: "",
  branchName: "",
  pickedEmoji: "",
  isEmojiSelectionVisible: false,
  isColorSelectionVisible: false,
  pickedColor: "rgb(124, 79, 145)",
  isSpecialColorSelectionVisible: false,
  lengthOfAllEmojisPlusSpaces: 0,
  color: "",
  inputText: "",
};

const BranchesScreenReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IS_DELETE_BRANCH_PRESSED":
      return {
        ...state,
        isDeleteBranchPressed: action.payload,
      };
    case "SET_BRANCH_NAME_TO_REMOVE":
      return {
        ...state,
        branchNameToRemove: action.payload,
      };
    case "SET_BRANCH_NAME":
      return {
        ...state,
        branchName: action.payload,
      };
    case "SET_PICKED_EMOJI":
      return {
        ...state,
        pickedEmoji: action.payload,
      };
    case "SET_IS_EMOJI_SELECTION_VISIBLE":
      return {
        ...state,
        isEmojiSelectionVisible: action.payload,
      };
    case "SET_IS_COLOR_SELECTION_VISIBLE":
      return {
        ...state,
        isColorSelectionVisible: action.payload,
      };
    case "SET_PICKED_COLOR":
      return {
        ...state,
        pickedColor: action.payload,
      };
    case "SET_IS_SPECIAL_COLOR_SELECTION_VISIBLE":
      return {
        ...state,
        isSpecialColorSelectionVisible: action.payload,
      };
    case "SET_LENGTH_OF_ALL_EMOJIS_PLUS_SPACES":
      return {
        ...state,
        lengthOfAllEmojisPlusSpaces: action.payload,
      };
    case "SET_COLOR":
      return {
        ...state,
        color: action.payload,
      };
    case "SET_INPUT_TEXT":
      return {
        ...state,
        inputText: action.payload,
      };
    default:
      return state;
  }
};

export default BranchesScreenReducer;
