import "App.css";
import React from 'react';
import ThemeProvider from "providers/ThemeProvider";
import AppBackground from "components/atoms/embeding/AppBackground/AppBackground";

// @NOTE - [TODO | Val'] : debug <Header /> for toggle theme

function App() {

  return (
    <ThemeProvider>
      <div className="App">
        {/* <Header/>
        <Text size="xlarge" color="primary">RAITŌ ライト</Text>
        <Button format="link">button</Button> */}
        <AppBackground /> 
      </div>
    </ThemeProvider>
  );
}

export default App;
