import React from "react";

import tutorial1 from "../../assets/images/lesson1.png";
import tutorial2 from "../../assets/images/lesson2.png";
import tutorial3 from "../../assets/images/lesson3.PNG";


import "./lessoncontent.scss";

const LessonContent = () => (
  <div className="card-container">
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/PegHeads-Inc/PegHeads-Tutorial-1/blob/main/PegHeads.ipynb"
      alt="tutorial-links"
      className="tutorial-links"
    >
      <div className="card">
        <img className="card-image" alt="tutorial1" src={tutorial1} />
        <h1 className="card-title">Tutorial #1</h1>
        <p className="card-text">Tying video clips together with ai.</p>
      </div>
    </a>

    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/PegHeads-Inc/PegHeads-Tutorial-2/blob/main/PegHeads-Tutorial-2.ipynb"
      alt="tutorial-links"
      className="tutorial-links"
    >
      <div className="card">
        <img className="card-image" alt="tutorial2" src={tutorial2} />
        <h1 className="card-title">Tutorial #2</h1>
        <p className="card-text">Video clip selection using dropdown menu</p>
      </div>
    </a>

     <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/PegHeads-Inc/PegHeads-Tutorial-3/blob/main/main.ipynb"
      alt="tutorial-links"
      className="tutorial-links"
    >
      <div className="card">
        <img className="card-image3" alt="tutorial3" src={tutorial3} />
        <h1 className="card-title">Tutorial #3</h1>
        <p className="card-text">Testing the Facial Emotion Recognition (FER) algorithm on animations</p>
      </div>
    </a>
  </div>
);

export default LessonContent;
