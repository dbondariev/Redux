import React from "react";
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import Task from "./Task";
import CreateTaskInput from "./CreateTaskInput";
import * as tasksActions from "./tasks.actions";
import { sortedTasksListSelector } from "./tasks.selector";

class TasksList extends React.Component {
  componentDidMount() {
    this.props.getTaskList();
  }

  render() {
    const { tasks } = this.props;
    return (
      <main className="todo-list">
        <CreateTaskInput onCreate={this.props.createTask} />
        <ul className="list">
          {tasks.map(task => (
            <Task
              key={task.id}
              {...task}
              onChange={this.props.updateTask}
              onDelete={this.props.deleteTask}
            />
          ))}
        </ul>
      </main>
    );
  }
}

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()),
  getTaskList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
};

const mapDispatch = {
  getTaskList: tasksActions.getTaskList,
  updateTask: tasksActions.updateTask,
  deleteTask: tasksActions.deleteTask,
  createTask: tasksActions.createTask,
};

const mapState = state => {
  return {
    tasks: sortedTasksListSelector(state),
  };
}

export default connect(mapState, mapDispatch)(TasksList);
