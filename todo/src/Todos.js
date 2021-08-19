
import {useState} from 'react'
import {Link} from 'react-router-dom'
import Form from './Form'

const Todos = ({todos,addTodo,delAll,counter,delTodo}) => {
    const [control,setControl]=useState(false)

    return (
     
      <div className='container'>
          
        <div className='container btn-group mb-2 mt-4'>

          {!control && <button type='button' 
          className="btn btn-secondary text-white border" 
          onClick={()=>setControl(!control)}>
            Add ToDo
          </button>}

          {!control && <Link to='/todos' 
          className="btn text-black  bg-light border">
            Show All
          </Link>}

          {!control && <button type='button' 
          className="btn btn-danger text-wite border" 
          onClick={delAll}>
            Delete All
          </button>}

          </div>

        {!control&&<div className='border text-center mx-3 mb-2 bg-info text-white'
        style={{borderRadius:'5px'}}> 
          count: {counter}
        </div>  }
        
        {control&&<Form addTodo={addTodo} setControl={setControl}/>}
              
        <div className='container d-flex flex-column'> 
            {!control&&todos.map((todo) => {
                  return(  
                    <div  key={todo.id} className='btn-group row'>
                      <Link to={`/todos/${todo.id}`} 
                        className='btn col-10 text-black my-2 bg-light border'> 
                        <span className='text-break h3' style={{marginLeft:'10px'}}>{todo.title}</span>                 
                      </Link>
                      <Link to='/' 
                        className='btn btn-danger col-2 text-white text-left my-2 border text-decoration-none' 
                        onClick={()=>delTodo(todo.id)}>
                        Delete
                      </Link>
                    </div>      
                   );          
                })}
        </div>
       </div>
    )
}

export default Todos
