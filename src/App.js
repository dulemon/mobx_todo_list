import TodoList from "./views/TodoList/TodoList.jsx";
import todoListStore from "./stores/TodoListStore";
import { Provider } from "mobx-react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider todoList={todoListStore}>
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
