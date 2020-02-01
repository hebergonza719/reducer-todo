import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  console.log("this is props.todos", props.todos);
  return (
    <section>
      {props.todos.map(item => {
        return (
          <Todo 
            todo={item} 
            key={item.id}
            toggleCompleted={props.toggleCompleted}
                      
          />
        )
      })}

    </section>
  )
};

export default TodoList;