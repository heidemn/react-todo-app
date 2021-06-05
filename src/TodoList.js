import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    console.log('todos', props.todos);

    const todoList = props.todos.map(text => {
      return {text, done: false};
    })

    // const todoMap = new Map();
    // for (const todo of props.todos) {
    //   todoMap.set(todo, !!JSON.parse(localStorage.getItem(`todo_{todo}`)));
    // }

    this.state = {
      todoList
    }
  }

  render() {
    const todos = this.state.todoList.map(todo => {
      return (
        <label key={todo.text} style={{display: "block"}}>
          <input type="checkbox"></input>
          {todo.text}
        </label>
      );
    })

    return (
      <div style={{textAlign: "left"}}>
        {todos}
        <div>
          <button>+</button>
          <input></input>
        </div>
      </div>
    );
  }
}

export default TodoList;
