import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button/Button'
import reportWebVitals from './reportWebVitals';
import { Testbutton } from './TestButton/ButtonTest';

ReactDOM.render(
  <React.StrictMode>
    {/* <Button text='Push me' size='lg' type="sOutline"/>
    <Button text='Push me' size='lg' type="pOutline"/>
    <Button text='Push me' size='lg' type="primary"/>
    <Button text='Push me' size='lg' type="secondary"/>
    <Button />
    <Button text='Push me' size='sm' type="primary"/>
    <Button text='Push me' size='' type="secondary"/> */}
    
    <Testbutton primary color='red' size='lg'>Push</Testbutton>
    <Testbutton secondary color='blue' size='lg'>Push</Testbutton>
    <Testbutton secondary  outline color='green' size='lg'>Push</Testbutton>
    <Testbutton primary outline  color='yellow' size='lg'>Push</Testbutton>
    <Testbutton></Testbutton>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
