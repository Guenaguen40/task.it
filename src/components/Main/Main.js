import React from 'react';
import logo from '../../logo.svg';
import {StyledNavbar, NavItemLink, StyledBody } from './style';
import css from './style.css';

function LandingPage() {
  return (
    <StyledBody className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="Logo"/>
      <h1>Welcome to task.it</h1>
      <p>Bring your productivity 
        to the next level.</p>
      </header>
      <StyledNavbar>
      <NavItemLink to="/login" fill>Log in</NavItemLink> 
      <NavItemLink to="/signup" fill>Sign up</NavItemLink>
      </StyledNavbar>
    </StyledBody>
  );
}

export default LandingPage;
