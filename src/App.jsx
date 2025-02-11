import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Headshot from './assets/circle2.png';
import Song from "./assets/COME BACK GIRL.mp3";
import Album from './assets/DESPERADO II COVER.png';
import MyVideo from './assets/MyVideo.mp4';
import ParticlesComponent from './components/particles';
import Album2 from "./assets/Cover1.png";
import Song2 from "./assets/nowadays.mp3";
import Ambrosia from "./assets/Ambrosia.mp4";
import Album3 from "./assets/First Draft.png";
import Album4 from "./assets/Wolf.png";
import Song3 from "./assets/ARRET copy.mp3";
import Song4 from "./assets/UNTITLED.mp3";
import Resume from "./assets/Luke Broding Resume.pdf";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.body.classList.toggle("dark-mode", newMode);
      document.body.classList.toggle("light-mode", !newMode);
      return newMode;
    });
  };


  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
  
      {/* Toggle Switch */}
      <div className="toggle-container">
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          <span className="slider round"></span>
        </label>
        <span>{darkMode ? "Creative" : "Professional"}</span>
      </div>

      {/* Particles */}
      {darkMode && <ParticlesComponent id="particles" darkMode={darkMode} />}

      {/* Header */}
  
      <div>
        <a href="https://linkedin.com/in/lukebroding" target="_blank">
          <img src={Headshot} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Luke Broding</h1>
      <h2>Marketing Student at the University of Florida</h2>
      <h3>Welcome to My Portfolio</h3>
      <p className="read-the-docs">
        I am an upcoming graduate of the University of Florida pursuing a bachelor's degree in marketing.
      </p>
      <h2>Resume</h2>
        <a href={Resume} target="_blank" rel="noopener noreferrer">
          <button>View My Resume</button>
        </a>
      {darkMode && (
  <>
    <h2>Music</h2>
    <div className="music-container">
      {/* First Album */}
      <div className="music-item">
        <a href="https://music.apple.com/us/artist/desperado/1749031502" target="_blank">
          <img src={Album} className="album" alt="Album Cover 1" />
        </a>
        <h3>Listen to "Come Back Girl" from Desperado II</h3>
        <audio controls>
          <source src={Song} type="audio/mp3" />
        </audio>
      </div>

      {/* Second Album */}
      <div className="music-item">
        <a href="https://music.apple.com/us/album/desperado/1749434519" target="_blank">
          <img src={Album2} className="album" alt="Album Cover 2" />
        </a>
        <h3>Listen to "Nowadays" from Desperado</h3>
        <audio controls>
          <source src={Song2} type="audio/mp3" />
        </audio>
      </div>

      <div className="music-item">
        <a href="https://soundcloud.com/user-743319035-331244015/sets/wolf" target="_blank">
          <img src={Album4} className="album" alt="Album Cover 3" />
        </a>
        <h3>Listen to "Arret" from Wolf</h3>
        <audio controls>
          <source src={Song3} type="audio/mp3" />
        </audio>
      </div>

      <div className="music-item">
        <a href="https://soundcloud.com/user-743319035-331244015/sets/first-draft" target="_blank">
          <img src={Album3} className="album" alt="Album Cover 4" />
        </a>
        <h3>Listen to "Untitled" from First Draft</h3>
        <audio controls>
          <source src={Song4} type="audio/mp3" />
        </audio>
      </div>
    </div>

    <h2>Film</h2>
    <h3>Check Out the Teaser Trailer for "Water of the Will"</h3>
    <p>
      In May of 2024, I co-directed a short film with Power Struck Productions that is currently in post-production.
    </p>
    <div>
      <video controls style={{ width: "700px", height: "auto" }}>
        <source src={MyVideo} type="video/mp4" />
      </video>
    </div>
    <h3>Check Out the Music Video for "Ambrosia" by HeadFirst</h3>
    <p>
      During our shoot of "Water of the Will," our team also shot a music video for the song "Ambrosia",
    </p>
    <p>
      which was written and performed by the band HeadFirst.
    </p>
    <div>
      <video controls style={{ width: "700px", height: "auto" }}>
        <source src={Ambrosia} type="video/mp4" />
      </video>
    </div>
  </>
)}
    </div>
  );
}

export default App;