import {useState} from 'react'
import InputFields from './InputFields';
import {Link} from 'react-router-dom'

const Form = (props) => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [img,setImg] = useState('')
    const [alert,setAlert]=useState(false);

    const submitHandle=(e)=>{
        e.preventDefault();

        if(props.editForm&&title&&body)
        {
            props.setEditForm(false)
            props.editTodo({id:props.id,title,body,img})
            props.setTitle(title)
            props.setBody(body)
            props.setImg(img)
            setTitle('')
            setBody('')
            setImg('')
        }

         if(!props.editForm&&title&&body)
         {
            props.addTodo({title,body,img})
            setTitle('')
            setBody('')
            setImg('')
            props.setControl(false) 
         }
         else{
            setAlert(true)
         }
    }

    const onChange=(e)=>{
        const files=e.target.files[0];
        setImg(URL.createObjectURL(files))
    }



    return (
        <div className='container my-2 text-center'>
         {alert&&<div className='alert'>
                <h3 className='alert-warning'>Please fill the form</h3>
                </div>}
        <InputFields submitHandle={submitHandle} 
        title={title} setTitle={setTitle} 
        body={body} setBody={setBody} 
        onChange={onChange}
        />

        {!props.editForm && <Link to="/" className=' btn btn-success text-white my-3 border text-decoration-none' onClick={()=>props.setControl(false)}>Back to Todos</Link>}
        </div>
    )
}

export default Form
