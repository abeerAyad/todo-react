/* eslint-disable react/prop-types */
import './style.css'
const Button = ({text, type, onclick }) => {
  return (
    <button className={`btn ${type}`} onClick={onclick}>{text}</button>
  )
}

export default Button