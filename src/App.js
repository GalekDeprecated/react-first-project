import React, { useState } from 'react';
import './App.css';
import Header from "./Header/Header";
import ThemeContext from "./ThemeContext";

function App() {
    const theme = useState({
        background: "dark",
        font: "light"
    });

  return (
    <ThemeContext.Provider value={theme}>
        <div className="container-fluid">
            <Header />
        </div>
    </ThemeContext.Provider>
  );
}

export default App;
