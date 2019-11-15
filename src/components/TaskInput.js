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
    if (e.target.taskname.value === "") return;
    this.props.addTask(e.target.taskname.value);
    e.target.taskname.value = "";
  }
  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter task name..."
          name="taskname"
          className="txtb"
        ></input>
      </form>
    );
  }
}

export default TaskInput;
