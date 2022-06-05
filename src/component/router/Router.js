import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Homepage"
import Bio from "../../pages/bio/Bio";
import Print from "../../pages/print/Print"
import Project from "../project/ProjectView"
import Web from "../../pages/web/Web";

function Routeur() {
  return (
    <>
   <Routes>
    <Route path="/Bio" element={<Bio />} />
    <Route path="/Print" element={<Print />} />
    <Route path="/Web" element={<Web />} />
    <Route path="/" element={<Home />} />
    <Route path="/project-view" element={<Project />} />
  </Routes> 
    </>
  );
}

export default Routeur;