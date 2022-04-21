import React from "react";
import { Route, Routes} from "react-router";
import Home from "./component/router/Homepage"
import Bio from "./component/router/Bio";
import Print from "./component/router/Print"
 
function App() {
  return (
  <Routes>
    <Route path="/Bio" element={<Bio />} />
    <Route path="/Print" element={<Print />} />
    <Route path="/" element={<Home />} />
  </Routes>);
}

export default App;
