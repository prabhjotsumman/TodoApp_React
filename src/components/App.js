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
    this.removeTaskFromList = this.removeTaskFromList.bind(this);
  }

  addTask(task) {
    this.setState({
      tasks: [...this.state.tasks, { id: Date.now(), task, completed: false }]
    });
  }

  removeTask(id) {
    const remaining = this.state.tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    this.setState({
      tasks: remaining
    });
  }

  removeTaskFromList(id){
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
    });
  }
  render() {
    return (
      <div className="container">
        <div className="title">Todo List</div>
        <hr />
        <TaskInput addTask={this.addTask} />
        {
          (!this.state.tasks.length) ? <h5>Add some items to show here...</h5> :""
        }
        <TaskList tasks={this.state.tasks} removeTask={this.removeTask} removeTaskFromList={this.removeTaskFromList} />
      </div>
    );
  }
}

export default App;
