import React from 'react';

import Header from './Components/Header/Header';
import TodoList from './Components/Body/TodoList';
import Filter from './Components/Body/Filter';
// import { TodoContextProvider } from './Context/todoContext'

import './App.css';

function App() {

  return (
    <React.Fragment>
      <Header />
      <Filter />
      <TodoList />
    </React.Fragment>
  );
}

export default App;
