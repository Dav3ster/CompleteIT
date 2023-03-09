/* 
This is where the actual created To-Do List is stored.
Here, both the weekBar div and priorityList will use this component
to display the created toDoList in various styles.
*/

import React, { useState } from "react";
import ToDoForm from "./createToDo";
import ToDoList from "./ToDoList";

// import { gql, useMutation } from "@apollo/client";

// /**
//  * Mutation to increment a track's number of views
//  */
// const INCREMENT_TRACK_VIEWS = gql`
//   mutation IncrementTrackViews($incrementTrackViewsId: ID!) {
//     incrementTrackViews(id: $incrementTrackViewsId) {
//       code
//       success
//       message
//       track {
//         id
//         numberOfViews
//       }
//     }
//   }
// `;

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

//   useMutation(INCREMENT_TRACK_VIEWS, {
//     variables: { incrementTrackViewsId: id },
//   });

//   const [incrementTrackViews] = useMutation(INCREMENT_TRACK_VIEWS, {
//     variables: { incrementTrackViewsId: id },
//   });

  return (
    <div className="todo-app">
      <h2>Complete it Today!</h2>
      <ToDoForm onSubmit={addTodo} />
      <ToDoList
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default MyToDo;
