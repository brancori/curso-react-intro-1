import React from 'react';
import '../css/style.css' 
import { TodoProvider } from '../TodoContext';

import { AppUI } from './AppUI';


function App() {

  return (
    <TodoProvider>
         <AppUI/> 
    </TodoProvider>
  );
}


export default App;
