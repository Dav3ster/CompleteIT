import React, { useState } from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Nav";

function ToDoForm(props) {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      // Generates a Random number, prevents To-Dos from having the same ID!
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    
    setInput('');
  };

  return (
    <Container>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          placeholder="Create your ToDo here!"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
        ></input>
      </form>

      <Row>{/* Checkboxes go here */}</Row>

      <button onClick={handleSubmit} className="todo-btn">Add ToDo!</button>
    </Container>
  );
}

export default ToDoForm;
