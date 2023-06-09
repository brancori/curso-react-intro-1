import React from 'react';
import '../css/style.css' 
import { TodoContext } from '../TodoContext';

function TodoSearch(){

  const  {searchValue,
    setSearchValue,}   
  =  React.useContext(TodoContext)

    return (
      <input
      placeholder="Corta el Cabello" 
      className='TodoSearch'
      value={searchValue }
      onChange={(event) =>{
        setSearchValue(event.target.value);
      }}
      ></input>
    )
  } 

  export {TodoSearch};