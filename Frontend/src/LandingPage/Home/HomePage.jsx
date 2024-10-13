import Education from "./Education";
import Hero from "./Hero";
import OpenAccount from "../OpenAccount";
import Pricing from "./Pricing";
import Stats from "./Stats";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./Home.css";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default Home;
