import { useState } from "react";
import "./App.css";
import Nav from "./components/nav/Nav"
import Home from "./components/home/Home"
import Contact from "./components/contact/Contact"
import About from "./components/about/About"
import Project from "./components/project/Project"


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav/>
      <Home/>
      <About/>
      <Project/>
      <Contact/>



    </>
  );
}

export default App;
