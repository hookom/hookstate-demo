import React from 'react';
import { useState as useGlobalState } from '@hookstate/core';
import globalState from './globalState';
import './ErrorButton.css';

const ErrorButton = () => {
  const global = useGlobalState(globalState);

  const toggleError = () => {
    global.errorMsg.set('This error string is in global state');
    setTimeout(() => {
        global.errorMsg.set('');
    }, 2000);
  }

  return (
    <div className='errorButton' onClick={toggleError}>
        Click Me
    </div>
  );
}

export default ErrorButton;
