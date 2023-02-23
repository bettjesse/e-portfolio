import React from "react";
import Header from "./Header";
import Education from "./Education";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Contact from "./Contact";
function App() {
  return (
    <div className="">
      <Header/>
      <main className="container mx-auto px-4 py-8">
        <About/>
        <Education />
         <Experience />
         <Skills />
        <Contact />  
      </main>
    </div>
  );
}

export default App;
