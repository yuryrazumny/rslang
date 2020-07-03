import { createSelector } from 'reselect';

export const sprintSelector = (state) => state.sprint;

export const initGameSelector = createSelector(
  sprintSelector,
  ({ initGame }) => initGame,
);

export const startGameSelector = createSelector(
  sprintSelector,
  ({ startGame }) => startGame,
);

export const overGameSelector = createSelector(
  sprintSelector,
  ({ overGame }) => overGame,
);

export const wordsSelector = createSelector(
  sprintSelector,
  ({ words }) => words,
);

export const resultsSelector = createSelector(
  sprintSelector,
  ({ results }) => results,
);

export const levelSelector = createSelector(
  sprintSelector,
  ({ level }) => level,
);
