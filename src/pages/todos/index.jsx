import { useEffect, useState } from "react"
import axios from "axios"
import AddCard from '../../components/addCard'
import Table from '../../components/table'
import './style.css'

const Todos = () => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const getData = async () => {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
      console.log(data.slice(0, 10));
      setTodos(data.slice(0, 10))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  },[])

  return (
    <div className="container">
      <AddCard value={value} onchange={handleChange} setTodos={setTodos} todos={todos} setValue={setValue} />
      <Table todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default Todos
