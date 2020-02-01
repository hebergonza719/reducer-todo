import React, { useState } from  'react';

const TodoForm = ({ addNewTodo, clearCompleted }) => {

  const [newItem, setNewItem] = useState("");
  console.log("newItem", newItem);

  const handleSubmit = e => {
    e.preventDefault();
    addNewTodo(newItem);
    setNewItem("");
  }; 

  const handleChanges = event => {
    setNewItem(event.target.value);
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newTodo"> Add New To-do
          <input
            // this.handleSubmit --> this makes ref to class TodoForm
            onChange={handleChanges}
            type="text"
            name="newTodo"
            value={newItem}
          />
        </label>
        <button>Add To-do</button>
      </form>
      {/* <button onClick={this.props.clearTodo}>Clear Completed</button> */}
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  )
}

export default TodoForm;