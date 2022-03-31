import React, { useContext } from 'react'

import classes from './Filter.module.css';
import TodoContext from '../../Context/todoContext';

const Filter = () => {
    const ctx = useContext(TodoContext)

    const filterChangeHandler = (event) => {
        const filterValue = event.target.value 
        ctx.changeFilter(filterValue)
        console.log(ctx.todo)
    }

  return (
    <div className={classes.select}>
        <h3 className={classes.filter}>Filter : </h3>
        <select onChange={filterChangeHandler}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
        </select>
    </div>
  )
}

export default Filter