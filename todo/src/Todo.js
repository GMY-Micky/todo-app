import {Link ,useParams} from 'react-router-dom'
import { useState, useEffect, Fragment} from 'react';
import Form from './Form'

const Todo = ({todos,delTodo,editTodo}) => {
    const {id}=useParams();
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');

    const [editForm,setEditForm] =useState(false)

    useEffect(() => {
        const newTodo = todos.find((todo)=> {return todo.id=== parseInt(id)});
        setTitle(newTodo.title);
        setBody(newTodo.body);
    }, [])

    return (
        <>   
        {editForm&&<Form id={id} 
        editForm={editForm} 
        editTodo={editTodo} 
        setEditForm={setEditForm}
        setTitle={setTitle}
        setBody={setBody}/>}
            <div className='todo-data'>
                <h1 style={{color:'white',fontSize:'50px',padding:'20px'}}>{title}</h1>
                <p style={{color:'yellow',fontSize:'25px'}}>{body}</p>
                 
                <Link to='/' onClick={()=>delTodo(id)}>Delete</Link>
                <button type='button' onClick={()=>setEditForm(true)}>Edit</button>
               </div> 
            <Link to="/" className='back-btn'>Back to Todos</Link>
        </>
    )
}

export default Todo
