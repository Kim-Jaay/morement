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
        <div className="contact_form_introduce">
          <div data-aos="fade-up">Hi, I'm Jay 😃</div>
          <div data-aos="fade-up">Thanks for taking an interest in me.</div>
          <div data-aos="fade-up">If you want to get in touch, </div>
          <div data-aos="fade-up">just leave me a message :)</div>
          <div className="sssgap"></div>
          <div data-aos="fade-up">
            <i className="xi-arrow-down"></i>
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
