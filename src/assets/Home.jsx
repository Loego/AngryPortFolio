import React from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import AboutMe from "../components/Aboutme";

function Home() {
  return (
    <>
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
