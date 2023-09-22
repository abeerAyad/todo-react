import  { useState } from 'react';
import Button from '../button';
import { FaTrashAlt } from 'react-icons/fa';

import './style.css';

const Tbody = ({ todo, filterFunc }) => {
  const { title, completed, id } = todo;
  const [isCompleted, setIsCompleted] = useState(completed);
  const toggle = () => setIsCompleted(!isCompleted)

  return (
    <tr>
      <td>{title}</td>
      <td>
        <Button onclick={toggle} text={isCompleted ? 'Completed' : 'Pending'} type={isCompleted ? '': 'add'} />
      </td>
      <td>
        <FaTrashAlt
          color="#e63946"
          cursor="pointer"
          onClick={() => filterFunc(id)} 
        />
      </td>
    </tr>
  );
};

export default Tbody;
