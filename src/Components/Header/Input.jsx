import React, { useState, useRef, useContext } from 'react';
import ReactDom from 'react-dom';

import Modal from '../UI/Modal';
import Button from '../UI/Button'
import classes from './Input.module.css'
import TodoContext from '../../Context/todoContext';

const portaled = document.getElementById('overlay');

const Input = () => {
  const [todo ,setTodo] = useState('');
  const [isAvailable, setIsAvailable] = useState(false);
  
  const ctx = useContext(TodoContext);
  const inputRef = useRef()
  const date = new Date()
  let available = false;


  if(ctx.todo.find((t) => t.todo === inputRef.current.value)){
    available = true;
  }

  const todoChangehandler = (e) => {
    setTodo(e.target.value);
  }
  
  const closeModal = () => {
    setIsAvailable(false);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim().length === 0){
      setIsAvailable(true)
    }else if(available){
      setIsAvailable(true);
    }else{
      ctx.setTodo((prevTodoList) => {
      return [{ id: `${inputRef.current.value.trim()}000`, todo: todo, date: date , isCompleted: false }, ...prevTodoList]
      });
    }
    setTodo('');
  }


  return (
    <React.Fragment>
      {isAvailable && ReactDom.createPortal(<Modal message="You already have this todo or the input is empty" onClick={closeModal} />, portaled)}
      <form onSubmit={submitHandler} className={classes.form}>
          <input ref={inputRef} value={todo} onChange={todoChangehandler} type="text" />
          <Button className={classes.hide} type="submit">ADD</Button>
      </form>
    </React.Fragment>
  )
}

export default Input