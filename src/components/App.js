import React, { useState } from 'react';
import './App.css';
import ShoppingList from './ShoppingList';

const App = () => {
  
  const [isDarkMode, setIsDarkMode] = useState(false);

  
  const handleToggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode); 
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}> 
      <header>
        <h1>Fresh Market</h1>
        <button onClick={handleToggleMode}> 
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </header>
      <ShoppingList items={itemData}/>
    </div>
  );
};

export default App;
