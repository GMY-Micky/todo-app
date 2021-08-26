
import {useState} from 'react'
import {Link} from 'react-router-dom'
import Form from './Form'

const Todos = ({todos,addTodo,delAll,counter,delTodo}) => {
    const [control,setControl]=useState(false)

    return (
     
      <div className='container'>
          
        <div style={{width:'350px'}} 
        className='container d-flex justify-content-center btn-group mb-2 mt-4'
        >

          {!control && <button type='button' 
          className="btn btn-success text-white border" 
          onClick={()=>setControl(!control)}>
            Add ToDo
          </button>}

          {!control && <Link to='/todos' 
          className="btn btn-success  border">
            Show All
          </Link>}

          {!control && <button type='button' 
          className="btn btn-danger text-wite border"
          onClick={delAll}>
            Delete All
          </button>}

          </div>

        {!control&&<div className='mx-3 mb-2'
        style={{borderRadius:'5px'}}> 
          count: {counter}
        </div>}
        
        {control&&<Form addTodo={addTodo} setControl={setControl}/>}
              
        <div className='container d-flex flex-column'> 
            {!control&&todos.map((todo) => {
                  return(  
                    <div  key={todo.id} className='btn-group row'>
                      <Link to={`/todos/${todo.id}`} 
                        className='btn col-11 text-black my-2 bg-light border'> 
                        <span className='text-break h3' style={{marginLeft:'10px'}}>{todo.title}</span>                 
                      </Link>
                      <Link to='/' 
                        className='btn col-1 text-white text-left my-2 border text-decoration-none' 
                        onClick={()=>delTodo(todo.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash text-dark" viewBox="0 0 16 16">
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                      </Link>
                    </div>      
                   );          
                })}
        </div>
       </div>
    )
}

export default Todos
