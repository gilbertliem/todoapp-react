import React, { Component } from "react";
// import Todo from "./Todo";

// ================================ //

export default class List extends Component {
  state = {
    value: "",
  };

  handleEdit = (val, i) => {
    this.setState({ value: val });
    this.props.handleEdit(null, i);
  };

  render() {
    return (
      <ul>
        {this.props.todos.map((el, id) => (
          <li>
            {!el.edit ? (
              el.completed ? (
                <s>
                  {el.text}
                  <span onClick={() => this.props.removeTodos(id)}>X</span>
                  <span onClick={() => this.handleEdit(el.text, id)}>Edit</span>
                  <span onClick={() => this.handleEdit(el.text, id)}>
                    Complete
                  </span>
                </s>
              ) : (
                <>
                  {el.text}
                  <span onClick={() => this.props.removeTodos(id)}>X</span>
                  <span onClick={() => this.handleEdit(el.text, id)}>Edit</span>
                  <span onClick={() => this.props.complete(id)}>Complete</span>
                </>
              )
            ) : (
              <>
                <input
                  type="text"
                  value={this.state.value}
                  onChange={(e) => this.setState({ value: e.target.value })}
                />
                <button onClick={() => this.props.edit(this.state.value, id)}>
                  Save
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    );
  }
}
