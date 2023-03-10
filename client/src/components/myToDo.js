/* 
This is where the actual created To-Do List is stored.
Here, both the weekBar div and priorityList will use this component
to display the created toDoList in various styles.
*/

import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import ToDoForm from "./createToDo";
import ToDoList from "./ToDoList";

function MyToDo() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...newTodos);

  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
     console.log(newValue);

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        // Toggles the todo between true and false.
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  
  return (
    <Container fluid>
      <div className="todo-section">
      <div className="todo-list">
        <h2>Your List!</h2>
          <ToDoList
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        </div>
        <div className="todo-app">
          <h2>Complete it Today!</h2>
          <ToDoForm onSubmit={addTodo} />
        </div>
      </div>
    </Container>
  );
}

export default MyToDo;
