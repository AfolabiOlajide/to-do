import React from "react";


const TodoContext = React.createContext({
    todo: [
        {
            todo: '',
            isCompleted: false,
            date: new Date(),
            id: ''
        }
    ],
    setTodo: () => {},
    changeTodo: () => {},
    deleteTodo: () => {},
    changeFilter: () => {}
});


export default TodoContext;