import React, { useState, useRef } from 'react';
import "./Contact.css";
// import { motion } from 'framer-motion';
import Reveal from 'react-reveal/Reveal';
import Cube from '../canvas/Cube.js';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);

    const serviceID = "service_mszt83z";
    const templateID = "template_q9x6wc4";
    const publicKey = "V27SzHtkA2dbvKFmV";

    const templateParams = {
        from_name: form.name,
        to_name: "Flame",
        from_email: form.email,
        to_email: "quangthan06@gmail.com",
        message: form.message
    };

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(serviceID, templateID, templateParams, publicKey)
        .then(() => {
            setLoading(false);
            alert("Your message has been sent successfully.");
            setForm({
                name: "",
                email: "",
                message: ""
            });
        },
        (error) => {
            console.error(error);
            setLoading(false);
            alert("Message delivery failed.");
        }
        );
    }

    return (
        <section className="contact" id="contact">
            <span className="line">&nbsp;</span>
            <div className="contact-container">
                <Reveal effect="contact-fade-in-right" duration={1500}>
                <div className="contact-content">
                    <div className="contact-content-icons">
                        <a href="https://github.com/RedEyeSH">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://www.linkedin.com/in/than-ngoc-quang-8306092a2/">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://www.instagram.com/tnqeditor/">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                    <h1>Contact</h1>
                    <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
                        <label>
                            <p>Your Name</p>
                            <input 
                                type="text" 
                                name="name" 
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Enter Your Name" 
                                required 
                            />
                        </label>
                        <label>
                            <p>Your Email</p>
                            <input 
                                type="email" 
                                name="email" 
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Enter Your Email" 
                                required 
                            />
                        </label>
                        <label>
                            <p>Your Message</p>
                            <textarea 
                                name="message" 
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Enter Your Message" 
                                rows={6} 
                                required 
                            />
                        </label>
                        <button type="submit">{loading ? "Sending..." : "Submit"}</button>
                    </form>
                </div>
                </Reveal>
                <Reveal effect="contact-fade-in-left" duration={1500}>
                    <div className="contact-box">
                        <Cube />
                    </div>
                </Reveal>
            </div>
        </section>
  )
}

export default Contact;
