import React, { useState } from 'react';
import { Header } from './components/Header';
import { Characters } from './components/Characters';
import ThemeContext from './context/ThemeContext';
import './App.css'

function App() {

  const [theme, setTheme] = useState('Light-mode')

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={`App + ${theme}`}>
        <Header />
        <Characters />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
