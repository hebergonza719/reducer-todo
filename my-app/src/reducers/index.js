export const initialState = {
  todoList: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    }
  ]
}

// const newState = {
    //   ...this.state,
    //   todoList: this.state.todoList.map(item => {
    //     // if item meets condition, change completed status
    //     if (item.id === id) {
    //       return {
    //         ...item,
    //         completed: !item.completed
    //       };
    //     }
    //     // return others unchanged
    //     return item;
    //   })
    // };
    // this.setState(newState);

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
    default:
      return state;
  };
};