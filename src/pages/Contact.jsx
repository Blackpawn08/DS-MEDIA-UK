import React, { useState, useRef,useEffect } from "react";
import "../css/contact.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import emailjs from "@emailjs/browser";
import { MdOutlineMail } from "react-icons/md";
import Footer from "../components/Footer";
import purplecirclering from "../images/circles/purplecirclering.png"

const Contact = () => {


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


  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    const checkboxes = document.querySelectorAll(".circle-checkbox:checked");
    const selectedCheckboxes = Array.from(checkboxes).map(
      (checkbox) => checkbox.value
    );

    // Include selected checkboxes in the email message
    const message = `Selected checkboxes: ${selectedCheckboxes.join(", ")}`;

    // Create the email template data
    const templateParams = {
      name: e.target.name.value,
      from_name: e.target.companyName.value,
      message: message, // Include selected checkboxes in the message
    };

    console.log("templateParams:", templateParams);

    emailjs
      .sendForm(
        "service_9e45c9g",
        "template_hyebnhl",
        form.current,
        "n3-IKG8F-2wAgNhXs"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
          window.alert("Response has been submitted.");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };




  
  return (
    <div className="pages">
      {/*Contact-div-1*/}
      <section>
      <img className="purplecirclering-right" src={purplecirclering} />
        <div className="contact-div-1">
          <div className="contact-div-1-div-1">
            <h1 className="sub-head">
              Tell us more about
              <br />
              your business
            </h1>
            <p>Fill out our form to book a schedule</p>
          </div>
          <div className="contact-div-1-div-2">
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="form-info"
                name="name"
              />
              <label>Company Name</label>
              <input
                type="text"
                placeholder="DS-MEDIA"
                className="form-info"
                name="companyName"
              />
              <label>Contact Number</label>
              <PhoneInput
                type="tel"
                placeholder="XX XXXX XXXX"
                className="form-info"
                country="us"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                name="contactNumber"
              />
              <label>Email Address</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="form-info"
                name="email"
                required
              />
              <label>Business Website (Optional)</label>
              <input
                type="url"
                placeholder="https://www.business.com"
                className="form-info"
                name="website"
                required={false}
              />

              <h2>I want to get more information on:</h2>
              <p>Select all that apply</p>
              <div className="form-checkbox-part">
                <div>
                  <input
                    type="checkbox"
                    name="option"
                    id="website-design"
                    value="Website Design"
                  />
                  <label htmlFor="website-design">Website Design</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="option"
                    id="mobile-web-design"
                    value="Mobile Web Design"
                  />
                  <label htmlFor="mobile-web-design">Mobile Web Design</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="option"
                    id="services"
                    value="Services"
                  />
                  <label htmlFor="services">Services</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="option"
                    id="prices"
                    value="Prices"
                  />
                  <label htmlFor="prices">Prices</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="option"
                    id="others"
                    value="Others"
                  />
                  <label htmlFor="others">Others</label>
                </div>
                <textarea
                  className="textarea-checkbox-part"
                  placeholder="Describe your needs"
                />
              </div>
              <input type="submit" value="Send" className="form-button" />
            </form>
          </div>
        </div>
      </section>
      {/*Contact div 2*/}
      <section>
        <div className="contact-div-2">
          <div className="contact-divs">
            <div>
              <h1>
                Email <span style={{ color: "#8b23f4" }}>Us</span>
              </h1>
              <p>Tell us about your next project</p>
              <a
                href="mailto:help@ds-media.co.uk"
                className="contact-divs-link"
              >
                <MdOutlineMail />
                help@ds-media.co.uk
              </a>
            </div>

            <div>
              <h1>
                Call <span style={{ color: "#8b23f4" }}>Us</span>
              </h1>
              <p>Direct contact us</p>
              <a
                href="tel:+44 7830 010463"
                className="contact-divs-link"
              >
                <MdOutlineMail />
                +44 7830 010463
              </a>
            </div>

            <div>
              <h1>
                Visit <span style={{ color: "#8b23f4" }}>Us</span>
              </h1>
              <p>
                944 Chardonnay Drive,
                <br />
                Tukwila. Washington United
                <br />
                States
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Contact;
