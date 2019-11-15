import React, { Component } from "react";

class TaskInput extends Component {
  constructor() {
    super();
    this.state = {
      taskName: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTask(e.target.taskname.value);
    e.target.taskname.value="";
  }
  render() {
    return (
      <form onSubmit={(e)=>this.handleSubmit(e)}>
          <label name="taskname">Add Task: </label>
          <input
            type="text"
            placeholder="Enter task name..."
            name="taskname"
          ></input>
        </form>
    );
  }
}

export default TaskInput;
