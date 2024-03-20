//./shad/components/ui/
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import About from "./components/About";
import WorkExp from "./components/WorkExp";
import WorkedWith from "./components/WorkedWith";
import Socials from "./components/Socials";
import FooterX from "./components/FooterX";
import "./App.css";
import tag from "./components/tag.js";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    tag();
  }, []);
  return (
    <>
      <Nav />
      <Landing />
      <About />
      <WorkExp />
      <WorkedWith />
      <Socials />
      <FooterX />
    </>
  );
}

export default App;
