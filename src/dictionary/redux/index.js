const INITIAL_STATE = {
  userWords: null,
  selectedWords: {},
  isAllSelected: false,
  isAllDeleted: false,
};

export const setUserWords = (userWords) => ({
  type: 'SET_USER_WORDS',
  userWords,
});

export const selectWords = (selectedWords) => ({
  type: 'SELECT_WORDS',
  selectedWords,
});

export const setAllSelected = (isAllSelected) => ({
  type: 'SET_ALL_SELECTED',
  isAllSelected,
});

export const setAllDeleted = (isAllDeleted) => ({
  type: 'SET_ALL_DELETED',
  isAllDeleted,
});

export const resetState = () => ({
  type: 'RESET_STATE',
  ...INITIAL_STATE,
});

export default (state = INITIAL_STATE, action) => {
  const { type, ...payload } = action;
  switch (type) {
    case 'SELECT_WORDS':
      return {
        ...state,
        selectedWords: {
          ...state.selectedWords,
          ...payload.selectedWords,
        },
      };
    case 'SET_USER_WORDS':
    case 'SET_ALL_SELECTED':
    case 'SET_ALL_DELETED':
    case 'RESET_STATE':
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
