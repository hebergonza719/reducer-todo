import React, { useState, useReducer, useEffect } from 'react';
import './App.css';
import { initialState, todoReducer } from './reducers';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log("this is state.TodoList", state.todoList);

  const addNewTodo = (newItem) => {
    dispatch({ type: "ADD_TODO_ITEM", payload: newItem });
  };
  
  return (
    <div className="App">
      <TodoList todos={state.todoList} />
      <TodoForm addNewTodo={addNewTodo} />
    </div>
  );
}

export default App;
