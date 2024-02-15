import React, { useEffect } from "react";
import "../css/about.css";
import about1 from "../images/about/about1.png";
import about2 from "../images/about/about2.png";
import about3 from "../images/about/about3.png";
import viewport from "../images/about/viewport.png";
import karl from "../images/about/karl.jpg";
import kyle from "../images/about/kyle.jpg";
import aldrei from "../images/about/aldrei.jpg";
import christina from "../images/about/christina.jpg";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import whitecircle from "../images/circles/whitecircle.png";
import purplecircle from "../images/circles/purplecircle.png"
import purplecirclering from "../images/circles/purplecirclering.png"

import { FaLongArrowAltRight } from "react-icons/fa";

const About = () => {
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
    
    <div className="pages">
      {/* About 1 div*/}
      <section>
        <div className="about-div">
          <div className="about-div-1">
            <h1 className="head">WHO WE ARE</h1>
            <div className="about-div-1-div-1">
              <div className="about-div-1-div-1-div-1">
                <div className="sub-head">Innovators in Action</div>
              </div>
              <div className="about-div-1-div-1-div-2">
                <p>
                  At DS Media, we are more than just a company; we are a
                  collective force of innovators committed to turning ideas into
                  impactful realities. Our team thrives on creativity,
                  collaboration, and a shared passion for crafting digital
                  solutions that leave a lasting impression.
                </p>
              </div>
            </div>
            <div className="about-div-1-div-2">
              <img className="about1" src={about1} />
            </div>
          </div>
        </div>
      </section>
      <img className="purplecircle-right" src={purplecircle} />
      {/* About 2 div*/}
      <section>
        <div className="about-div-2">
          <div className="about-div-2-div-1">
            {" "}
            <img className="about2" src={about2} />
          </div>
          <div className="about-div-2-div-2">
            <h1 className="head">WHAT WE DO</h1>
            <h1 className="sub-head">Mission Statement</h1>
            <p>
              Our mission is to build trusted relationships and provide
              exceptional value by matching clients with expert web developers
              that deliver tailored solutions and drive business growth
            </p>
          </div>
        </div>
      </section>
      {/* About 3 div*/}
      <section>
        <div className="about-div-3">
          <div className="about-div-3-div-1">
            <h1 className="sub-head">
              A Job Worth Doing is Worth Doing Together
            </h1>
          </div>
          <div className="about-div-3-div-2">
            <div className="people">
              <img className="karl" src={karl} />
              <h1>Karl Delo Santos</h1>
              <p>Founder</p>
            </div>
            <div className="people">
              <img className="kyle" src={kyle} />
              <h1>Kyle Corpuz</h1>
              <p>Developer</p>
            </div>
            <div className="people">
              <img className="aldrei" src={aldrei} />
              <h1>Aldrei Toress</h1>
              <p>UI UX Designer</p>
            </div>
            <div className="people">
              <img className="christina" src={christina} />
              <h1>Christina Mellizo</h1>
              <p>Social Media Manager</p>
            </div>
          </div>
        </div>
      </section>
      <img className="purplecirclering-left" src={purplecirclering} />
      {/* About 4 div*/}
      <section>
        <div className="about-div-4">
          <div className="about-div-4-div-1">
            <h1 className="sub-head">
              Building Website With
              <br />
              Purpose and Passion
            </h1>
            <p>
              We provide more than just services; we deliver tailored
              <br /> digital solutions designed to meet your unique needs.
            </p>
            <div className="about-div-4-div-1-div-1">
              <div>
                <h1 className="mini-head">Ideas that Provoke</h1>
                <p>
                  Transforming websites with
                  <br /> visionary concepts.
                </p>
              </div>
              <div>
                <h1 className="mini-head">Find your Brand's Voice</h1>
                <p>
                  Crafting websites that speak
                  <br />
                  volumes.
                </p>
              </div>
            </div>

            <button className="about-get-started-btn">Get Started</button>
          </div>
          <div className="about-div-4-div-2">
            <img className="about3" src={about3} />
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
  );
};

export default About;
