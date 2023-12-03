// Oleksii Kovalenko telegram - @traewe

const initialState = {
  selectedInterval: 0,
  isEmergencyMessagesEnabled: false,
  currentPosition: "",
};

const PermissionScreenReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELECTED_INTERVAL":
      return {
        ...state,
        selectedInterval: action.payload,
      };
    case "SET_IS_EMERGENCY_MESSAGES_ENABLED":
      return {
        ...state,
        isEmergencyMessagesEnabled: action.payload,
      };
    case "SET_CURRENT_POSITION":
      return {
        ...state,
        currentPosition: action.payload,
      };
    default:
      return state;
  }
};

export default PermissionScreenReducer;
