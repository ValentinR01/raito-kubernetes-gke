import "App.css";
import React from "react";
import ThemeProvider from "providers/ThemeProvider";
import { Routes, Route} from "react-router-dom";
import AppBackground from "components/molecules/embedding/AppBackground/AppBackground";
import AmbiancesPage from "components/pages/AmbiancesPage/AmbiancesPage";
import AmbianceSinglePage from "components/pages/AmbianceSinglePage/AmbianceSinglePage";
import RespirationPage from "components/pages/RespirationPage/RespirationPage";
import RespirationSinglePage from "components/pages/RespirationSinglePage/RespirationSinglePage";
import HomePage from "components/pages/HomePage";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/respiration/">
            <Route index element={<RespirationPage />} />
            <Route path=":respirationId" element={<RespirationSinglePage />} />
          </Route>
          <Route path="/profil" element={<div />} />
          <Route path="/ambiances/">
            <Route index element={<AmbiancesPage />} />
            <Route path=":ambianceId" element={<AmbianceSinglePage />} />
          </Route>
        </Routes>
        <AppBackground />
      </div>
    </ThemeProvider>
  );
}

export default App;
