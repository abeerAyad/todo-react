import Button from '../button'
import './style.css'

const AddCard = ({ onchange, value, todos, setValue, setTodos }) => {

  const addTodo =() => {
    console.log('data');
    if(value) {

      const newObj = {
        title: value,
        completed: false,
        id: Math.random()
      }
      setTodos([newObj, ...todos])
      setValue('')
    }
  }
  
  return (
    <div className="card">
        <input type="text"
         value={value} 
        className="input" 
        placeholder="What would you like to do" 
        onChange={onchange} />

        <Button text='Add' type='add' onclick={addTodo} />

    </div>
  )
}

export default AddCard