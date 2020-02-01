import React, { useState, useReducer } from 'react';
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

  const toggleCompleted = id => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: id })
  };
  
  return (
    <div>
      <TodoList 
        todos={state.todoList} 
        toggleCompleted={toggleCompleted}   
      />
      <TodoForm addNewTodo={addNewTodo} />
    </div>
  );
}

export default App;
