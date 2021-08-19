import {useState} from 'react'
import InputFields from './InputFields';
import {Link} from 'react-router-dom'

const Form = (props) => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [alert,setAlert]=useState(false);

    const submitHandle=(e)=>{
        e.preventDefault();

        if(props.editForm&&title&&body)
        {
            props.setEditForm(false)
            props.editTodo({id:props.id,title,body})
            props.setTitle(title)
            props.setBody(body)
            setTitle('')
            setBody('')
        }

         if(!props.editForm&&title&&body)
         {
            props.addTodo({title,body})
            setTitle('')
            setBody('')
            props.setControl(false) 
         }
         else{
            setAlert(true)
         }
    }

    const onChange=(e)=>{
        const files=e.target.files;
        const reader=new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload=(e)=>{
            console.warn("image data : ",e.target.result)
        }
    }
    return (
        <div className='container my-5 border text-center'>
         {alert&&<div className='alert'>
                <h3 className='alert-warning'>Please fill the form</h3>
                </div>}
        <InputFields submitHandle={submitHandle} title={title} setTitle={setTitle} body={body} setBody={setBody} onChange={onChange}/>
        <div className='back-btn'>
        {!props.editForm && <Link to="/" className=' btn text-white my-3 bg-dark border text-decoration-none' onClick={()=>props.setControl(false)}>Back to Todos</Link>}
        </div>
        </div>
    )
}

export default Form
