import React from 'react';
import logo from './logo.svg';
import  stl from  './App.module.css';

function App() {
  return (
    <div className={stl.App}>
      <header className={stl.AppHeader}>
        <img src={logo} className={stl.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={stl.AppLogo}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
