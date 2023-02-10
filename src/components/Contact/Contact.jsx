import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md"
import { BsInstagram } from "react-icons/bs"
import { BsWhatsapp } from "react-icons/bs"
import { useRef } from 'react';
import emailjs from "emailjs-com"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_3rgt49c', 'template_iwff5ak', form.current, 'NB-myl-XpZXt_Okhl')

    e.target.reset();
  }

  return <section id="contact">

    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineMail className="contact__option-icon" />
          <h4>Email</h4>
          <h5>davidfranjul09@gmail.com</h5>
          <a href="mailto:davidfranjul09@gmail.com"> Send a message</a>

        </article>
        <article className="contact__option">
          <BsInstagram className="contact__option-icon" />
          <h4>Instagram</h4>
          <h5>Davidfranjul</h5>
          <a href="https://www.instagram.com/direct/new/" target="_blank" rel="noreferrer"> Send a message</a>

        </article>
        <article className="contact__option">
          <BsWhatsapp className="contact__option-icon" />
          <h4>Whatsapp</h4>
          <h5>809-805-7049</h5>
          <a href="https://api.whatsapp.com/send?phone=8098057049" target="_blank" rel="noreferrer"> Send a message</a>

        </article>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="7" placeholder="Your message" required></textarea>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>

    </div>

  </section>;
};

export default Contact;
