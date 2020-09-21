// FUNCTION COMPONENT //

import React from "react";

const Element = ({ todos, todo, setTodos }) => {
  // FUNCTION
  const deleteHandler = () => {
    //   console.log(todo);
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  // const editHandler = (id) => {
  //   console.log(id);
  //   const newTodos = todos;
  //   const todo = newTodos.find((todo) => todo.id === id);
  //   todo.edit = !todo.edit;

  //   setTodos({
  //     todos: newTodos,
  //   });
  // };

  // RENDER
  return (
    <div>
      {/* {} */}
      <li>
        <span className={`${todo.completed ? "completed" : ""}`}>
          {todo.text}
        </span>
        <button onClick={deleteHandler}>Remove</button>
        <button>Edit</button>
        <button onClick={completeHandler}>Complete</button>
      </li>
    </div>
  );
};

export default Element;

// CLASS COMPONENT //
