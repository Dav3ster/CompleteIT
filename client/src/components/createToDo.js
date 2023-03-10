import React, { useState, useEffect, useRef } from "react";
import PriorityCheck from "./PriorityCheck";
import Calendar from "react-calendar";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Nav";

import "react-calendar/dist/Calendar.css";

// eslint-disable-next-line
import "./styling/formstyle.css";

function ToDoForm(props) {
  const [title, setTitle] = useState(props.edit ? props.edit.value : "");
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [priority, setPriority] = useState(props.edit ? props.edit.value : "");
  const [date, setDate] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    // Focuses on the current selection.
    inputRef.current.focus();
  }, []);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const [dateValue, setDateValue] = useState(new Date());

  function onDateChange(nextDateValue) {
    setDateValue(nextDateValue);
  }

  const handleDayChange = (date) => {
    setDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      // Generates a Random number, prevents To-Dos from having the same ID!
      id: Math.floor(Math.random() * 10000),
      title: title,
      text: input,
      priority: priority,
      date: date,
    });

    setTitle("");
    setInput("");
    setPriority("");
    setDate("");
  };

  const tileClassName = ({ date, view }) => {
    if (
      view === "month" &&
      dateValue.getMonth() === date.getMonth() &&
      dateValue.getDate() === date.getDate()
    ) {
      return "current-date";
    }
  };

  return (
    <Container>
      <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? (
          <>
            <input
              placeholder="Change your title!"
              value={title}
              name="text"
              className="todo-input"
              onChange={handleTitleChange}
              ref={inputRef}
            ></input>
            <input
              placeholder="Change your description!"
              value={input}
              name="text"
              className="todo-input"
              onChange={handleChange}
              ref={inputRef}
            ></input>

            <Row>
              <label className="priorityChecks">
                Priority:
                <div id="highP">
                  <input
                    type="radio"
                    name="priority"
                    value="high"
                    checked={priority === "high"}
                    onChange={handlePriorityChange}
                  />{" "}
                  High
                </div>
                <div id="medP">
                  <input
                    type="radio"
                    name="priority"
                    value="medium"
                    checked={priority === "medium"}
                    onChange={handlePriorityChange}
                  />{" "}
                  Medium
                </div>
                <div id="lowP">
                  <input
                    type="radio"
                    name="priority"
                    value="low"
                    checked={priority === "low"}
                    onChange={handlePriorityChange}
                  />{" "}
                  Low
                </div>
              </label>
            </Row>

            <div>
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <center>
              <Calendar
                onDateChange={onDateChange}
                tileClassName={tileClassName}
                value={dateValue}
                onClickDay={handleDayChange}
              />
            </center>
            <button onClick={handleSubmit} className="todo-btn">
              Update ToDo!
            </button>
          </>
        ) : (
          <>
            <input
              placeholder="What is your ToDo?"
              value={title}
              name="text"
              className="todo-input"
              onChange={handleTitleChange}
              ref={inputRef}
            ></input>
            <input
              placeholder="Create your ToDo here!"
              value={input}
              name="text"
              className="todo-input"
              onChange={handleChange}
              ref={inputRef}
            ></input>
            <Row>
              <label className="priorityChecks">
                Priority:
                <div id="highP">
                  <input
                    type="radio"
                    name="priority"
                    value="high"
                    checked={priority === "high"}
                    onChange={handlePriorityChange}
                  />{" "}
                  High
                </div>
                <div id="medP">
                  <input
                    type="radio"
                    name="priority"
                    value="medium"
                    checked={priority === "medium"}
                    onChange={handlePriorityChange}
                  />{" "}
                  Medium
                </div>
                <div id="lowP">
                  <input
                    type="radio"
                    name="priority"
                    value="low"
                    checked={priority === "low"}
                    onChange={handlePriorityChange}
                  />{" "}
                  Low
                </div>
              </label>
            </Row>

            <div>
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <center>
              <Calendar
                onDateChange={onDateChange}
                tileClassName={tileClassName}
                value={dateValue}
                onClickDay={handleDayChange}
              />
            </center>
            <button onClick={handleSubmit} className="todo-btn">
              Add ToDo!
            </button>
          </>
        )}
      </form>

      <PriorityCheck />
    </Container>
  );
}

export default ToDoForm;
