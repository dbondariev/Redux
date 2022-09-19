import { createSelector } from "reselect";

export const tasksListSelector = state => state.tasks.tasksList;

export const sortedTasksListSelector = createSelector(
  [tasksListSelector],
  tasksList => {
    return tasksList.slice().sort((a, b) => a.done - b.done);
  }
);
