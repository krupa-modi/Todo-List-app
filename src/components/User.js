import React, { useState } from 'react';
import '../index.css';


// create function base component
const User = ({id,title,onDelete,handleEditTodos,completed,checkComplete}) => {

    // using usestate hook
    const[edit,setEdit] = useState(false);
    const[editValue,setEditValue] = useState(title);

    // create function for edit button
    const handleEdit = () => {
        setEdit(true);
    }

    // create function for delete button
    const handleDelete = () => {
        onDelete(id)
    }

    // create function for save button
    const handleSave = () => {
        setEdit(false);
        if(editValue){
            handleEditTodos(editValue,id)
        }
        else{
            setEditValue(title)
        }
    }

    if(edit){
        return(
            <div className="list">
                <div className="listItem">
                    <input 
                       type="checkbox" 
                       value ={editValue} 
                       name = "editValue" 
                       id = {id} 
                       onChange = {(e) => setEditValue(e.target.value.toLocaleLowerCase())}
                    />
                   
                </div>
               
                <span>
                    <div className="button">
                        <button id = "edit-btn" onClick={() => handleSave(id)}>Save</button>
                        <button id = "delete-btn" onClick={handleDelete}>Delete</button>
                    </div>
                </span>
            </div> 
        );
    }
    else{
        return (
            <div className="list">
                <div className="listItem">
                    <label htmlFor="{id}" className='{completed ? "active" : ""'>
                        <input 
                        type="checkbox"  
                        id = {id} 
                        onChange = {() => checkComplete(id)}
                        checked = {completed}
                        />
                        {title}
                    </label> 
                </div>
               
                <span>
                    <div className="button">
                        <button id = "edit-btn" onClick={handleEdit} disabled = {completed}>Edit</button>
                        <button id = "delete-btn" onClick={handleDelete}>Delete</button>
                    </div>
                </span>
            </div> 
        );
    }   
}

export default User;