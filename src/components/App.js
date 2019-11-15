import React, { Component } from "react";

import "../styles/App.css";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTask, removeTaskFromList, completeTask } from "../redux/actions";
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">Todo List</div>
        <hr />
        <TaskInput addTask={this.props.addTask} />
        {!this.props.tasks.length ? (
          <h5>Add some items to show here...</h5>
        ) : (
          <TaskList
          tasks={this.props.tasks}
          completeTask={this.props.completeTask}
          removeTaskFromList={this.props.removeTaskFromList}
        />
        )}
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { addTask, removeTaskFromList, completeTask },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
