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

    return (
        <>
         {alert&&<div className='alrt'>
                <h3 style={{color:'white'}}>Please fill the form</h3>
                </div>}
        <InputFields submitHandle={submitHandle} title={title} setTitle={setTitle} body={body} setBody={setBody}/>
        {!props.editForm && <Link to="/" className='back-btn' onClick={()=>props.setControl(false)}>Back to Todos</Link>}
        </>
    )
}

export default Form
