
import {useState} from 'react'
import {Link} from 'react-router-dom'
import Form from './Form'

const Todos = ({todos,addTodo,delAll}) => {
    const [control,setControl]=useState(false)
    const [counter,setCounter]=useState(1)

    return (
     
        <div className='container text-center'>
          <div className='btn-group'>
        {!control && <button type='button' className="btn text-black  bg-light border" onClick={()=>setControl(!control)}>Add Todo</button>}
        {!control && <Link to='/todos' className="btn text-black  bg-light border">Show All</Link>}
        {!control && <button type='button' className="btn text-black  bg-light border" onClick={delAll}>Delete All</button>}
        </div>
        {control&&<Form addTodo={addTodo} setControl={setControl}/>}
        <div>
          {counter}
        </div>        
        <div className='container d-flex flex-column my-3'> 
            {!control&&todos.map((todo) => {
                  return(  
                      <Link to={`/todos/${todo.id}`} className='btn text-black mx-5 my-2 bg-light border text-decoration-none'> 
                      <div key={todo.id} className='todo'> 
                      <span className='text-break' style={{marginLeft:'10px'}}>{todo.title}</span>
                      </div>
                      </Link>
                    
                   );          
                })}
        </div>
       </div>
    )
}

export default Todos
