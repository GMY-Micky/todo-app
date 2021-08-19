import {Link ,useParams} from 'react-router-dom'
import { useState, useEffect, Fragment} from 'react';
import Form from './Form'

const Todo = ({todos,delTodo,editTodo}) => {
    const {id}=useParams();
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [img,setImg]=useState('');

    const [editForm,setEditForm] =useState(false)

    useEffect(() => {
        const newTodo = todos.find((todo)=> {return todo.id=== parseInt(id)});
        setTitle(newTodo.title);
        setBody(newTodo.body);
        setImg(newTodo.img);
    }, [])

    return (
        <>   
          {editForm&&<Form id={id} 
          editForm={editForm} 
          editTodo={editTodo} 
          setEditForm={setEditForm}
          setTitle={setTitle}
          setBody={setBody}
          setImg={setImg}/>}
        
          <div className='container'>
            <table className='table table-bordered'>
                <tbody>
                    <tr>
                        <td>id</td>
                        <td>{id}</td>
                    </tr>
                    <tr>
                        <td>title</td>
                        <td>{title}</td>
                    </tr>
                    <tr>
                        <td>body</td>
                        <td>{body}</td>
                    </tr>
                </tbody>
            </table> 
            <img src={img} alt='Image not found' className='mb-3' style={{height:'auto',width:'100%'}}/>
          </div>

              

            <div className='btn-group mx-3 my-3 text-center'>
              <Link to='/' 
                className='btn btn-danger text-black border text-decoration-none' 
                onClick={()=>delTodo(id)}>
                Delete
                </Link>

              <button type='button' 
                className='btn text-black bg-light border' 
                onClick={()=>setEditForm(true)}>
                Edit
                </button>
              <Link to="/" 
                className='btn btn-success text-white border'>
                Back to Todos
                </Link>

            </div>
        </>
    )
}

export default Todo
