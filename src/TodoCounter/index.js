import React from "react";
import { TodoContext } from "../TodoContext";

function TodoCounter(){
   const {
    completedTodos,
    totalTodos,
   }  =  React.useContext(TodoContext);

  if(!!completedTodos <= 0 && totalTodos <= 0){
    return(
      <h1 className="title"> No quedan más pendientes por hoy</h1>
    )
  }else{
    return (
      <h1 className="title"> Has completado {completedTodos} de {totalTodos} pendientes</h1>
    )
  }

  } 

  export { TodoCounter};