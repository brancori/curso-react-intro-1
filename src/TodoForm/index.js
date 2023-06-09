import React from "react";
import {TodoContext} from "../TodoContext";
import '../css/style.css' 


function TodoForm (){
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    const onCancel = () =>{
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
      };


    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo Tarea</label>
            <textarea
            value={newTodoValue}
            onChange={onChange}
                placeholder="Terminar mis curso"
            />
            <div className="TodoForm_Cont">
                <button onClick={onCancel} className="btn cancel" type="button">CANCELAR</button>
                <button className="btn add" type="submit">AGREGAR</button>
            </div>
        </form>
    )
}

export { TodoForm}