import React from "react";

const TaskApp = props => {
  return (
    <ul>
      {props.tasks.map(item => {
        return (
          <li
            className={item.completed ? "list-item completed" : "list-item "}
            key={item.id}
          >
            <button onClick={() => props.completeTask(item.id)}>
              {item.completed ? "✔" : "✗"}
            </button>
            {item.task}
            <button className="btn-del" onClick={() => props.removeTaskFromList(item.id)}>X</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskApp;
