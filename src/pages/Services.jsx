import React, { useEffect } from "react";
import "../css/services.css";
import services1 from "../images/services/services1.png";
import services2 from "../images/services/services2.png";
import services3 from "../images/services/services3.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import works1 from "../images/home/works1.png";
import works2 from "../images/home/works2.png";
import works3 from "../images/home/works3.png";
import works4 from "../images/home/works4.png";
import { MdDoubleArrow } from "react-icons/md";
import { PiNumberSquareOneFill } from "react-icons/pi";
import { PiNumberSquareTwoFill } from "react-icons/pi";
import { PiNumberSquareThreeFill } from "react-icons/pi";
import Testimonial1 from "../images/home/Testimonial1.png";
import Dots from "../images/home/Dots.png";
import quote from "../images/home/quote.png";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import whitecircle from "../images/circles/whitecircle.png";
import purplecircle from "../images/circles/purplecircle.png";
import purplecirclering from "../images/circles/purplecirclering.png";

const Services = () => {
  {
    /*Div-4 functions*/
  }
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  {
    /*Scroll-reload on top logic*/
  }
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
      {/* Services 1 div*/}
      <section>
        <div className="services-div-1">
          <div className="services-div-1-div-1">
            <h1 className="head">OUR SERVICES</h1>
            <h1 className="sub-head">
              Turn digital dreams
              <br />
              into thriving realities
            </h1>
            <p>
              Our mission is simple: to build trusted relationships and provide
              <br />
              exceptional value. How do we do it? By connecting you with expert
              <br />
              web developers who deliver tailored solutions, driving
              <br />
              unparalleled business growth.
            </p>
          </div>
          <div className="services-div-1-div-2">
            <img className="services1" src={services1} />
          </div>
        </div>
      </section>
      {/* Services 2 div*/}
      <section>
        <div className="services-div-2">
          <div className="services-div-2-div-1">
            <img className="purplecirclering-left" src={purplecirclering} />
            <img className="services2" src={services2} />
          </div>
          <div className="services-div-2-div-2">
            <h1 className="head">SERVICES</h1>
            <h1 className="sub-head">
              Web Design &<br />
              Maintenance
            </h1>
            <p>
              Crafting stunning and functional websites is our specialty.We
              <br />
              design with purpose and ensure your site stays top-notch with our
              <br />
              ongoing maintenance services.
            </p>
            <Link to="/contact">
              <button className="services-btn">View our works</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services 3 div*/}
      <section>
        <div className="services-div-3">
          <div className="services-div-3-div-1">
            <img className="services3" src={services3} />
          </div>
          <div className="services-div-3-div-2">
            <h1 className="head">SERVICES</h1>
            <h1 className="sub-head">
              Mobile Web
              <br />
              Design
            </h1>
            <p>
              Optimizing your website for mobile is our focus. We create
              <br />
              responsive designs that look great and work seamlessly on various
              <br />
              devices, providing an excellent user experience anywhere, anytime.
              <br />
            </p>
            <Link to="/contact">
              <button className="services-btn">View our works</button>
            </Link>
          </div>
        </div>
      </section>
      <img className="purplecircle-right" src={purplecircle} />
      {/* Services 4 div*/}
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
      <img className="whitecircle-left" src={whitecircle} />
      {/* Home 8 div*/}
      <section>
        <div className="home-div-8">
          <div className="home-div-8-div-1">
            <img className="quote" src={quote} />
            <h1 className="sub-head">
              "My website went from idea
              <br />
              to reality effortlessly.They
              <br />
              delivered a sleek design that
              <br />
              truly captures my brand
              <br />
              essence. Exeptional work!"
            </h1>
            <p className="home-div-8-div-1-name">John Tabora</p>
            <p>Business Owner</p>
            <img className="Dots" src={Dots} />
          </div>
          <div className="home-div-8-div-2">
            <img className="Testimonial1" src={Testimonial1} />
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default Services;
