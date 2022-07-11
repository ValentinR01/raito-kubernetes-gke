import "App.css";
import React from "react";
import ThemeProvider from "providers/ThemeProvider";
import { Routes, Route } from "react-router-dom";
import AppBackground from "components/molecules/embedding/AppBackground/AppBackground";
import AmbiancesPage from "components/pages/AmbiancesPage/AmbiancesPage";
import AmbianceSinglePage from "components/pages/AmbianceSinglePage/AmbianceSinglePage";
import Step2 from "components/pages/Step2/Step2";
import HomePage from "components/pages/HomePage";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/respiration/" element={<div />} />
          <Route path="/profil" element={<div />} />
          <Route path="/ambiances" element={<AmbiancesPage />} />
          <Route path="/step2" element={<Step2 />}>
            <Route path=":ambianceId" element={<AmbianceSinglePage />} />
          </Route>
        </Routes>
        <AppBackground />
      </div>
    </ThemeProvider>
  );
}

export default App;
