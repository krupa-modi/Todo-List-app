import React from "react";

const TodoListItems = ({todos,setTodos,setEdit}) => {

    // create delete function
    const handlerDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    };

    // create done function
    const handlerDone = (todo) => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {...item,completed:!item.completed};
            }
            return item;
        })
    );
};

    // create edit function
    const handlerEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEdit(findTodo);
    }

    return(
        <div className="form-listitems">
            {todos.map((todo) => (               
            <li className="list-container" key = {todo.id}>
                <input 
                    type="text" 
                    value ={todo.title} 
                    className = {`list ${todo.completed ? "complete" : ""}`}
                    onChange={(e) => e.preventDefault()}  
                />
                <button className="btn-group btn-done" onClick={() => handlerDone(todo)}>
                    <i className="fa fa-check-circle" ></i>
                </button>
                <button className="btn-group btn-edit" onClick={() => handlerEdit(todo)}>
                    <i className="fa fa-edit"></i>
                </button>
                <button className="btn-group btn-delete" onClick={() => handlerDelete(todo)}>
                    <i className="fa fa-trash"></i>
                </button>
            </li>
            ))}
        </div>
    );
}

export default TodoListItems;