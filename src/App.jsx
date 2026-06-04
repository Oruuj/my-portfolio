import { useState } from "react";
import "./App.scss";
import { Navbar } from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skill from "./components/Skill/Skill";
import Mailme from "./components/Mailme/Mailme";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skill />
      <Mailme />
    </>
  );
}

export default App;
