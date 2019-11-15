const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      let task = action.payload;
      return [...state, { id: Date.now(), task, completed: false }];

    case "COMPLETE_TASK":
      const remaining = state.map(task => {
        if (task.id === action.payload) {
          task.completed = !task.completed;
        }
        return task;
      });
      return remaining;

    case "REMOVE_TASK":
      return [...state.filter(task => task.id !== action.payload)];

    default:
      return state;
  }
};

export default TodoReducer;
