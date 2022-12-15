import React, { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoHeader from './components/TodoHeader';
import TodoListItems from './components/TodoListItems';
import './index.css';

// get data from localstorage
const getLocalItems = () => {
  let list = localStorage.getItem("todos");
  
  if(list){
    return  JSON.parse(localStorage.getItem("todos"));
  }
  else{
    return [];
  }
}

function App() {

  // using usestate
  const[input,setInput] = useState("");
  // const[todos,setTodos] = useState([]);
  const[todos,setTodos] = useState(getLocalItems())
  const[edit,setEdit] = useState(null);

  // using useeffect hook
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);

  return (
    <div className="container">
        <div className ="App-container">
          <TodoHeader/>
          {/* using props */}
          <TodoForm
            input = {input}
            setInput={setInput}
            todos = {todos}
            setTodos = {setTodos}
            edit = {edit}
            setEdit = {setEdit}
          />
          <TodoListItems
            todos = {todos}
            setTodos = {setTodos}     
            setEdit = {setEdit}
          />
        </div>
    </div> 
  );
}

export default App;
