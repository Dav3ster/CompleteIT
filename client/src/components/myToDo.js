/* 
This is where the actual created To-Do List is stored.
Here, both the weekBar div and priorityList will use this component
to display the created toDoList in various styles.
*/

import React, { useState } from "react";
import ToDoForm from "./createToDo";


function MyToDo() {

    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos);
    }


    return (
        <div>
            <ToDoForm onSubmit={addTodo} />
        </div>
    )
}

export default MyToDo;