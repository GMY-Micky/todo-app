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
            <div className='container my-4 border bg-white text-black'>
                <h1 className='text-break text-center'>{title}</h1>
                <p className='text-break text-center'>{body}</p>
                </div>  
                <div className='btn-group mx-3 my-3 text-center'>
                <Link to='/' className='btn text-black bg-light border text-decoration-none' onClick={()=>delTodo(id)}>Delete</Link>
                <button type='button' className='btn text-black bg-light border' onClick={()=>setEditForm(true)}>Edit</button>
                    <Link to="/" className='btn text-white bg-dark border'>Back to Todos</Link>
                </div>
        </>
    )
}

export default Todo
