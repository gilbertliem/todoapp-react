// FUNCTION COMPONENT //
import React from "react";
import Element from "./Element";

// ================================ //

const List = ({ todos, setTodos, filteredTodos }) => {
  console.log(todos);

  // const editHandler = (id) => {
  //   const newTodos = todos;
  //   const todo = newTodos.find((todo) => todo.id === id);
  //   todo.edit = !todo.edit;

  // };

  // RENDER
  return (
    <div className="list">
      <ul>
        {filteredTodos.map((todo) => (
          <Element
            key={todo.id}
            todos={todos}
            todo={todo}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;

// CLASS COMPONENT //

// import React, { Component } from "react";

// export default class Todo extends Component {
//   render() {
//     return (
//       <div className="list">
//         <ul>
//           {/* {filteredTodos.map((todo) => (
//           <Element
//             key={todo.id}
//             todos={todos}
//             todo={todo}
//             setTodos={setTodos}
//           />
//         ))} */}
//         </ul>
//       </div>
//     );
//   }
// }
