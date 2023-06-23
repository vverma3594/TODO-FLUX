// src/components/TodoList.js
import React, { useEffect, useState } from 'react';
import TodoStore from '../store/TodoStore';
import { deleteTodoItem, toggleTodoItem } from '../action/TodoAction';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    TodoStore.addChangeListener(handleChange);
    return () => {
      TodoStore.removeChangeListener(handleChange);
    };
  }, []);

  const handleChange = () => {
    setTodos(TodoStore.getAllTodos());
  };

  const handleDelete = id => {
    deleteTodoItem(id);
  };

  const handleToggle = id => {
    toggleTodoItem(id);
  };

  return (
    <ul>
        {JSON.stringify(todos)
 }
      {todos.map(todo => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggle(todo.id)}
          />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
