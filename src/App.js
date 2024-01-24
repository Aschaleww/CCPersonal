import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import About from "./containers/about";
import Home from "./containers/home";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Contact from "./containers/contact";
// import Portfolio from "./containers/portfolio";
import NavBar from "./component/navBar";
import particles from "./utils.js/particles";

function App() {
  const handleInit = async (main) => {
    await loadFull(main);
  };
  return (
    <div className="App">
      <Particles id="particles" options={particles} init={handleInit} />

      <NavBar />

      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skill" element={<Skills />} />
        {/* <Route path="/port" element={<Portfolio />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
