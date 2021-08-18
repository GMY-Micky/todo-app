import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Todos from './Todos';
import Error from './Error';
import Todo from './Todo'

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

console.log(todos)

  return (
    <>
    <h1 className="app-name">Todo App</h1> 
    <Router>
      <Switch>
      <Route exact path="/">
        <Todos todos={todos} addTodo={addTodo}/>
      </Route>
      <Route path="/todos/:id" children={<Todo todos={todos} delTodo={delTodo} editTodo={editTodo}/>}></Route>
      <Route path="*">
        <Error />
      </Route>
      </Switch>
    </Router>

     
   </>
  );
}

export default App;
