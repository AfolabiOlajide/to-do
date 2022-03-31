import React, { useContext } from 'react';

import Todo from './Todo';
import classes from './TodoList.module.css';
import TodoContext from '../../Context/todoContext';

const TodoList = () => {
  const ctx = useContext(TodoContext)

  return (
    <div className={classes.todo}>
        {ctx.todo.length === 0 && <h1 className={classes.nothing}>No Todo...</h1>}
        {ctx.todo.length !== 0 && ctx.todo.map((todo) => <Todo key={todo.id} id={todo.id} do={todo.todo} date={todo.date} isCompleted={todo.isCompleted} />)}
    </div>
  )
}

export default TodoList