import React from "react";
import "../css/contactform.css";
import Bitmap from "../images/home/Bitmap.png";
import { useState } from "react";

const ContactForm = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section>
      <div className="contactform-div">
        <div className="contactform-div-1">
          <img className="Bitmap" src={Bitmap} />
        </div>
        <div className="contactform-div-2">
          <div className="contactform-div-2-div-1">
            <h1 className="sub-head">Get In Touch With Us</h1>
            <p>
              Ready to elevate your business with a powerful digital makeover?
            </p>
          </div>
          <div className="contactform-div-2-div-2">
            <div className="contactform-div-2-div-2-upper">
              <div
                onClick={() => toggleTab(1)}
                className={
                  toggleState === 1
                    ? "contactform-div-2-div-2-tabs active-contactform-div-2-div-2-tabs"
                    : "contactform-div-2-div-2-tabs"
                }
              >
                Design
              </div>
              <div
                onClick={() => toggleTab(2)}
                className={
                  toggleState === 2
                    ? "contactform-div-2-div-2-tabs active-contactform-div-2-div-2-tabs"
                    : "contactform-div-2-div-2-tabs"
                }
              >
                Development
              </div>
              <div
                onClick={() => toggleTab(3)}
                className={
                  toggleState === 3
                    ? "contactform-div-2-div-2-tabs active-contactform-div-2-div-2-tabs"
                    : "contactform-div-2-div-2-tabs"
                }
              >
                Marketing
              </div>
            </div>

            <div
              className={
                toggleState === 1 ? "content active-content" : "content"
              }
            >
              <form>
                <div className="contact-names">
                  <input className="contactform-input" type="text" name="name"  placeholder="Enter your name" />
                  <input className="contactform-input" type="email" name="email" required  placeholder="Enter your email" />
                </div>
                <div className="contact-message">
                  <textarea name="message" placeholder="Write your message about Design" />
                </div>
                <div className="form-btn-div">
                  <button className="form-btn" type="submit">
                    Get Started
                  </button>
                </div>
              </form>
            </div>

            <div
              className={
                toggleState === 2 ? "content active-content" : "content"
              }
            >
              <form>
                <div className="contact-names">
                  <input className="contactform-input" type="text" name="name" placeholder="Enter your name" />
                  <input className="contactform-input" type="email" name="email" required placeholder="Enter your email" />
                </div>
                <div className="contact-message">
                  <textarea name="message" placeholder="Write your message about Development" />
                </div>
                <div className="form-btn-div">
                  <button className="form-btn" type="submit">
                    Get Started
                  </button>
                </div>
              </form>
            </div>

            <div
              className={
                toggleState === 3 ? "content active-content" : "content"
              }
            >
              <form>
                <div className="contact-names">
                  <input className="contactform-input" type="text" name="name" placeholder="Enter your name" />
                  <input className="contactform-input" type="email" name="email" required placeholder="Enter your email" />
                </div>
                <div className="contact-message">
                  <textarea name="message" placeholder="Write your message about Marketing" />
                </div>
                <div className="form-btn-div">
                  <button className="form-btn" type="submit">
                    Get Started
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
