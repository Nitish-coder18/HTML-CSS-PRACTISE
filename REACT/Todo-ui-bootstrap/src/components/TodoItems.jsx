import Todoitem from "./TodoItem";

const TodoItems = () => {
    const todoItems = [
    { id: 1, todoText: 'Buy Milk', todoDate: '17-Jun-2025' },
    { id: 2, todoText: 'Go To College', todoDate: 'weekday' },
    { id: 3, todoText: 'Exercise', todoDate: '19-Jun-2025' }
  ];
  return (
    <>
    {todoItems.map((item) => (
          <Todoitem
            key={item.id}
            id={item.id}
            todoText={item.todoText}
            todoDate={item.todoDate}
          />
        ))}
    </>
  );
};


export default TodoItems;