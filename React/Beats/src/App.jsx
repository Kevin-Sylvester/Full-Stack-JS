
import {Hero} from "./components/Hero/Hero";
import {Footer} from "././components/Footer";
import {Navbar} from "././components/Navbar";
import {Main} from "././components/Main";
import "./style.css";
import { createContext } from "react";
import "./App.css";
import appleLogo from "./Photos/appleLogo.png";
import amazonLogo from "./Photos/amazonLogo.png";
import spotifyLogo from "./Photos/spotifyLogo.png";
import youtubeLogo from "./Photos/youtubeLogo.png";

export const myContext = createContext("");

function App({value}) {
  debugger;
  const menu = value;
  console.log(menu);
  return (
    <myContext.Provider value={{menu}}>
      <section className="home-section">
      <Navbar/>
      <Main/>

        <div className="company-logo">
          <img src={appleLogo} alt="apple-logo" />
          <img src={spotifyLogo} alt="spotify-logo" />
          <img src={amazonLogo} alt="amazon-logo" />
          <img src={youtubeLogo} alt="youtube-logo" />
        </div>
      </section>
      <Hero/>
      <Footer/>
    </myContext.Provider>
  );
}

export default App;
