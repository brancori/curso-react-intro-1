import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
import { TodosLoadng } from '../TodosLoadng';
import { TodosErrors } from '../TodosErrors' ;
import { EmpyTodos } from '../EmpyTodos' ;
import { TodoForm } from '../TodoForm' ;
import { Modal } from "../Modal";
import { TodoContext } from "../TodoContext";

function AppUI(){
  const 
    {
      loading,
      error,
      completeTodo,
      DeleteTodo,
      searchedTodos,
      openModal,
      setOpenModal,
    } = React.useContext(TodoContext);
  
    return (
        <>
          <div className='mainContainer'>

          <TodoCounter/>
          <TodoSearch/>

            <TodoList>
            {loading && (
            <>
            <TodosLoadng/>
            <TodosLoadng/>
            <TodosLoadng/>
            </>)}
            {error && <TodosErrors/>}

            {(!loading && searchedTodos.length === 0) && 
            <EmpyTodos/>}

            {searchedTodos.map(todo =>(
              <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => DeleteTodo(todo.text)}
              />
            ))}
          </TodoList>

          <CreateTodoButton
          setOpenModal={setOpenModal}
          />
          </div>
          {openModal && (
            <Modal>
                <TodoForm/>
            </Modal>
          )}
    
        </>
      );
}

export {AppUI};
