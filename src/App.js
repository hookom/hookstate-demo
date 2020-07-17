import React from 'react';
import logo from './logo.svg';
import GlobalError from './GlobalError';
import ErrorButton from './ErrorButton';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <GlobalError />
        <img src={logo} className='App-logo' alt='logo' />
        <ErrorButton />
      </header>
    </div>
  );
}

export default App;
