import React from 'react';

import Container from '../UI/Container'
import Input from './Input';
import classes from './Header.module.css'

const Header = () => {

  return (
    <Container className={classes.header}>
        <h1>TO-DO App</h1>
        <Input />
    </Container>
  )
}

export default Header