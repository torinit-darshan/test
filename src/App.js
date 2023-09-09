import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>Hi There!</h4>
        <h1 id="head-text">{process.env.REACT_APP_HEAD_TEXT}</h1>
      </header>
    </div>
  );
}

export default App;
