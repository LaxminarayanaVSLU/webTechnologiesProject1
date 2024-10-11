import ContentPageComponent from "./components/ContentPageComponent";
import HomePageComponent from "./components/HomePageComponent";
import TaxonomyPageComponent from "./components/TaxonomyPageComponent";
import TeamPageComponent from "./components/TeamPageComponent";
import "./styles/css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/webTechnologiesProject1">
      <Routes>
        <Route path="/" element={<HomePageComponent />} />
        <Route path="/content" element={<ContentPageComponent />} />
        <Route path="/team" element={<TeamPageComponent />} />
        <Route path="/taxonomy" element={<TaxonomyPageComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
