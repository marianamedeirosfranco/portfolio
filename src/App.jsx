import React from "react";
import Header from "./components/header/Header";
import Top from "./components/top/Top";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <Top />
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
