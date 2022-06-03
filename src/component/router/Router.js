import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Homepage"
import Bio from "../../pages/bio/Bio";
import Print from "../../pages/print/Print"

function Routeur() {
  return (
    <>
   <Routes>
    <Route path="/Bio" element={<Bio />} />
    <Route path="/Print" element={<Print />} />
    <Route path="/" element={<Home />} />
  </Routes> 
    </>
  );
}

export default Routeur;