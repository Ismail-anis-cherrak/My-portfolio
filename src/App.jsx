import React from 'react';
import Contact from "./components/Contact";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Qualifications from "./components/Qualifications";
import Services from "./components/Services";
import ThreeBackground from "./components/ThreeBackground";
import Certifications from './components/Certs';

function App() {
  return (
    <div className="relative bg-[#030014] min-h-screen overflow-x-hidden">
      <ThreeBackground />
      <div className="relative z-10">
        <Nav />
        <Home />
        <div className="space-y-40">
          <Certifications />
          <br />
          <Services />
          <br />
          <Projects />
          <br />
          <Qualifications />
          <br />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
