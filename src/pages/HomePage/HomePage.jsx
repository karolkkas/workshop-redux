import React from 'react';
import {useSelector} from "react-redux";

import {getDoneTodos} from "../../store/entities/todos/selectors";

function HomePage() {
  const todos = useSelector(state => getDoneTodos(state));
  return (
    <div>
      <h2>Todos</h2>
      <div>
        {todos.map(todo => (
          <div key={todo.id}>
            <span>{todo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;