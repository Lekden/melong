import './Home.css';
import './contactUs.css';
import { useNavigate } from 'react-router-dom';
import Banner from './Banner';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ requestor: "", email: "", phone: "", message: "" });

    function handleSubmit(e) {
        e.preventDefault();

        const serviceID = 'service_p0lhjnd';
        const templateID = 'template_educw7f';
        const publicKey = 'cqPC4etpaYKKsgcJ-';
        const autoReplyTemplateID = 'template_vb1tetx';

        const templateParams = {
            requestor: formData.requestor,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
        };

        // First email to site owner
        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {

                console.log('SUCCESS!', response.status, response.text);
                alert("You email has been sent successfully.")

                // Now send auto-reply to user
                const autoReplyParams = {
                    requestor: formData.requestor,
                    email: formData.email
                };

                emailjs.send(serviceID, autoReplyTemplateID, autoReplyParams, publicKey)
                    .then((res) => {
                        console.log('Auto-reply sent:', res.text);
                        setFormData({ requestor: "", email: "", phone: "", message: "" });
                    })
                    .catch((err) => {
                        console.error('Auto-reply error:', err.text);
                    });

            })
            .catch((error) => {
                console.error('Main email error:', error.text);
            });

    }

    return (
        <div>
            <Banner />
            <div className='contactUs'>
                <form onSubmit={handleSubmit}>
                    <h1 className="heading1">Contact Us</h1>
                    <label>Your Name</label>
                    <input
                        type="text"
                        placeholder="Name"
                        className="input-field"
                        value={formData.requestor}
                        onChange={(e) => setFormData({ ...formData, requestor: e.target.value })}
                    />
                    <label>Your Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="input-field"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <label>Your Phone Number</label>
                    <input
                        type="text"
                        placeholder="Phone number"
                        className="input-field"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    <label>Your Message</label>
                    <textarea
                        placeholder="Message"
                        className="input-field"
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>

                    <div className='button-contactUs'>
                        <button type="submit" className="button" style={{ width: '150px' }}>
                            Submit
                        </button>
                        <button type="button" className="button" style={{ width: '150px' }} onClick={() => navigate('/')}>
                            Back to Home
                        </button>
                    </div>
                </form>

                <div>
                    <p style={{ fontWeight: '600', fontSize: '1rem' }}>Contact Information</p>
                    <p>Phone: +975 12345678 || Email: abc@melong.bt</p>
                </div>
            </div>
        </div>
    )
}
