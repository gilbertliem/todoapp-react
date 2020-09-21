// FUNCTION COMPONENT //

import React, { useState, useEffect } from "react";
import Header from "./component/Header"; // mangambil component header dari file header
import Todo from "./component/Todo";
import List from "./component/List";
import "./App.css";

// ================================ //

function App() {
  // STATE
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  // USE EFFECT
  useEffect(() => {
    getLocalStorage();
  }, []);
  // USE EFFECT
  useEffect(() => {
    filterHandler();
    saveLocalStorage();
  }, [todos, status]);
  // FUNCTION
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  };
  // SAVE TO LOCAL STORAGE
  const saveLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalStorage = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todosLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todosLocal);
    }
  };

  // RENDER
  return (
    <div className="App">
      <Header />
      <Todo
        text={text}
        setText={setText}
        todos={todos}
        setTodos={setTodos}
        status={status}
        setStatus={setStatus}
      />
      <List todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;

// CLASS COMPONENT //

// import React, { Component } from "react";
// import Header from "./component/Header"; // mangambil component header dari file header
// import Todo from "./component/Todo";
// // import List from "./component/List";
// import "./App.css";

// // ================================ //

// export default class App extends Component {
//   // STATE
//   state = {
//     text: "",
//     todos: [],
//     status: "all",
//     filteredTodos: [],
//   };
//   // FUNCTION
//   inputHandler = (e) => {
//     console.log(e.target.value);
//     this.setText(e.target.value);
//   };

//   addHandler = (text) => {
//     // text.preventDefault();
//     this.setTodos({
//       todos: [
//         ...this.state.todos,
//         {
//           text,
//           date: new Date(),
//           completed: false,
//           id: Math.random(),
//         },
//       ],
//     });
//     this.setText("");
//   };

//   // RENDER
//   render() {
//     console.log(this.state.todos);
//     return (
//       <div className="App">
//         <Header />
//         <Todo
//           inputHandler={this.inputHandler}
//           text={this.state.text}
//           // todos={this.state.todos}
//           // status={this.state.status}
//           // filteredTodos={this.state.filteredTodos}
//         />
//         {/* <List todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} /> */}
//       </div>
//     );
//   }
// }
