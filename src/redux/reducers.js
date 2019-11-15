const todoData = JSON.parse(localStorage.getItem("todos")) || [];

const TodoReducer = (state = todoData, action) => {
  switch (action.type) {
    case "ADD_TASK":
      let task = action.payload;
      let allTodos = [...state, { id: Date.now(), task, completed: false }];
      localStorage.setItem("todos", JSON.stringify(allTodos));
      return allTodos;

    case "COMPLETE_TASK":
      const remaining = state.map(task => {
        if (task.id === action.payload) {
          task.completed = !task.completed;
        }
        return task;
      });
      localStorage.setItem("todos", JSON.stringify(remaining));
      return remaining;

    case "REMOVE_TASK":
      let pendingTasks = [...state.filter(task => task.id !== action.payload)];
      localStorage.setItem("todos", JSON.stringify(pendingTasks));
      return pendingTasks;

    default:
      return state;
  }
};

export default TodoReducer;
