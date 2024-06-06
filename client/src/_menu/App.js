import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <MenuBar />
      <div className="Content">
        {/* Your content goes here */}
        {/* This div will become scrollable */}
        { /* Example content */}
        <div style={{ height: '2000px' }}>Scrollable Content</div>
      </div>
    </div>
  );
}

function MenuBar() {
  return (
    <div className="MenuBar">
      {/* Your menu bar content goes here */}
      {/* Example menu bar */}
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
