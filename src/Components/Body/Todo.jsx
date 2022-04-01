import React, { useContext } from 'react';

import Button from '../UI/Button'
import Card from '../UI/Card'
import classes from './Todo.module.css';
import TodoContext from '../../Context/todoContext';

const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const Todo = (props) => {
  const ctx = useContext(TodoContext);
  const date = new Date(props.date)


  const deleteTodoHandler = () => {
    ctx.deleteTodo(props.id);
  }

  const completedHandler = () => {
    ctx.setTodo(
      ctx.todo.map((todo) => {
        if(todo.id === props.id){
          return {...todo, isCompleted: !todo.isCompleted}
        }
        return todo;
      })
    )
  }

  return (
    <Card className={classes.todoBox}>
      <div className={classes.todo}>
        <div className={classes.do}>
          <h1 className={`${props.isCompleted && classes.completed}`}>{props.do}</h1>
          <span>{date.getDate()}, {months[date.getMonth()]} {date.getFullYear()}</span>
        </div>
        <div className={classes.actions}>
          <Button className={classes.b1} onClick={deleteTodoHandler}><i className="fa-solid fa-trash-can"></i></Button>
          <Button className={classes.b2} onClick={completedHandler}>{props.isCompleted ? <i className={`fa-solid fa-ban ${classes.grey}`}></i> : <i className={`fa-solid fa-check ${classes.green}`}></i>}</Button>
          {/* <i class="fa-solid fa-check"></i> */}
        </div>
      </div>
    </Card>
  )
}

export default Todo