import React, { Component } from "react";
import Header from "./component/Header"; // mangambil component header dari file header
import Todo from "./component/Todo";
import "./App.css";
// import { render } from "@testing-library/react";
// import logo from './logo.svg';

// ================================ //

export default class App extends Component {
  // extends component = memberikan akses class untuk bisa pakai tools dari component
  state = {
    todos: [
      {
        text: "Todo 1",
        completed: false,
        date: new Date(),
        edit: false,
      },
    ],
  };

  addTodos = (value) => {
    // console.log(value);
    this.setState({
      todos: [
        ...this.state.todos,
        {
          text: value,
          completed: false,
          date: new Date(),
          edit: false,
        },
      ],
    });
  };

  removeTodos = (id) => {
    let newTodos = this.state.todos;
    newTodos.splice(id, 1);
    this.setState({ todos: newTodos });
  };

  handleEdit = (val, i) => {
    const edited = this.state.todos;
    if (val === null) {
      edited[i].edit = true;
    } else {
      edited[i].edit = true;
      edited[i].text = val;
    }
    this.setState({ todo: edited });
  };

  completed = (i) => {
    const edited = this.state.todos;
    edited[i].completed = !edited[i].completed;
    this.setState({ todo: edited });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Todo
          todos={this.todos}
          addTodos={this.addTodos}
          removeTodos={this.removeTodos}
          handleEdit={this.handleEdit}
          completed={this.completed}
        />
      </div>
    );
  }
}

// export default App = memberikan akses agar file lain bisa pakai component app
// addTodos = (value) => {
//   this.setState({
//     todos: [
//       ...this.state.todos,
//       {
//         text: value,
//         completed: false,
//         date: new Date(),
//       },
//     ],
//   });
// };

// removeTodos = (id) => {
//   const newTodos = this.state.todos.filter((todo) => todo.id !== id);
//   this.setState({
//     todos: newTodos,
//   });
// };

// 1. kalo data (state) mau diakses ke lebih dari satu component, maka data (state) harus ada di parent
// 2. state hanya bisa diubah melalui dirinya sendiri, berarti
// baris 50:
// todos dan addTodos = atributte(props) berguna untuk pass data atau function ke component lain

// event dipakai ketika user melakukan sesuatu (user klik button, ketik tulisan di input, dll). event bentuknya object.
