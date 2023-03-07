import React, { useState } from 'react'
import ToDoForm from './createToDo'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'

function ToDoList({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null, 
        value: ''
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if(edit.id) {
        return <ToDoForm edit={edit} onSubmit={submitUpdate} />
    }
    // Maps through todos array.
  return todos.map((todo, index) => (
    /* ClassName determines if the todo is complete, and if it is, the task is then removed
    from the list and points are added to the point total depending on priority! */
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
        
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
        </div>

        <div className='icons'>
            <AiOutlineCloseCircle onClick={() => removeTodo(todo.id)}
            className="delete-icon" />
            <BiEdit 
            onClick={() => setEdit({ id:todo.id, value: todo.text})}
            className="edit-icon"/>
        </div>
    </div>
  ))
}

export default ToDoList
