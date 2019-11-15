export function addTask(task) {
  return {
    type: "ADD_TASK",
    payload: task
  };
}

export function completeTask(taskID) {
  return {
    type: "COMPLETE_TASK",
    payload: taskID
  };
}

export function removeTaskFromList(taskID) {
  return {
    type: "REMOVE_TASK",
    payload: taskID
  };
}
