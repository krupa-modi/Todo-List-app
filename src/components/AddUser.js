import React from 'react';

// create function base components
const AddUser = ({onAdd}) => {
    // create handler submit function
    const handleonSubmit = (e) => {
        e.preventDefault();
        onAdd(e.target.name.value);
        e.target.name.value = "";

    }
    return(
        <div className="list adduser-list">
            <form onSubmit={handleonSubmit}>
                <h1>TODO LIST ITEM</h1>
                <input type="text" placeholder='Add Todo Items Here' name = "name' required"/>
                <button onSubmit={handleonSubmit}>Add</button>
            </form>
        </div>
    );
}

// export
export default AddUser;