import React from 'react';
import { useState as useGlobalState } from '@hookstate/core';
import globalState from './globalState';
import './GlobalError.css';

const GlobalError = () => {
  const global = useGlobalState(globalState);
  const { errorMsg } = global.get();

  return (
    <h4 className={errorMsg ? 'globalError' : 'noError'}>{errorMsg}</h4>
  );
}

export default GlobalError;
