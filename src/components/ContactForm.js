import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../css/contact.scss";

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
          <div>Hi, I'm Jay.</div>
          <div>Thanks for taking an interest in me.</div>
          <div>If you want to get in touch, </div>
          <div>just leave me a message :)</div>
        </div>

        <div className="w1400">
        <form ref={form} onSubmit={sendEmail}>
          <div className="contact_info">
            <div className="contact_form_name">
              <label>Name</label>
              <input type="text" name="user_name" />
            </div>

            <div className="contact_form_mail">
              <label>Email</label>
              <input type="email" name="user_email" />
            </div>
          </div>

          <div className="contact_form_message">
            <label>Message</label>
            <textarea name="message" />
          </div>
          <input
            className="contact_form_send"
            type="submit"
            value="Send a Message"
          />
        </form>
      </div></div>
    </div>
  );
};

export default ContactForm;
