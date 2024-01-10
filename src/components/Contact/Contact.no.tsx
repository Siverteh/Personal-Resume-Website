import React, { useRef } from 'react';
import './Contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';

//Component to render the contact section of the website.
const ContactNo = () => {
    //Variable that holds the html for a google maps map.
    const mapEmbedHtml = {
        __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2094.024181217998!2d8.590663177219982!3d58.342393389625535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4647ee638f1d47c1%3A0x323c2de197273549!2sTorvet%203%2C%204876%20Grimstad!5e0!3m2!1sno!2sno!4v1703773670766!5m2!1sno!2sno" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    };

    const formRef = useRef<HTMLFormElement>(null);
    //Function to send an email to myself
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) return;

        emailjs.sendForm('service_w5bf53q', 'template_3gdkn9v', formRef.current, '8HYWrA78-vJPhbf3W')
            .then((result) => {
                console.log(result.text);
                alert("Meldingen ble sendt!");
                formRef.current?.reset();
            }, (error) => {
                console.log(error.text);
                alert("Det skjedde en feil, vennligst prøv igjen.");
            });
    };

    return (
        <div className="contact-section">
            <h2 className="section-title">Kontakt</h2>
            <p className="contact-intro">Har du spørsmål eller ønsker å ta kontakt, bruk skjemaet under. Jeg vil prøve å svare deg så snart som mulig.</p>
            <div className="contact-content">
                <div className="contact-info-card">
                    <div className="contact-info-item">
                        <FaMapMarkerAlt className="contact-icon" />
                        <div>
                            <strong>Sted:</strong>
                            <p>Torvet 3, 4876 Grimstad</p>
                        </div>
                    </div>
                    <div className="contact-info-item">
                        <FaEnvelope className="contact-icon" />
                        <div>
                            <strong>E-post:</strong>
                            <p>sivertespelandhusebo@gmail.com</p>
                        </div>
                    </div>
                    <div className="contact-info-item">
                        <FaPhone className="contact-icon" />
                        <div>
                            <strong>Ring:</strong>
                            <p>+47 468 552 44</p>
                        </div>
                    </div>
                    <div className="google-maps-embed" dangerouslySetInnerHTML={mapEmbedHtml} />
                </div>
                <div className="contact-form-card">
                    <form ref={formRef} onSubmit={sendEmail}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Ditt navn</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Din e-post</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Emne</label>
                            <input type="text" id="subject" name="subject" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Melding</label>
                            <textarea id="message" name="message" rows={5} required></textarea>
                        </div>
                        <div className="form-button">
                            <button type="submit">Send melding</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactNo;
