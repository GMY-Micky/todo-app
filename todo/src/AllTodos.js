
import {Link} from 'react-router-dom'

const AllTodos = ({todos}) => {
    return (
        <div className='text-center '>
           {todos.map((todo)=>{
               return(
                <div className='container my-4 border bg-white text-black'>
                    <h1 className='text-break text-center'>{todo.title}</h1>
                    <p className='text-break text-center'>{todo.body}</p>
                </div>
               );
            })}
            <Link to="/" className='btn text-white my-3 bg-dark border'>Back to Todos</Link>
        </div>
    )
}

export default AllTodos
