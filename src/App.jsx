import React, { useState, useEffect } from 'react';
import Contact from "./components/Contact";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Qualifications from "./components/Qualifications";
import Services from "./components/Services";
import ThreeBackground from "./components/ThreeBackground";
import Certifications from './components/Certs';

function App() {
  // Initialize view from hash (e.g. #services -> 'services'), default to 'home'
  const [view, setView] = useState(() => {
    const h = (typeof window !== 'undefined' && window.location.hash) ? window.location.hash.replace('#', '') : '';
    return h || 'home';
  });

  useEffect(() => {
    const onHashChange = () => {
      const h = window.location.hash.replace('#', '');
      setView(h || 'home');
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const renderView = () => {
    switch (view) {
      case 'certifications':
      case 'certs':
        return <Certifications />;
      case 'services':
        return <Services />;
      case 'projects':
        return <Projects />;
      case 'qualifications':
        return <Qualifications />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="relative bg-[#030014] min-h-screen overflow-x-hidden">
      <ThreeBackground />
      <div className="relative z-10">
        <Nav />
        <div className="py-8">
          {renderView()}
        </div>
      </div>
    </div>
  );
}

export default App;
