import logo from './logo.svg';
import './App.css';
import Hello from './Hello'
import Timer from './Timer'
import TodoList from './TodoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p> */}

        <div>
          <Hello name="john" />
          <Timer></Timer>
          <Timer increment={2}></Timer>
        </div>
        <div style={{marginTop: "20px"}}>
          <TodoList todos={["Do more stuff", "Foo bar"]}></TodoList>
        </div>
      </header>
    </div>
  );
}

export default App;
