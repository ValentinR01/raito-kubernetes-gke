import "App.css";
import React from 'react';
import ThemeProvider from "providers/ThemeProvider";
//import Text from "components/atoms/grouping/Text/Text";
//import Button from "components/atoms/forms/Button/Button";
//import Header from "components/organisms/Header/Header";
import Sidebar from "components/organisms/sidebar/Sidebar";

// @NOTE - [TODO | Val'] : debug <Header /> for toggle theme

import {
  Routes,
  Route
} from "react-router-dom";
import Main from "components/organisms/main/Main";
import Respiration from "components/pages/respiration/Respiration";
import Ambiances from "components/pages/ambiances/Ambiances";
import Profil from "components/pages/profil/Profil";
import Home from "components/pages/homeCom/Home";


function App() {

  return (
    <ThemeProvider>
      <div className="App">
     <Sidebar></Sidebar>
     <Main >
           <Routes>
              < Route path="/"   element={ <Home />} />
              < Route path="/respiration/:id"    element={ < Respiration />}  />
              < Route path="/ambiance/:id"  element={ < Ambiances /> } />
              < Route path="/profil"  element={ < Profil /> } />
           </Routes> 
     </Main>
    </div>
    </ThemeProvider>
  );
}

export default App;
