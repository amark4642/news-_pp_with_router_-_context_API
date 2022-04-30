import React, { useState } from 'react';
import './App.css';
import Body from './components/body';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    </div>
  );
}

export default App;
