import "App.css";
import React from 'react';
import ThemeProvider from "providers/ThemeProvider";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <ThemeProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={ <div />} />
          <Route path="/respiration/" element={ < div />}  />
          <Route path="/ambiance/" element={ < div /> } />
          <Route path="/profil" element={ < div /> } />
          </Routes> 
    </div>
    </ThemeProvider>
  );
}

export default App;
