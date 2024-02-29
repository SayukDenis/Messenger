

export const incrementNumberOfSelectedMessages = () => ({
  type: 'INCREMENT'
});

export const decrementNumberOfSelectedMessages = () => ({
  type: 'DECREMENT'
});

export const resetNumberOfSelectedMessages = () => ({
  type: 'RESET'
});

export const setScrollStateForPinnedMessage = (scroll: boolean, id: number) => ({
  type: 'SCROLL_TO_PINNED_MESSAGE',
  scroll, 
  id
});

export const setScrollStateTappedMessage = (scroll: boolean, id: number) => ({
  type: 'SCROLL_TO_TAPPED_MESSAGE',
  scroll, 
  id
});

export const setAnimationOfBackgroundForScrolledMessage = (id: number = -1) => ({
  type: 'SET_ANIMATION_OF_BACKGROUND_FOR_SCROOLED_MESSAGE',
  id
})

export const addSelectedMessage = (id: number) => ({
  type: 'ADD_SELECTED_MESSAGE',
  id
})

export const removeSelectedMessage = (id: number) => ({
  type: 'REMOVE_SELECTED_MESSAGE',
  id
})

export const resetSelectedMessage = () => ({
  type: 'RESET_SELECTED_MESSAGE'
})

export const addCoordinationsOfMessage = (id:number, height:number) => ({
  type: 'ADD_COORDINATIONS_OF_MESSAGE',
  id,
  height
})

export const updateCoordinationsOfMessage = (id:number, height:number) => ({
  type: 'UPDATE_COORDINATIONS_OF_MESSAGE',
  id,
  height
})

export const removeCoordinationsOfMessage = (id:number) => ({
  type: 'REMOVE_COORDINATIONS_OF_MESSAGE',
  id
})

export const removeCoordinationsOfSelectedMessages = (listOfId:number[]) => ({
  type: 'REMOVE_COORDINATIONS_OF_SELECTED_MESSAGES',
  listOfId
})

export const removeCoordinationsOfAllMessages = () => ({
  type: 'REMOVE_COORDINATIONS_OF_ALL_MESSAGES'
})