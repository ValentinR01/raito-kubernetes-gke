import "App.css";
import React from "react";
import ThemeProvider from "providers/ThemeProvider";
import { Routes, Route} from "react-router-dom";
import AppBackground from "components/molecules/embedding/AppBackground/AppBackground";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import Ambiances from "components/pages/Ambiances/Ambiances";
import AmbianceSinglePage from "components/pages/AmbianceSinglePage/AmbianceSinglePage";
import Step2 from "components/pages/Step2/Step2";









function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <PageTemplate>
        <Routes>
          <Route path="/" element={<div />} />
          <Route path="/respiration/" element={<div />} />
          {/* <Route path="/ambiances/" element={<Ambiances />} /> */}
          <Route path="/profil" element={<div />} />



            {/* <Route path="/ambiances"  element={<Ambiances />} />
              <Route path="/users" element={<Profil />}>
                <Route path=":userId" element={<UserPage />} />
              </Route> */}

              <Route path="/ambiances"  element={<Ambiances />} />
              <Route path="/step2" element={<Step2 />}>
                <Route path=":ambianceId" element={<AmbianceSinglePage />} />
              </Route>
        </Routes>
        </PageTemplate>
        
        
        <AppBackground />
      </div>
    </ThemeProvider>
  );
}

export default App;
