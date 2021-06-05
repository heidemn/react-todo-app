import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    //console.log('todos', props.todos);

    // const todoList = props.todos.map(text => {
    //   return {text, done: false};
    // })

    // const todoMap = new Map();
    // for (const todo of props.todos) {
    //   todoMap.set(todo, !!JSON.parse(localStorage.getItem(`todo_{todo}`)));
    // }
    
    try {      
      this.state = JSON.parse(localStorage.getItem('todos'));
    } catch (e) {
      console.error('Failed to parse todos from localStorage', e);
    }

    this.state = this.state || {
      todoList: [],
      newTodoText: '',
      newTodoId: 1
    }
    console.log(this.state);

    this.addTodo = this.addTodo.bind(this);
    this.updateNewTodoText = this.updateNewTodoText.bind(this);
  }

  save() {
    this.setState((state, props) => {
      console.log('Saving todos', state);
      localStorage.setItem('todos', JSON.stringify(state));
      return {};
    });
  }

  addTodo() {
    this.setState((state, props) => ({
      todoList: [{
        id: state.newTodoId,
        text: state.newTodoText,
        done: false
      }].concat(state.todoList),
      newTodoId: state.newTodoId + 1
    }));
    this.save();
  }

  updateNewTodoText(event) {
    this.setState({newTodoText: event.target.value});
    console.log({newTodoText: event.target.value});
  }

  render() {
    const todos = this.state.todoList.map(todo => {
      let del = () => {
        this.setState((state, props) => ({
          todoList: state.todoList.filter((td) => td !== todo)
        }));
        this.save();
      }

      return (
        <div key={todo.id} style={{display: "block"}}>
          <label>
            <input type="checkbox"></input>
            {todo.text}
          </label>&nbsp;
          <button onClick={del}>✗</button>
        </div>
      );
    })

    return (
      <div style={{textAlign: "left"}}>
        <div>
          <button onClick={this.addTodo}>+</button>
          <input onChange={this.updateNewTodoText}></input>
        </div>
        {todos}
      </div>
    );
  }
}

export default TodoList;
