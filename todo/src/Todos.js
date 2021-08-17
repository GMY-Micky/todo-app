
import {useState} from 'react'
import {Link} from 'react-router-dom'
import Form from './Form'

const Todos = ({todos,addTodo}) => {
    const [control,setControl]=useState(false)

    return (
        <>
        {!control && <button type='button' className="add-btn" onClick={()=>setControl(!control)}>Add Todo</button>}
        {control&&<Form addTodo={addTodo} setControl={setControl}/>}
                
        <div className='todos'> 
            {!control&&todos.map((todo) => {
                  return(  
                    <div key={todo.id} className='todo'> 
                      <span style={{marginLeft:'10px'}}>{todo.title}</span>
                      <Link to={`/todos/${todo.id}`} className='view-btn'>
                        View  
                      </Link>
                    </div>
                   );          
                })}
        </div>
        </>
    )
}

export default Todos
