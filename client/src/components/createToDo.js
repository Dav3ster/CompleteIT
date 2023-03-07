import React, { useState, useEffect, useRef } from "react";
import PriorityCheck from "./PriorityCheck";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Nav";


function ToDoForm(props) {
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    // Focuses on the current selection.
    inputRef.current.focus()
  }, [])

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      // Generates a Random number, prevents To-Dos from having the same ID!
      id: Math.floor(Math.random() * 10000),
      text: input,
      priority: priority
    });

    setInput("");
    setPriority("");


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
          ref={inputRef}
        ></input>
        <Row>
        <label>
          Priority:
          <input type="radio" name="priority" value="high" checked={priority === "high"} onChange={handlePriorityChange} /> High
          <input type="radio" name="priority" value="medium" checked={priority === "medium"} onChange={handlePriorityChange} /> Medium
          <input type="radio" name="priority" value="low" checked={priority === "low"} onChange={handlePriorityChange} /> Low
        </label>
        </Row>
      </form>

      <PriorityCheck />

      <button onClick={handleSubmit} className="todo-btn">
        Add ToDo!
      </button>
    </Container>
  );
}

export default ToDoForm;
