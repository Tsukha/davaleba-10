import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="portfolio-container">
        <div className="portfolio-content">
          <div className="image-container">
            <img
              src="/photo.jpg"
              alt="Developer Profile"
              className="profile-image"
            />
          </div>
          <h1 className="developer-name">Sandro Tsukhishvili</h1>
          <p className="developer-description">
            Front-end developer specializing in HTML, CSS, Javascript, React and
            Node.js. Passionate about creating intuitive user experiences and
            scalable applications.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
