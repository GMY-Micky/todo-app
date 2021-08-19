import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Todos from './Todos';
import Error from './Error';
import Todo from './Todo'
import AllTodos from './AllTodos';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [todos,setTodos] = useState([])
  const [id,setId]=useState(1)

const addTodo=(todo)=>{
  const realTodo = {id , ...todo}
  setTodos([...todos,realTodo])
  setId(()=>id+1)
}

const delTodo=(id)=>{
  const newTodo = todos.filter((todo)=>todo.id !== parseInt(id));
  setTodos(newTodo)
}

const editTodo = (newTodo) => {
  setTodos(
    todos.map((todo)=>{
    if(parseInt(newTodo.id)===todo.id)
    {
      return {...todo,title:newTodo.title,body:newTodo.body}
    }
    return todo;
  }))
}

const delAll = () =>{
  setTodos([])
}


  return (
    
    <div className='container-sm border bg-dark  my-5'>
    <h1 className="display-1 text-center my-4 text-white">Todo </h1> 
    <Router>
      <Switch>
      <Route exact path="/">
        <Todos todos={todos} addTodo={addTodo} delAll={delAll}/>
      </Route>
      <Route exact path='/todos'>
        <AllTodos todos={todos}/>
      </Route>
      <Route path="/todos/:id" children={<Todo todos={todos} delTodo={delTodo} editTodo={editTodo}/>}></Route>
      <Route path="*">
        <Error />
      </Route>
      </Switch>
    </Router>
    </div>
    
  );
}

export default App;
