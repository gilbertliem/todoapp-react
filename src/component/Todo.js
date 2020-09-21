// FUNCTION COMPONENT //

import React from "react";

// ================================ //

const Todo = ({ setTodos, todos, setText, text, setStatus }) => {
  // FUNCTION
  const inputHandler = (e) => {
    // console.log(e.target.value);
    setText(e.target.value);
  };
  const addHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: text,
        date: new Date(),
        completed: false,
        id: Math.random(),
        edit: false,
      },
    ]);
    setText("");
  };
  const statusHandler = (e) => {
    // console.log(e.target.value);
    setStatus(e.target.value);
  };

  // RENDER

  return (
    <div>
      <input value={text} type="text" onChange={inputHandler} />
      <button onClick={addHandler}>Add</button>
      <select onChange={statusHandler} name="todos" id="">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default Todo;

// CLASS COMPONENT //

// import React, { Component } from "react";

// // ================================ //

// export default class Todo extends Component {
//   // FUNCTION

//   // RENDER
//   render() {
//     return (
//       <div>
//         <input onChange={this.inputHandler} type="text" />
//         <button>Add</button>
//         <select name="" id="">
//           <option value="all">All</option>
//           <option value="completed">Completed</option>
//           <option value="uncompleted">Uncompleted</option>
//         </select>
//         {/* <input value={text} type="text" onChange={inputHandler} /> */}
//         {/* <button onClick={addHandler}>Add</button> */}
//         {/* <select onChange={statusHandler} name="todos" id=""> */}
//         {/* <option value="all">All</option> */}
//         {/* <option value="completed">Completed</option> */}
//         {/* <option value="uncompleted">Uncompleted</option> */}
//         {/* </select> */}
//       </div>
//     );
//   }
// }
