import React from 'react'
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import works1 from "../images/home/works1.png";
import works2 from "../images/home/works2.png";
import works3 from "../images/home/works3.png";
import works4 from "../images/home/works4.png";
import { MdDoubleArrow } from "react-icons/md";
import { PiNumberSquareOneFill } from "react-icons/pi";
import { PiNumberSquareTwoFill } from "react-icons/pi";
import { PiNumberSquareThreeFill } from "react-icons/pi";
import viewport from "../images/about/viewport.png";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { FaLongArrowAltRight } from "react-icons/fa";
import whitecircle from "../images/circles/whitecircle.png";
import purplecircle from "../images/circles/purplecircle.png"
import purplecirclering from "../images/circles/purplecirclering.png"

const Works = () => {
  {
    /*Works Div-1 functions*/
  }
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const useScrollToTop = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  };
  useScrollToTop();


  useEffect(() => {
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
  
    window.addEventListener("beforeunload", handleBeforeUnload);
  
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  return (
    <div className='pages'>
      <img className="purplecirclering-right" src={purplecirclering} />
       {/* Work Div-2 div*/}
       <section>
        <div className="home-div-5">
          <div className="home-div-5-div-1">
            <h1 className="head">OUR WORKS</h1>
            <h1 className="sub-head">We've done some interesting projects</h1>
            <p>We are a creative agency that connects people.</p>
          </div>
          <div className="home-div-5-div-2">
            <div className="bloc-tabs">
              <div
                onClick={() => toggleTab(1)}
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              >
                All products
              </div>
              <div
                onClick={() => toggleTab(2)}
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              >
                Web Design
              </div>
              <div
                onClick={() => toggleTab(3)}
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              >
                Mobile Web App
              </div>
            </div>
            <div className="content-tabs">
              <div
                className={
                  toggleState === 1 ? "content active-content" : "content"
                }
              >
                <div className="works-container">
                  <img className="works1" src={works1} />
                  <div className="text-overlay">
                    <h1 className="text-overlay-purpose">Web UI Kit</h1>
                    <h1 className="text-overlay-title">KRAFT Web UI Kit</h1>
                    <p className="text-overlay-description">
                      Comprehensive web resource for busy designers
                    </p>
                    <Link className="works-link">
                      <h2 className="text-overlay-link">View Project</h2>{" "}
                      <MdDoubleArrow />
                    </Link>
                  </div>
                </div>

                <div className="works-container">
                  <img className="works2" src={works2} />
                  <div className="text-overlay">
                    <h1 className="text-overlay-purpose">Bank system</h1>
                    <h1 className="text-overlay-title">Baking Reimagined</h1>
                    <p className="text-overlay-description">
                      Tool to organize your banking experience
                    </p>
                    <Link className="works-link">
                      <h2 className="text-overlay-link">View Project</h2>{" "}
                      <MdDoubleArrow />
                    </Link>
                  </div>
                </div>

                <div className="works-container">
                  <img className="works3" src={works3} />
                  <div className="text-overlay">
                    <h1 className="text-overlay-purpose">Nutrition App</h1>
                    <h1 className="text-overlay-title">Nutrifit</h1>
                    <p className="text-overlay-description">
                      App to help your body be on shape
                    </p>
                    <Link className="works-link">
                      <h2 className="text-overlay-link">View Project</h2>{" "}
                      <MdDoubleArrow />
                    </Link>
                  </div>
                </div>

                <div className="works-container">
                  <img className="works3" src={works4} />
                  <div className="text-overlay">
                    <h1 className="text-overlay-purpose">Books and Art</h1>
                    <h1 className="text-overlay-title">Tears of Soul</h1>
                    <p className="text-overlay-description">
                      Website for artist and bookworms
                    </p>
                    <Link className="works-link">
                      <h2 className="text-overlay-link">View Project</h2>{" "}
                      <MdDoubleArrow />
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className={
                  toggleState === 2 ? "content active-content" : "content"
                }
              >
                <div className="works-container">
                  <img className="works1" src={works1} />
                  <div className="text-overlay">
                    <h1 className="text-overlay-purpose">Web UI Kit</h1>
                    <h1 className="text-overlay-title">KRAFT Web UI Kit</h1>
                    <p className="text-overlay-description">
                      Comprehensive web resource for busy designers
                    </p>
                    <Link className="works-link">
                      <h2 className="text-overlay-link">View Project</h2>{" "}
                      <MdDoubleArrow />
                    </Link>
                  </div>
                </div>

                <div className="works-container">
                  <img className="works2" src={works2} />
                  <div className="text-overlay">
                    <h1 className="text-overlay-purpose">Bank system</h1>
                    <h1 className="text-overlay-title">Baking Reimagined</h1>
                    <p className="text-overlay-description">
                      Tool to organize your banking experience
                    </p>
                    <Link className="works-link">
                      <h2 className="text-overlay-link">View Project</h2>{" "}
                      <MdDoubleArrow />
                    </Link>
                  </div>
                </div>

                <div className="works-container">
                  <img className="works3" src={works4} />
                  <div className="text-overlay">
                    <h1 className="text-overlay-purpose">Books and Art</h1>
                    <h1 className="text-overlay-title">Tears of Soul</h1>
                    <p className="text-overlay-description">
                      Website for artist and bookworms
                    </p>
                    <Link className="works-link">
                      <h2 className="text-overlay-link">View Project</h2>{" "}
                      <MdDoubleArrow />
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className={
                  toggleState === 3 ? "content active-content" : "content"
                }
              >
                <div className="works-container">
                  <img className="works3" src={works3} />
                  <div className="text-overlay">
                    <h1 className="text-overlay-purpose">Nutrition App</h1>
                    <h1 className="text-overlay-title">Nutrifit</h1>
                    <p className="text-overlay-description">
                      App to help your body be on shape
                    </p>
                    <Link className="works-link">
                      <h2 className="text-overlay-link">View Project</h2>{" "}
                      <MdDoubleArrow />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/*Works Div-3*/}
{/*Services-div-5*/}
<section>
        <div className="services-div-5">
          <div className="services-div-5-div-1">
            <h1 className="sub-head">
              Your Journey to a<br />
              Seamless Online Presence
            </h1>
            <p>
              Experience a streamlined process from vision to reality; where
              <br />
              innovation meets functionality in crafting your unique digital
              footprint.
            </p>
          </div>
          <div className="services-div-5-div-2">
            <div className="step">
              <PiNumberSquareOneFill className="number" />
              <h2 className="step-head">Consult & Plan</h2>
              <p>
                Understand your vision and goals
                <br />
                Define objectives and timelines.
              </p>
            </div>
            <div className="step">
              <PiNumberSquareTwoFill className="number" />
              <h2 className="step-head">Design & Develop</h2>
              <p>
                Visualize layout and functionality.
                <br />
                Develop a visually appealing and <br />
                functional website.
              </p>
            </div>
            <div className="step">
              <PiNumberSquareThreeFill className="number" />
              <h2 className="step-head">Test & Launch</h2>
              <p>
                Ensure functionality and performance.
                <br />
                Gather feedback and make revisions.
                <br />
                Deploy the website with ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>
       {/* About 5 div*/}
     
       <div className="about-div-5">
          <div className="about-div-5-div-1">
            <h1 className="head">YOUR BEST DIGITAL AGENCY</h1>
            <h1 className="sub-head-view-portfolio">
              Empowering Your
              <br />
              Business, Unleashing
              <br />
              Digital Potential
            </h1>
            <Link className="portfolio-link">
              VIEW OUR PORTFOLIO
              <FaLongArrowAltRight />
            </Link>
          </div>
          <div className="about-div-5-div-2">
          <img className="viewport" src={viewport} />
          </div>
        </div>
      <ContactForm/>
      <Footer/>
      </div>
  )
}

export default Works