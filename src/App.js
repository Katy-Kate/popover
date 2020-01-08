import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Popover } from './Popover';

function App() {
  return (
    <div className="App">
      <Popover content={'popover content 1'} />
      <div style={{ height: '40px', background: '#eee' }} />
      <Popover content={'popover content 2'} />
      <Popover content={'popover content 3'} />
      <Popover content={'popover content 4'} />
      <Popover content={'popover content 5'} />
      <div style={{ height: '40px', background: '#eee' }} />
      <Popover content={'popover content 6'} />
      <Popover content={'popover content 7'} />
      <Popover content={'popover content 8'} />
      <Popover content={'popover content 9'} />
    </div>
  );
}

export default App;
