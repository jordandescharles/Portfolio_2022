import { Routes,Route} from "react-router-dom";
import Home from "../../pages/Homepage"
import Bio from "../../pages/bio/Bio";
import Print from "../../pages/print/Print"
import ProjectView from "../project/ProjectView"
import Web from "../../pages/web/Web";

function Routeur() {
  return (
    <>
   <Routes>
    <Route path="/" element={<Home />} /> 
    <Route path="/Bio" element={<Bio />} />
    <Route path="/Print" element={<Print />} />
    <Route path="/Web" element={<Web />} />         
    <Route path="/projectview/:name/:source" element={<ProjectView />} />
  </Routes> 
    </>
  );
}

export default Routeur;