import { createState } from '@hookstate/core';
const initialState = {
  errorMsg: ''
};
const globalState = createState(initialState);
export default globalState;