import React, { useEffect, useLocation } from "react";
import "../css/home.css";
import home1 from "../images/home/home1.png";
import home2 from "../images/home/home2.png";
import beziercurve from "../images/home/bezier-curve.png";
import barcoderead from "../images/home/barcode-read.png";
import server from "../images/home/server.png";
import Media from "../images/home/Media.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import works1 from "../images/home/works1.png";
import works2 from "../images/home/works2.png";
import works3 from "../images/home/works3.png";
import works4 from "../images/home/works4.png";
import Testimonial1 from "../images/home/Testimonial1.png";
import KRIMCLogo from "../images/home/KRIMCLogo.png";
import Dots from "../images/home/Dots.png";
import quote from "../images/home/quote.png";
import { MdDoubleArrow } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import whitecircle from "../images/circles/whitecircle.png";
import purplecircle from "../images/circles/purplecircle.png";
import purplecirclering from "../images/circles/purplecirclering.png";

const Home = () => {
  {
    /*Div-5 functions*/
  }
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  /*Div-9 functions*/
  const [zoomedIndex, setZoomedIndex] = useState(0); // Initialize with 0

  const navigateBack = () => {
    setZoomedIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1)); // If at the beginning, go to the last one
  };

  const navigateForward = () => {
    setZoomedIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1)); // If at the end, go to the first one
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
    <div className="pages">
      <img className="whitecircle-right" src={whitecircle} />
      {/* Home 1 div*/}
      <section>
        <div className="home-div-1">
          <div className="home-div-1-div-1">
            <h1>
              Connecting <br /> business owners to
              <br />
              professional web
              <br />
              development help
            </h1>
          </div>
          <div className="home-div-1-div-2">
            <p className="below-p">
              Digital Agency offering unique solutions to
              <br />
              create digital presenece and increase your sales.
            </p>
          </div>
          <div className="home-div-1-div-3">
            <Link to="/contact">
              <button className="home-div-1-btn">Book a call</button>
            </Link>
          </div>
        </div>
        <img className="whitecircle-left" src={whitecircle} />
      </section>
      {/* Home 2 div*/}
      <section>
        <div className="home-div-2">
          <div className="home-div-2-div-1">
            <div>
              <h1 className="head">ABOUT</h1>
            </div>
            <div>
              {" "}
              <p className="sub-head">
                At DS Media,
                <br />
                we keep it easy
              </p>
            </div>
            <div>
              <p className="below-p">
                Tell us what you need and
                <br />
                we'll make it.
              </p>
            </div>
            <div>
              <Link to="/contact">
                <button className="home-div-2-btn">Book a call</button>
              </Link>
            </div>
          </div>

          <div className="home-div-2-div-2">
            <img className="home1" src={home1} />
          </div>

          <div className="home-div-2-div-3">
            <div>
              <h1>Update and Mordenise</h1>
              <p>
                We specialise in updating
                <br />
                and modernising websites
              </p>
            </div>

            <div>
              <h1>Seamless Collaboration</h1>
              <p>
                We'll keep you in the loop,
                <br />
                providing a clear format of
                <br />
                what we need from you
              </p>
            </div>

            <div>
              <h1>Services that speak volumes</h1>
              <p>
                We specialise in updating
                <br />
                and modernising websites
              </p>
            </div>
          </div>
        </div>
        <img className="purplecircle-right" src={purplecircle} />
      </section>
      {/* Home 3 div*/}
      <section>
        <div className="home-div-3">
          <div className="home-div-3-div-1">
            <img className="home2" src={home2} />
          </div>
          <div className="home-div-3-div-2">
            <h1 className="head">MISSION</h1>

            <p>
              Our mission is to build trusted
              <br />
              relationship and provide
              <br />
              exceptional value by
              <br />
              matching clients with expert
              <br />
              web developers that deliver
              <br />
              tailored solutions and drive
              <br />
              business growth
            </p>
          </div>
        </div>
        <img className="purplecircle-left" src={purplecircle} />
      </section>
      {/* Home 4 div*/}
      <section>
        <div className="home-div-4">
          <div className="home-div-4-div-1">
            <h1 className="sub-head">Our Services</h1>
            <p className="below-p">
              Elevate your online presence with tranformative <br />
              solutions for seamless digital experiences.
            </p>
          </div>
          <div className="home-div-4-div-2">
            <span>
              <img className="bezier-curve" src={beziercurve} />
              <h1>Responsive Web Design</h1>
              <p>
                Craft websites ensuring optimal
                <br />
                user experience across all devices.
              </p>
            </span>

            <span>
              <img className="barcode-read" src={barcoderead} />
              <h1>Web Maintenance and Support</h1>
              <p>
                Provide ongoing maintenance,
                <br />
                updates, and technical support for
                <br />
                sustained website performance
              </p>
            </span>

            <span>
              <img className="server" src={server} />
              <h1>Custom Web App Development</h1>
              <p>
                Develop bespoke web applications
                <br />
                tailored to uniqye business
                <br />
                requirements.
              </p>
            </span>
          </div>
        </div>
      </section>
      {/* Home 5 div*/}
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

      {/* Home 6 div*/}
      <section>
        <div className="home-div-6">
          <div className="home-div-6-div-1">
            <h1 className="sub-head">Why DS Media?</h1>
            <p>
              At DS Media, our passion for cutting-edge technology and
              exceptional design fuels our commitment to web and mobile app
              design. As a dedicated team, we thrive on challenges, consistently
              pushing boundaries. Trusted by leading global companies, we
              specialize in crafting digital brands, products, and experiences
              that authentically represent you — telling your unique story
              through innovative web design and development.
            </p>
          </div>
          <div className="home-div-6-div-2">
            <img className="Media" src={Media} />
          </div>
        </div>
      </section>
      {/* Home 7 div*/}
      <section>
        <img className="purplecircle-right" src={purplecircle} />
        <div className="home-div-7">
          <div className="home-div-7-div-1">
            <h1 className="sub-head">Price is what you Pay</h1>
            <h1 className="sub-head">value is what you Get</h1>
            <p>
              We offer three customizable packages designed to meet a variety of
              needs
            </p>
            <Link to="/pricing">
              <button className="pricing-btn" type="submit">
                Learn more
              </button>
            </Link>
          </div>
          <div className="home-div-7-articles">
            <article className="home-div-7-subdivs">
              <div className="article-head-2">
                <h1 className="article-head">Personal</h1>
              </div>
              <div className="article-des">
                <p>
                  Perfect for small business looking
                  <br />
                  to establish a solid online presence.
                </p>
              </div>
              <ul className="articles-ul">
                <li>Tailored for small businesses</li>
                <li>Essential features</li>
                <li>Cost-effective</li>
                <li>Quick turnaround</li>
                <li>Responsive design</li>
                <li>Professional support</li>
              </ul>
              <div className="pricing-btn-div">
                <Link to="/pricing">
                  <button className="get-started-btn">Get Started</button>
                </Link>
              </div>
            </article>

            <article className="home-div-7-subdivs-mid">
              <div className="article-head-2">
                <h1 className="article-head">Professional</h1>
              </div>
              <div className="article-des">
                <p>
                  Most popular choice for business
                  <br />
                  growth and increased visibility.
                </p>
              </div>
              <ul className="articles-ul">
                <li>Enchanced features</li>
                <li>Customizable design</li>
                <li>Advanced functionalities</li>
                <li>Dedicated support</li>
                <li>Scalable solution</li>
                <li>Increased visibility</li>
              </ul>
              <div className="pricing-btn-div">
                <Link to="/pricing">
                  <button className="get-started-btn-mid">Get Started</button>
                </Link>
              </div>
            </article>

            <article className="home-div-7-subdivs">
              <div className="article-head-2">
                <h1 className="article-head">Enterprise</h1>
              </div>
              <div className="article-des">
                <p>
                  For larger organizations seeking
                  <br />
                  comprehensive digital solutions.
                </p>
              </div>
              <ul className="articles-ul">
                <li>Comprehensive solutions</li>
                <li>Advanced security</li>
                <li>Robust Infrastructure</li>
                <li>Integration capabilities</li>
                <li>Dedicated project management</li>
                <li>Enterprise level support</li>
              </ul>
              <div className="pricing-btn-div">
                <Link to="/pricing">
                  <button className="get-started-btn">Get Started</button>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

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
      <img className="whitecircle-left" src={whitecircle} />
      {/* Home 9 div*/}
      <section>
        <div className="home-div-9">
          <div className="home-div-9-div-1">
            <h1 className="sub-head">Our Clients</h1>
            <p>
              Small or big, weve been fortunate to collaborate with clients whoe
              believe that user experience is the key to generate engagement,
              growth and long-term awesomeness.
            </p>
          </div>
          <div className="home-div-9-div-2">
            <div className="arrows">
              <IoIosArrowBack className="back-arrow" onClick={navigateBack} />
              <IoIosArrowForward
                className="forward-arrow"
                onClick={navigateForward}
              />
            </div>
            <div className="clients-logo">
              <div
                className={`client-logo ${zoomedIndex === 0 ? "zoomed" : ""}`}
              >
                <img className="logos" src={KRIMCLogo} />
                <p>
                  "We fund in DS Media a willingness and interest ti create
                  trruly tailored solutions"
                </p>
              </div>
              <div
                className={`client-logo ${zoomedIndex === 1 ? "zoomed" : ""}`}
              >
                <h1>Be the next</h1>
                <p>Message and start to grow</p>
              </div>
              <div
                className={`client-logo ${zoomedIndex === 2 ? "zoomed" : ""}`}
              >
                <h1>Be the next</h1>
                <p>Message and start to grow</p>
              </div>
              <div
                className={`client-logo ${zoomedIndex === 3 ? "zoomed" : ""}`}
              >
                <h1>Be the next</h1>
                <p>Message and start to grow</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
