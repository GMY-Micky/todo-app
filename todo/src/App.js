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
  const [counter,setCounter]=useState(0)

const addTodo=(todo)=>{
  setCounter((count)=>count+1)
  const realTodo = {id , ...todo}
  setTodos([...todos,realTodo])
  setId(()=>id+1)
}

const delTodo=(id)=>{
  const newTodo = todos.filter((todo)=>todo.id !== parseInt(id));
  setTodos(newTodo)
  setCounter((count)=>count-1)
  if(counter===1)
  {
    setId(1)
  }
}

const editTodo = (newTodo) => {
  setTodos(
    todos.map((todo)=>{
    if(parseInt(newTodo.id)===todo.id)
    {
      return {...todo,title:newTodo.title,body:newTodo.body,img:newTodo.img}
    }
    return todo;
  }))
}

const delAll = () =>{
  setTodos([])
  setCounter(0)
  setId(1)
}


  return (
    
    <div className='container-sm border bg-light my-5'>
    <h1 className="display-1 text-center mt-3 text-black"><strong>ToDo App</strong></h1> 
    <Router>
      <Switch>
      <Route exact path="/">
        <Todos todos={todos} addTodo={addTodo} delAll={delAll} counter={counter} delTodo={delTodo}/>
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
