import React, { useState } from 'react';
import './App.css';
import Typist from 'react-typist';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';
import cv from './assets/cv.png';


function App() {
  const [logosShowing, showLogos] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <Typist startDelay={500} onTypingDone={() => setTimeout(() => {
          showLogos(true)
        }, 300)}>
          Alejandro Perez
        </Typist>
        <br />
        {logosShowing ?
          <div className="Logos">
            <a href="https://github.com/alexps711" target="_blank">
              <img src={github} />
            </a>
            <a href="https://www.linkedin.com/in/alejandro-perez-salas/" target="_blank" >
              <img src={linkedin} />
            </a>
            <a href="/assets/Alejandro_Perez.pdf" download={true}>
              <img src={cv} />
            </a>
          </div>
          : null}
      </header>
    </div>
  );
}

export default App;
