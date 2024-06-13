import React, { useState, useEffect, useRef } from "react";
import "./ReactHooks.css";
import { FaTimes } from "react-icons/fa";



// Custom hook for local storage management
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

function ReactHooks() {
  // useState for managing the counter state
  const [count, setCount] = useLocalStorage("count", 0);

  // useState for managing the list of names
  const [names, setNames] = useLocalStorage("names", []);

  // useRef to reference the input element
  const nameInputRef = useRef();

  // useEffect to log changes to the count
  useEffect(() => {
    console.log(`Count changed to: ${count}`);
  }, [count]); // This effect runs whenever `count` changes

  // Function to handle adding a name to the list
  const addName = () => {
    const name = nameInputRef.current.value;
    if (name) {
      setNames([...names, name]);
      nameInputRef.current.value = "";
    }
  };

  // Function to handle removing a name from the list
  const removeName = (index) => {
    setNames(names.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>React Hooks Demonstration App</h1>
      <div className="countList">
        {/* Counter with useState */}
        <h2>Counter</h2>
        <p
          className={count === 0 ? "zero" : count > 0 ? "positive" : "negative"}
        >
          <span className="default">Count:</span> {count}
        </p>
        {/* <p>Count: {count}</p> */}
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
      <div className="keyName">
        {/* Name list with useState and useRef */}
        <h2>Name List</h2>
        <input ref={nameInputRef} type="text" placeholder="Enter name" />
        <button onClick={addName}>Add Name</button>
        <ul>
          {names.map((name, index) => (
            <li key={index} className="new-edit">
              <p className="nameList">{name}</p>
                <button className="x">
                  <FaTimes className="remove-button"
                onClick={() => removeName(index)}/>
                </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ReactHooks;
