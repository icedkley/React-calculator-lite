import React, { useState } from "react";
import "./styles.css";

function InputDisplay({ input }) {
  return (
    <div className="input_display">
      <h1>{input}</h1>
    </div>
  );
}

function Button({ item, onClickArgs }) {
  return <button onClick={() => onClickArgs(item)}>{item}</button>;
}

function App() {
  const [display, setDisplay] = useState("");
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operations = ["del", "+", "-", "*", "/", "="];

  function handleClick(item) {
    if (item === "=") {
      getEqual();
    } else if (item === "del") {
      deleteItem();
    } else {
      setDisplay((prevDisplay) => prevDisplay + item);
    }
  }

  function getEqual() {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay("Error");
    }
  }

  function deleteItem() {
    setDisplay((prevDisplay) => prevDisplay.slice(0, 0 - 1));
  }

  return (
    <>
      <InputDisplay input={display} />

      <div className="buttons_container">
        <div className="numbers_container">
          {numbers.map((number, index) => (
            <Button
              key={index}
              item={number}
              onClickArgs={handleClick}
            ></Button>
          ))}
          {operations.map((operation, index) => (
            <Button
              key={operation}
              item={operation}
              onClickArgs={handleClick}
            ></Button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
