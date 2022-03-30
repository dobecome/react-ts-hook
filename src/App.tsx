import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountState from './CountState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CountState count={0}/>
        {/* <ChatRecipientPicker/> */}
      </header>
    </div>
  );
}

export default App;
