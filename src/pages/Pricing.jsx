import React,{useEffect} from "react";
import "../css/pricing.css";
import { Link } from "react-router-dom";
import { PiNumberSquareOneFill } from "react-icons/pi";
import { PiNumberSquareTwoFill } from "react-icons/pi";
import { PiNumberSquareThreeFill } from "react-icons/pi";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import whitecircle from "../images/circles/whitecircle.png";

const Pricing = () => {

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
      {/*Pricing Div 1*/}
      <section>
        <div className="pricing-div-1">
          <h1 className="head">PRICING</h1>
          <h1 className="sub-head">
            Flexible Solutions
            <br />
            Tailored to Your Needs
          </h1>
          <p>
            Choosing the right web design and development services should be as
            unique as your project. We offer three customizable packages
            designed to meet a variety of needs. From essential features to
            advanced functionalities, each tier is crafted to ensure your
            project gets the attention and expertise it deserves.
          </p>
          <p>
            Let's discuss your requirements and create a personalized plan that
            aligns perfectly with your goals. Your project, your terms because
            great results shouldn't come with a one size fits all price tag.
          </p>
        </div>
      </section>

      {/* Home 7 div*/}
      <section>
        <div className="home-div-7">
          <div className="home-div-7-div-1">
            <h1 className="sub-head">Price is what you Pay</h1>
            <h1 className="sub-head">value is what you Get</h1>
            <p>
              We offer three customizable packages designed to meet a variety of
              needs
            </p>
            <Link to="/contact">
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
        <img className="whitecircle-left" src={whitecircle} />
      </section>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default Pricing;
