
import {Link} from 'react-router-dom'

const AllTodos = ({todos}) => {
    return (
        <div>
           {todos.map((todo)=>{
               return(
                <div className='container border'>
                    <table className='table table-bordered mt-3'>
                        <tbody>
                            <tr className='bg-info text-white'>
                                <td className='h5'>id</td>
                                <td>{todo.id}</td>
                            </tr>
                            <tr>
                                <td className='h5'>title</td>
                                <td>{todo.title}</td>
                            </tr>
                            <tr>
                                <td className='h6'>body</td>
                                <td>{todo.body}</td>
                            </tr>
                        </tbody>
                    </table>
                    <img src={todo.img} className='mb-3' style={{width:'100%',height:'auto'}} alt='No image found'/>
                </div>
               );
            })}
            <Link to="/" className='btn btn-success text-white my-3 border'>Back to ToDos</Link>
        </div>
    )
}

export default AllTodos
