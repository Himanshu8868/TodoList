import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem"; // Make sure to import the TodoItem component

const TodoList = () => {
  const [todos, setTodos] = useState(() => {
    // Load todos from local storage if available
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [isNameEntered, setIsNameEntered] = useState(false);

  useEffect(() => {
    // Save todos to local storage whenever they change
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, completed: false }]);
      setInput("");
    }
  };

  const deleteTodo = (index) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Are you sure you want to delete this todo?')) {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }
  };

  const updateTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].text = prompt('Enter new value', newTodos[index].text);
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    alert(`Task completed: ${newTodos[index].text}`);
  };

  const handleNameSubmit = () => {
    if (name.trim()) {
      setIsNameEntered(true);
    }
  };

  return (
    <div className="container mt-5">
      {!isNameEntered ? (
        <div className="d-flex justify-content-center mb-3">
          <input
            className="form-control me-2"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <button className="btn btn-primary" onClick={handleNameSubmit}>
            Submit
          </button>
        </div>
      ) : (
        <>
          {/* Welcome message */}
          <h2 className="text-center mb-4">Welcome, {name}!</h2>

          {/* Title of the Todo List */}
          <h1 className="text-center mb-4">Todo List</h1>
          
          {/* Input field and Add button */}
          <div className="d-flex justify-content-center mb-3">
            <input
              className="form-control me-2"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a new todo"
            />
            <button className="btn btn-primary" onClick={addTodo}>
              Add
            </button>
          </div>
          <ul className="list-group">
            {todos.map((todo, index) => (
              <TodoItem 
                key={index} 
                todo={todo} 
                index={index} 
                deleteTodo={deleteTodo} 
                updateTodo={updateTodo} 
                completeTodo={completeTodo}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default TodoList;