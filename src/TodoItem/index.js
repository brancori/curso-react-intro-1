import { BsCheckCircleFill } from 'react-icons/bs';
import { TiDelete } from 'react-icons/ti';

import '../css/style.css' 





function TodoItem(props){
    return (
      <li className='containerTodo'>
        <span 
  className={`icon ${props.completed && "icon-check--active"}`} 
  onClick={props.onComplete}
  >  <BsCheckCircleFill/></span>


        <p className={`todoText ${props.completed && "todoText--complete"}`}> {props.text} </p>
        <span 
        className='icon_deleted'
        onClick={props.onDelete}

        > <TiDelete/></span>
      </li>
    )
  }

  export {TodoItem}

