import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../css/contact.scss";
import Footer from "./Footer";

const ContactForm = () => {
  const form = React.useRef(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8jkuc5d",
        "template_8n96xxw",
        e.currentTarget,
        "Iv2ckvxFSHlsPdDH9"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );

    alert("메세지를 전송했습니다.");

    e.target.reset();
  };

  return (
    <div className="contact_form_all_wrap">
      <div className="wfull">
        <div className="contact_text_wrap">
          <div className="contact_form_introduce">
            <div data-aos="fade-up" data-aos-duration="300">
              Hi, I'm Jay 😃
            </div>
            <div data-aos="fade-up" data-aos-duration="600">
              Thanks for taking an interest in me.
            </div>
            <div data-aos="fade-up" data-aos-duration="900">
              If you want to get in touch,{" "}
            </div>
            <div data-aos="fade-up" data-aos-duration="1200">
              just leave me a message :)
            </div>
            <div className="sssgap"></div>
            <div data-aos="fade-up" data-aos-duration="1500">
              <i className="xi-arrow-down"></i>
            </div>
          </div>
          <div className="contact_form_desc" data-aos="fade-up" data-aos-duration="1500">
            <div>
              This is a space that captures my gaze and emotion toward the world.
              Each work is a story that originated from my heart, and I want to share the beauty
              and emotion expressed through design with you.
              Each of the works that was born at my fingertips contains my dreams and passion.
            </div>
            <div className="ssssgap"></div>
            <div>
              I hope that a small resonance will resonate in your mind through
              the designs that capture the timelessness and the preciousness of
              the moment. I look forward to discovering new inspiration and
              sympathizing with you on this journey.
            </div>
            <div className="ssssgap"></div>

            <div>
              It's an honor to share your precious time with you. I hope my
              design brings a little joy and warmth. Thank you for visiting.
            </div>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="contact_info">
            <div className="contact_form_name" data-aos="fade-up">
              <label>Name</label>
              <input type="text" name="user_name" />
            </div>

            <div className="contact_form_mail" data-aos="fade-up">
              <label>Email</label>
              <input type="email" name="user_email" />
            </div>
          </div>

          <div className="contact_form_message" data-aos="fade-up">
            <label>Message</label>
            <textarea name="message" />
          </div>
          <input
            className="contact_form_send"
            type="submit"
            value="Send a Message"
            data-aos="fade-up"
          />
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default ContactForm;
