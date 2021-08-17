import {Link ,useParams} from 'react-router-dom'
import { useState, useEffect} from 'react';

const Todo = ({todos,delTodo,editTodo}) => {
    const {id}=useParams();
    const [title,setTitle]=useState();
    const [body,setBody]=useState();

    useEffect(() => {
        const data = todos.find((todo)=>todo.id=== parseInt(id));
        setTitle(data.title);
        setBody(data.body);
    }, [])

    return (
        <> 
            <div className='todo-data'>
                <h1 style={{color:'white',fontSize:'50px',padding:'20px'}}>{title}</h1>
                <p style={{color:'yellow',fontSize:'25px'}}>{body}</p>

                <button type='button' onClick={()=>delTodo(id)}>Delete</button>
                <button type='button' onClick={()=>editTodo(id)}>Edit</button>
            </div>
            <Link to="/" className='back-btn'>Back to Todos</Link>
        </>
    )
}

export default Todo
