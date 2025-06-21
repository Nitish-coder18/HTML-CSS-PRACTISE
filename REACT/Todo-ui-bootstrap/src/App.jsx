import './App.css';
import EnterTodo from './components/EnterTodo';
import TodoName from './components/Title';
import TodoItems from './components/TodoItems.jsx';
function App() {
  

  return (
    <>
      <center>
        <TodoName />
        <EnterTodo />
        <TodoItems  />
      </center>
    </>
  );
}

export default App;
