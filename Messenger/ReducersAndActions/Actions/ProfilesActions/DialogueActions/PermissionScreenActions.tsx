// Oleksii Kovalenko telegram - @traewe

export const setSelectedInterval = (value: number) => ({
  type: "SET_SELECTED_INTERVAL",
  payload: value,
});

export const setIsEmergencyMessagesEnabled = (value: boolean) => ({
  type: "SET_IS_EMERGENCY_MESSAGES_ENABLED",
  payload: value,
});

export const setCurrentPosition = (value: string) => ({
  type: "SET_CURRENT_POSITION",
  payload: value,
});
