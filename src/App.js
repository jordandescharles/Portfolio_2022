import React from "react";
import { Route, Routes} from "react-router";
import Home from "./component/router/Homepage"
import Bio from "./component/router/Bio";


function App() {
  return (
  <Routes>
    <Route path="/Bio" element={<Bio />} />
    <Route path="/" element={<Home />} />
  </Routes>);
}

export default App;
