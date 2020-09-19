import React, { Component } from "react";
import List from "./List.js";

// ================================ //

class Todo extends Component {
  state = {
    value: "",
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.setState({ value: e.target.value })}
        />
        <button onClick={() => this.props.addTodos(this.state.value)}>
          Add
        </button>
        <List
          todos={this.props.todos}
          addTodos={this.props.addTodos}
          removeTodos={this.props.removeTodos}
          handleEdit={this.props.handleEdit}
          completed={this.props.completed}
        />
      </div>
    );
  }
}

export default Todo;

// const Todo = ({ todos, addTodos, removeTodos }) => {
// const [text, setText] = useState("");

// const handleChange = (e) => {
//   const val = e.target.value;
//   setText(val);
// };

// const handleSubmit = () => {
//   addTodos(text);
//   setText("");
// };
