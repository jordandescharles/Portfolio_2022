import React from "react";
import Darkmode from "./component/intro/Darkmode";
import Footer from "./component/intro/Footer";
import Intro from "./component/intro/Intro";
import Language from "./component/intro/Language";

function App() {
  return (
    <div className="App">
      <Language />
      <Intro />
      <Footer />
      <Darkmode />
    </div>
  );
}

export default App;
