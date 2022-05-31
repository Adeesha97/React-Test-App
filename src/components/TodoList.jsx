import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoData }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todoData.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            userId={todo.userId}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
