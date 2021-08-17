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
  setId(()=>id+1)
  
  const realTodo = {id , ...todo}
  setTodos([...todos,realTodo])
}

const delTodo=(id)=>{
  const newTodo = todos.filter((todo)=>Todo.id !== parseInt(id));
  setTodos(newTodo)
}

const editTodo = (id) => {

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
