import '../css/style.css' 

function TodoList({children}){
    return (
        <ul className='relative'>
            {children}
        </ul>
    )
  } 

  export {TodoList};