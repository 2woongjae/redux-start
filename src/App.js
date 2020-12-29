import "./App.css";
import TodoList from "./components/TodoList";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList />
        <Form />
      </header>
    </div>
  );
}

export default App;
