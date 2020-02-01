import React, { useState, useReducer } from 'react';
import './App.css';
import { initialState, todoReducer } from './reducers';
import TodoList from './components/TodoList';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log("this is state", state);
  
  return (
    <div className="App">
      <TodoList todos={state}/>
    </div>
  );
}

export default App;
