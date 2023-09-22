import Tbody from '../tbody';
import TableHeader from '../thead';
import './style.css';



const Table = ({ todos, setTodos }) => {
  const handleFilter = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="table-card">
      <h2>Todo List</h2>
      <table>
        <TableHeader />
   
          {todos.map((todo) => (
            <Tbody key={todo.id} todo={todo} filterFunc={() => handleFilter(todo.id)} />
          ))}
      </table>
    </div>
  );
};

export default Table;
