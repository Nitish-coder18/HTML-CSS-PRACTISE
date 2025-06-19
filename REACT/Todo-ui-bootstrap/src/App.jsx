import './App.css';
import EnterTodo from './components/EnterTodo';
import TodoName from './components/Title';
import Todoitem from './components/TodoItem.jsx'; // This is the component

function App() {
  const todoItems = [
    { id: 1, todoText: 'Buy Milk', todoDate: '17-Jun-2025' },
    { id: 2, todoText: 'Go To College', todoDate: 'Every Day' },
    { id: 3, todoText: 'Exercise', todoDate: '19-Jun-2025' }
  ];

  return (
    <>
      <center>
        <TodoName />
        <EnterTodo />
        {todoItems.map((item) => (
          <Todoitem
            key={item.id}
            todoText={item.todoText}
            todoDate={item.todoDate}
          />
        ))}
      </center>
    </>
  );
}

export default App;
