import {useState} from 'react'
import {Link} from 'react-router-dom'

const Form = ({addTodo,setControl}) => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [alert,setAlert]=useState(false);

    const submitHandle=(e)=>{
        e.preventDefault();
         if(title&&body)
         {
            setControl(false) 
            addTodo({title,body})
            setTitle('')
            setBody('')
         }
         else{
            setAlert(true)
         }
    }

    return (
        <>
        <div className='form'>
            {alert&&<div className='alrt'>
                <h3 style={{color:'white'}}>Please fill the form</h3>
                </div>}
            <form onSubmit={submitHandle}> 
                <div className='title'>
                    <lable>Title</lable>
                    <input type ='text' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                </div>
                <div className='body'>
                    <lable>Body</lable>
                    <input type ='text' value={body} onChange={(e)=>setBody(e.target.value)}></input>
                </div>
                <input type='submit'></input>
            </form>     
        </div>
        <Link to="/" className='back-btn' onClick={()=>setControl(false)}>Back to Todos</Link>
        </>
    )
}

export default Form
