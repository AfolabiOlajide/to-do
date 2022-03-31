import React, { useState, useEffect } from 'react';

import TodoContext from '../../Context/todoContext';


const TodoContextProvider = (props) => {
    const [todo, setTodo] = useState([]);
    const [filterState, setFilterState] = useState('all');
    const [filteredTodo, setFilteredTodo] = useState([]);

    useEffect(
        () => {
            getLocal();
        }
    , [])

    useEffect(() => {
        filterHandler();
        saveLocal();
        // getLocal();
        return () => {
            filterHandler();
        saveLocal();
        }
    }, [filterState, todo])

    const filterHandler = () => {
        switch (filterState){
            case 'all':
                setFilteredTodo(todo);
                break;
            case 'completed':
                setFilteredTodo(todo.filter((todo) => todo.isCompleted === true));
                break;
            case 'uncompleted':
                setFilteredTodo(todo.filter((todo) => todo.isCompleted === false));
                break;
            default:
                setFilteredTodo(todo);
        }
    }

    const saveLocal = () => {
        localStorage.setItem('todo', JSON.stringify(todo));
    }

    const getLocal = () => {
        if (localStorage.getItem('todo') === null){
            localStorage.setItem('todo', JSON.stringify([]));
        }else{
            let todo = JSON.parse(localStorage.getItem('todo'));
            setTodo(todo);
        }
    }
    

    const changeTodo = (list) => {
        setTodo(list);
        console.log(todo)
    }

    const deleteTodo = (id) => {
        const filtered = todo.filter(t => t.id !== id);
        setTodo(filtered);
    }

    const changeFilter = (state) => {
        setFilterState(state);
    }

    return(
        <TodoContext.Provider value={{
            todo: filteredTodo,
            setTodo: setTodo,
            changeTodo: changeTodo,
            deleteTodo: deleteTodo,
            changeFilter: changeFilter
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;