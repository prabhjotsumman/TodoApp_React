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
            <button onClick={() => props.removeTask(item.id)}>
              {item.completed ? "✔" : "✗"}
            </button>
            {item.task}
          </li>
        );
      })}
    </ul>
  );
};

export default TaskApp;
