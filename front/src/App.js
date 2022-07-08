import "App.css";
import React from "react";
import ThemeProvider from "providers/ThemeProvider";
import { Routes, Route } from "react-router-dom";
import AppBackground from "components/molecules/embedding/AppBackground/AppBackground";
import ColorPickerWidget from "components/organisms/widgets/ColorPickerWidget/ColorPickerWidget";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<ColorPickerWidget />} />
          <Route path="/respiration/" element={<div />} />
          <Route path="/ambiance/" element={<div />} />
          <Route path="/profil" element={<div />} />
        </Routes>
        <AppBackground />
      </div>
    </ThemeProvider>
  );
}

export default App;
