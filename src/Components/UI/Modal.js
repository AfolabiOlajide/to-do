import React from 'react'

// import TodoContext from '../../Context/todoContext'
import classes from './Modal.module.css'

const Modal = (props) => {
    // const ctx = useContext(TodoContext)
  return (
    <>
        <div className={classes.backdrop} onClick={props.onClick}></div>
        <div className={classes.modal}>
            <p>{props.message}</p>
        </div>
    </>
  )
}

export default Modal