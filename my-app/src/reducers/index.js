export const initialState = {
  todoList: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    }
  ]
}

export const todoReducer = (state, action) => {
  console.log("index.js: todoReducer: state:", state);
  switch(action.type) {
    case "ADD_TODO_ITEM":
      return {
        ...state,
        todoList: [
          ...state.todoList,
          { item: action.payload, completed: false, id: Date.now() }
        ]
      };
    case "TOGGLE_COMPLETED":
      return {
        ...state,
        todoList: state.todoList.map(item => {
          if(item.id === action.payload) {
            return {
              ...item,
              completed: !item.completed
            };
          }
          return item;
        })
      };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        todoList: state.todoList.filter(item => {
          return !item.completed;
        })
      };
    default:
      return state;
  };
};