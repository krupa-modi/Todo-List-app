import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import {v4 as uuidv4} from 'uuid';

const TodoForm = ({input , setInput , todos , setTodos , edit , setEdit}) => {
    
    // create function
    const HandlerChange = (event) => {
        setInput(event.target.value);
    }

    const updateTodo = (title , id , completed) => {
        const newTodo = todos.map((todo) => 
            todo.id === id ? {title , id , completed} : todo
        )
        setTodos(newTodo);
        setEdit("");
    };

    // use useeffect
    useEffect(() => {
        if(edit){
            setInput(edit.title)
        }
        else{
            setInput("")
        }
    },[setInput,edit])

    const handlerSubmit = (event) => {
        event.preventDefault();
        if(!edit){
            setTodos([...todos,{id:uuidv4() , title:input , completed:false}]);
            setInput('');
        }
        else{
            updateTodo(input,edit.id,edit.completed)
        }
        
    }

    return(
        <div className="form-container">
            <form onSubmit={handlerSubmit}>
                <input 
                    type="text" 
                    placeholder = "Enter Items..." 
                    className = "form-input" 
                    value = {input} 
                    onChange = {HandlerChange} 
                    required
                />
                {/* <button type = "submit" className='btn btn primary'>Add</button> */}
                <Button type = "submit" variant="light">{edit ? "OK" : "ADD"}</Button>
            </form>
        </div>
    );
}

export default TodoForm;