import { v4 as uuidv4 } from "uuid";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import About from "./components/About";
import WorkExp from "./components/WorkExp";
import Socials from "./components/Socials";
import FooterX from "./components/FooterX";
import "./App.css";
import tag from "./components/tag.js";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    sessionStorage.setItem("sid", uuidv4());
    tag({ eventAction: "pageLoad", eventCode: "landing" });
  }, []);
  return (
    <>
      <Nav />
      <Landing />
      <About />
      <WorkExp />
      <Socials />
      <FooterX />
    </>
  );
}

export default App;
