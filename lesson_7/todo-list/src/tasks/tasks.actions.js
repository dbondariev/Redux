import * as tasksGateway from "./tasksGateway.js";
import { tasksListSelector } from "./tasks.selector";

export const TASKS_LIST_RECIEVED = "TASKS_LIST_RECIEVED";

export const tasksListRecieved = tasksList => {
  const action = {
    type: TASKS_LIST_RECIEVED,
    payload: {
      tasksList,
    },
  };

  return action;
};

export const getTaskList = () => {
  const thunkAction = function (dispatch) {
    tasksGateway
      .fetchTasksList()
      .then(tasksList => dispatch(tasksListRecieved(tasksList)));
  };
  return thunkAction;
};

export const updateTask = taskId => {
  const thunkAction = function (dispatch, getState) {
    const state = getState();
    const tasksList = tasksListSelector(state);
    const task = tasksList.find(task => task.id === taskId);
    const updatedTask = {
      ...task,
      done: !task.done,
    };
    tasksGateway
      .updateTask(taskId, updatedTask)
      .then(() => dispatch(getTaskList()));
  };
  return thunkAction;
};

export const deleteTask = taskId => {
  const thunkAction = function (dispatch) {
    tasksGateway.deleteTask(taskId).then(() => dispatch(getTaskList()));
  };
  return thunkAction;
};

export const createTask = text => {
  const thunkAction = function (dispatch) {
    const taskData = {
      text,
      done: false,
    };
    tasksGateway.createTask(taskData)
      .then(() => dispatch(getTaskList()));
  };
  return thunkAction;
};
