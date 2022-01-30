import './App.scss';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
