export const getTodos = (state) => state.todos;
export const getDoneTodos = (state) => {
  const todos = getTodos(state);
  return todos.filter(todo => todo.done);
};