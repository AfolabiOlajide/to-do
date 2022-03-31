import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoContextProvider from './Components/TodoContextProvider/TodoContextProvider'

ReactDOM.render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>,
  document.getElementById('root')
);
