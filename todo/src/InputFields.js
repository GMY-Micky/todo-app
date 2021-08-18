

const InputFields = (props) => {
    return (
        <div className='form'>
            <form onSubmit={props.submitHandle}> 
                <div className='title'>
                    <lable>Title</lable>
                    <input type ='text' value={props.title} onChange={(e)=>props.setTitle(e.target.value)}></input>
                </div>
                <div className='body'>
                    <lable>Body</lable>
                    <input type ='text' value={props.body} onChange={(e)=>props.setBody(e.target.value)}></input>
                </div>
                <input type='submit'></input>
            </form>     
        </div>
    )
}

export default InputFields
