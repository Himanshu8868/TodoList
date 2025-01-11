import React from 'react';

// Represents a single to-do item, including the task description and controls for editing or deleting the task.
const TodoItem = ({ todo, index, deleteTodo, updateTodo, completeTodo }) => {
  return (
    // List item representing a single to-do
    <li className={`list-group-item d-flex align-items-center justify-content-between ${todo.completed ? 'completed' : ''}`}>
      {/* Checkbox to mark the task as completed */}
      <input 
        type="checkbox" 
        className="form-check-input me-2" 
        checked={todo.completed}
        onChange={() => completeTodo(index)}
      />
      {/* Task description */}
      <span>{todo.text}</span>
      {/* Buttons container */}
      <div>
        {/* Edit button */}
        <button className="btn btn-primary btn-sm me-2" onClick={() => updateTodo(index)}>
          Edit
        </button>
        {/* Delete button */}
        <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(index)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;