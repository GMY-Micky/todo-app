

const InputFields = (props) => {
    return (
        <>
            <form className='my-3' onSubmit={props.submitHandle}> 
                <div className='form-group'>
                    <input type ='text' className='my-2 p-1' 
                    style={{borderRadius:'5px'}} 
                    placeholder='Title' value={props.title} 
                    onChange={(e)=>props.setTitle(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <input type ='text' className='p-1' 
                    style={{borderRadius:'5px'}} 
                    placeholder='body' value={props.body} 
                    onChange={(e)=>props.setBody(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <input type='file' 
                    className='text-white border bg-dark mt-3' 
                    name='file' onChange={(e)=>props.onChange}/>
                </div>
                <input type='submit' className=' btn text-black my-3 bg-light border text-decoration-none'></input>
            </form>     
        </>
    )
}

export default InputFields
