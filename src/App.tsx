import { Routes, Route } from "react-router-dom";
import Nested from "components/templates/Nested";
import About from "components/pages/About";
import Projects from "components/pages/Projects";
import Skills from "components/pages/Skills";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nested />}>
          <Route path="" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
