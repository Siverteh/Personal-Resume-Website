import React, {useRef} from 'react';
import './Contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
    const mapEmbedHtml = {
        __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2094.024181217998!2d8.590663177219982!3d58.342393389625535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4647ee638f1d47c1%3A0x323c2de197273549!2sTorvet%203%2C%204876%20Grimstad!5e0!3m2!1sno!2sno!4v1703773670766!5m2!1sno!2sno" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    };


    const formRef = useRef<HTMLFormElement>(null);
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) return;

        emailjs.sendForm('service_w5bf53q', 'template_3gdkn9v', formRef.current, '8HYWrA78-vJPhbf3W')
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
                formRef.current?.reset();
            }, (error) => {
                console.log(error.text);
                alert("Failed to send message, please try again.");
            });
    };

    return (
        <div className="contact-section">
            <h2 className="section-title">Contact</h2>
            <p className="contact-intro">If you have any questions or just want to get in touch, use the form below. I’ll try to get back to you as soon as possible.</p>
            <div className="contact-content">
                <div className="contact-info-card">
                    <div className="contact-info-item">
                        <FaMapMarkerAlt className="contact-icon" />
                        <div>
                            <strong>Location:</strong>
                            <p>Torvet 3, 4876 Grimstad</p>
                        </div>
                    </div>
                    <div className="contact-info-item">
                        <FaEnvelope className="contact-icon" />
                        <div>
                            <strong>Email:</strong>
                            <p>sivertespelandhusebo@gmail.com</p>
                        </div>
                    </div>
                    <div className="contact-info-item">
                        <FaPhone className="contact-icon" />
                        <div>
                            <strong>Call:</strong>
                            <p>+47 468 552 44</p>
                        </div>
                    </div>
                    <div className="google-maps-embed" dangerouslySetInnerHTML={mapEmbedHtml} />
                </div>
                <div className="contact-form-card">
                    <form ref={formRef} onSubmit={sendEmail}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows={5} required></textarea>
                        </div>
                        <div className="form-button">
                            <button type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
