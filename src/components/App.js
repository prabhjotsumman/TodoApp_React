import React, { Component } from "react";

import "../styles/App.css";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          id: 1,
          task: "Complete Todo App",
          completed: false
        }
      ]
    };
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addTask(task) {
    this.setState({
      tasks: [...this.state.tasks, { id: Date.now(), task, completed: false }]
    });
  }

  removeTask(id) {
    // const remaining = this.state.tasks.filter(task => task.id !== id)
    const remaining = this.state.tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    // console.log(remaining);
    this.setState({
      tasks: remaining
    });
  }
  render() {
    return (
      <div className="container">
        <h3 className="title">Todo List</h3>
        <hr />
        <TaskInput addTask={this.addTask} />

        <TaskList tasks={this.state.tasks} removeTask={this.removeTask} />
      </div>
    );
  }
}

export default App;
