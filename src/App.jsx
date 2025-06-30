import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Headshot from './assets/New Headshot.png';
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
import Song5 from "./assets/MAINE RAINE.mp3";
import GoingPlaces from "./assets/Going Places.jpeg";
import ufLogo from "./assets/uf logo.jpeg";
import FidelisLogo from "./assets/Fidelis Logo.jpeg";
import ManpowerLogo from "./assets/Manpower Logo.jpeg";
import AllstateLogo from "./assets/Allstate Logo.jpeg";
import StampedeLogo from "./assets/Stampede Logo.jpeg";
import PhiLogo from "./assets/Phi Tau Logo.jpeg";
import DMLogo from "./assets/DM Logo.jpeg";
import Memories from "./assets/MEMORIES.mp4";
import apple from "./assets/apple.png";
import spotify from "./assets/Spotify.png";
import soundcloud from "./assets/soundcloud.png";
import youtube from "./assets/youtube.png";

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
      <h2>Marketing Professional</h2>
      <h2>Graduate of the University of Florida</h2>
      <h3>Welcome to My Portfolio</h3>
      <p>
        I am an recent graduate of the University of Florida with a bachelor's degree in marketing.
      </p>
      <p>
        Using the toggle at the top of the page, you can switch between "Professional" and "Creative" modes.
      </p>
      <p>
        In "Professional" mode, you can view my resume and learn about my professional experience.
      </p>
      <p>
        In "Creative" mode, you can see my creative projects, including music and film.
      </p>
      <h2>Resume</h2>
        <a href={Resume} target="_blank" rel="noopener noreferrer">
          <button>View My Resume</button>
        </a>
        <p>
        P.S. I coded this website myself in React. View the GitHub Repository {" "}
        <a href="https://github.com/desperado9994/my-portfolio" target="_blank" rel="noopener noreferrer">
          here
          </a>.
        </p>

        {/* Text only visible in Professional mode */}
        {!darkMode && (
  <div className="professional-container">
    <h2>Education</h2>
    <h3>
    <img src={ufLogo} alt="University of Florida" className="company-logo" />
      University of Florida
    </h3>
    <h4>Bachelor of Science in Business Administration - Marketing</h4>
    <h5>Minor in Mass Communications</h5>
    <h6>Certificate in A.I. Fundamentals and Applications</h6>

    <h2>Work Experience</h2>
    <h3>
    <img src={FidelisLogo} alt="Fidelis Leadership Group" className="company-logo" />
      Fidelis Leadership Group
      </h3>
    <h4>Social Media Coordinator (Part-Time) </h4>
    <h6>June 2020 - Present</h6>

    <h3>
    <img src={ManpowerLogo} alt="ManpowerGroup" className="company-logo" />
      ManpowerGroup
      </h3>
    <h4>Marketing Intern</h4>
    <h6>June 2024 - August 2024</h6>

    <h3>
    <img src={AllstateLogo} alt="Allstate" className="company-logo" />
      Allstate Insurance Company
      </h3>
    <h4>Sales and Marketing Intern</h4>
    <h6>August 2023 - April 2024</h6>

    <h3>
    <img src={StampedeLogo} alt="Stampede Ventures" className="company-logo" />
      Stampede Ventures
      </h3>
    <h4>Student Intern</h4>
    <h6>January 2022 - April 2022</h6>

    <h2>Leadership & Involvement</h2>
    <h3>
    <img src={PhiLogo} alt="Phi Kappa Tau" className="company-logo" />
        Phi Kappa Tau Fraternity
    </h3>
    <h4>Social Media Chair and Photographer</h4>
    <h6>August 2022 - August 2023</h6>

    <h3>
    <img src={DMLogo} alt="DM" className="company-logo" />
        Dance Marathon at the University of Florida
    </h3>
    <h4>Emerging Leaders Program</h4>
    <h6>September 2021 - April 2022</h6>


    <h2>Skills</h2>
    <ul className="skills-list">
      <li>Digital Marketing Strategy</li>
      <li>Competitor Analysis</li>
      <li>Market Research and Analysis</li>
      <li>Social Media Management</li>
      <li>Adobe Creative Suite</li>
      <li>Python, SQL, React</li>
      <li>Google Analytics</li>
      <li>CRM Software</li>
      <li>AI and ML Fundamentals</li>
      <li>Web Design</li>
    </ul>
  </div>
)}
      {darkMode && (
  <>
  <div className="creative-pursuits">
    <h5>MUSIC</h5>
    <p>I have been producing instrumentals under the artist name Desperado since 2021.</p>
    <p>I've released 4 albums so far - you can see the album covers below.</p>
    <p>Press each cover to see the full album, or press the icons to see my artist page.</p>
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
        <h3>Listen to "Maine Raine" from Wolf</h3>
        <audio controls>
          <source src={Song5} type="audio/mp3" />
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

    <div className="music-icons">
  <a href="https://open.spotify.com/artist/6ifDzDGRzfv9RnTdh8aD7C?si=v5Kie-TiT2KJ5Qm_ewAk7w" target="_blank">
    <img src={spotify} alt="Spotify" className="music-icon" />
  </a>
  <a href="https://music.apple.com/us/artist/desperado/1749031502" target="_blank">
    <img src={apple} alt="Apple Music" className="music-icon" />
  </a>
  <a href="https://on.soundcloud.com/UADrKNM3krzLu4Q47" target="_blank">
    <img src={soundcloud} alt="SoundCloud" className="music-icon" />
  </a>
  <a href="https://www.youtube.com/@desperado9994" target="_blank">
    <img src={youtube} alt="YouTube" className="music-icon" />
  </a>
</div>

    <h6>"MEMORIES"</h6>
    <p>In February of 2025, I shot a music video for "MEMORIES" from my upcoming album DESPERADO II.</p>
    <p>Press below to watch it or press { }
      <a href="https://www.youtube.com/watch?v=EsjFu3vdVZo" target="_blank" rel="noopener noreferrer">
          here
          </a>{" "}
          to watch on YouTube.
    </p>
    <div>
      <video controls style={{ width: "700px", height: "auto" }}>
        <source src={Memories} type="video/mp4" />
      </video>
    </div>
    <h5>FILM</h5>
    <h2>Going Places</h2>
    <p>
      In June of 2021, I worked as a Set Production Assistant on the feature film "Going Places" directed by Max Chernov.
    </p>
    <p>
      Press below to see the IMDB page or press { }
      <a href="https://www.youtube.com/watch?v=0MsL75U6UfQ" target="_blank" rel="noopener noreferrer">
          here
          </a>{" "}
          to watch the trailer on YouTube.
    </p>
    <div>
      <a href="https://www.imdb.com/title/tt14674708/" target="_blank">
        <img src={GoingPlaces} className="logo" alt="Going Places" />
      </a>
    </div>
  </div>
  </>
)}
    </div>
  );
}

export default App;