// // src/App.js
// import React from 'react';
// import Contact from "./components/Contact";
// import Home from "./components/Home";
// import Nav from "./components/Nav";
// import Projects from "./components/Projects";
// import Qualifications from "./components/Qualifications";
// import Services from "./components/Services";
// import ThreeBackground from "./components/ThreeBackground";

// function App() {
//   return (
//     <div className="bg-[#030014] overflow-y-scroll overflow-x-hidden h-full relative ">
//       <ThreeBackground />
//       <div className="relative z-10">
//         <Nav />
//         <Home />
//         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         <Services />
//         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         <Projects />
//         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         <Qualifications />
//         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         <Contact />
//         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Contact from "./components/Contact";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Qualifications from "./components/Qualifications";
import Services from "./components/Services";
import ThreeBackground from "./components/ThreeBackground";

function App() {
  return (
    <div className="relative bg-[#030014] min-h-screen overflow-x-hidden">
      <ThreeBackground />
      <div className="relative z-10">
        <Nav />
        <Home />
        <div className="space-y-40">
          <Services />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <Projects />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <Qualifications />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
