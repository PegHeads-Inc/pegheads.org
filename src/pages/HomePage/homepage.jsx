import React from "react";

import HomeContent from "../../components/HomeContent/homecontent";

import LandingImage0 from "../../assets/images/landingimage0.jpg";
import LandingImage1 from "../../assets/images/landingimage1.jpg";
import LandingImage3 from "../../assets/images/defi.jpg";
import LandingImage5 from "../../assets/images/github.jpg";
import LandingImage6 from "../../assets/images/NFT.JPEG";
import LandingImage7 from "../../assets/images/IMG_2524.PNG";

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import "./homepage.scss";

const HomePage = () => (
  <>
    <div className="scrollmenu">
      <AliceCarousel>
        <iframe 
          src="https://player.vimeo.com/video/661018557?h=bf4c6ff739&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
          frameborder="0" 
          allowfullscreen="" 
          title="AI IS HERE TO STAY" 
          class="video_frame"
        ></iframe>
        <img src={LandingImage7} className="sliderimg" alt="image7" />
        <img src={LandingImage0} className="sliderimg" alt="image0" />
        <img src={LandingImage1} className="sliderimg" alt="image1" />
        
        <img src={LandingImage3} className="sliderimg" alt="image3" />
        <img src={LandingImage5} className="sliderimg" alt="image5" />
        
        <img src={LandingImage6} className="sliderimg" alt="image6" />

      </AliceCarousel>
    </div>
    <div className="homepage-container">
      <div className="content">
        <br/>
        <br/>
        <h1 className="title">Learn ai with ai</h1>

        <p className="text">
          Welcome to PegHeads.org a free coding platform for developers
          who want to build awesome AI & ML models.

          If you are an experienced developer interested in helping us with our
          mission of training artificial intelligence to automate 3D animation
          then please click here for our{" "}
          <a
            href="https://github.com/PegHeads-Inc"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub account
          </a>
          . 
          <br /><br />
          
          We will make update to our source code periodically.
          We highly recommend signing up, reviewing our {" "}
          <a
            href="https://pegheadsorg.creator-spring.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            iconic merchandise
          </a>
           {" "} and making a donation so we can continue to produce free educational tutorials and amazing 3D animations.
        </p>

        <h1 className="sub-title">
          PegHeads output tutorial #1
        </h1>

        <div className="video-container">
          <iframe
            src="https://player.vimeo.com/video/591879855?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=97cde517b3"
            width="90%"
            height="560"
            frameBorder="0"
            webkitallowfullscreen=""
            mozallowfullscreen=""
            allowFullScreen=""
            title="pegheads"
          ></iframe>
        </div>
      </div>
    </div>
    <HomeContent />
  </>
);

export default HomePage;
