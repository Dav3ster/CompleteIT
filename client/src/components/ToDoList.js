import React, { useState } from 'react';
import ToDoForm from './createToDo';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';

import './styling/formstyle.css';

function ToDoList({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const [sortByPriority, setSortByPriority] = useState(false);

  const toggleSortByPriority = () => {
    setSortByPriority(!sortByPriority);
  };

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
  }

  function PriorityCheck({ priority }) {
    let priorityText = '';

    switch (priority) {
      case 'high':
        priorityText = 'High';
        break;
      case 'medium':
        priorityText = 'Medium';
        break;
      case 'low':
        priorityText = 'Low';
        break;
      default:
        break;
    }

    return <span>{priorityText}</span>;
  }

  let sortedTodos = todos;
  if (sortByPriority) {
    sortedTodos = todos.slice().sort((a, b) => {
      if (a.priority === b.priority) {
        return 0;
      } else if (a.priority === 'high' || (a.priority === 'medium' && b.priority === 'low')) {
        return -1;
      } else {
        return 1;
      }
    });
  }

  return (
    <>
      <center>
          <button className='sort-todo-btn' onClick={toggleSortByPriority}>
            Sort By Priority {sortByPriority ? '(Descending)' : '(Ascending)'}
          </button>
      </center>
      {sortedTodos.map((todo, index) => (
        <div
          className={`todo-row ${
            todo.priority === 'high'
              ? 'todo-high'
              : todo.priority === 'medium'
              ? 'todo-medium'
              : 'todo-low'
          }`}
          key={index}
        >
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.title}
            <br />
            {todo.text}
            <br />
            Priority: <PriorityCheck priority={todo.priority} />
            <br />
          </div>
          <div className='icons'>
            <AiOutlineCloseCircle
              onClick={() => removeTodo(todo.id)}
              className='delete-icon'
            />
            <BiEdit
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
              className='edit-icon'
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default ToDoList;
