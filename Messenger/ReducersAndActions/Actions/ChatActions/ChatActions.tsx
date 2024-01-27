

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
  type: 'SCROLL',
  scroll, 
  id
});

export const setAnimationOfBackgroundForScrolledMessage = (id: number = -1) => ({
  type: 'SET_ANIMATION_OF_BACKGROUND_FOR_SCROOLED_MESSAGE',
  id
})