
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Footer from './Footer';
import logo from "./images/logomelongwhite.png";
import Banner from "./Banner";

export default function ContactUs() {
    const navigate = useNavigate();
    const location = useLocation();
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

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                alert("Your email has been sent successfully.");

                const autoReplyParams = {
                    requestor: formData.requestor,
                    email: formData.email,
                };

                emailjs.send(serviceID, autoReplyTemplateID, autoReplyParams, publicKey)
                    .then((res) => {
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
        <div className="bg-light">

            <Banner />
            {/* ===================== MAIN CONTENT ===================== */}
            <div className="container py-3">

                <h1 className="text-center mb-4">Contact Us</h1>

                <p className="text-center">
                    Have a quick question? Feel free to use this form. <br />
                    For a trip estimate, visit the{" "}
                    <Link to="/tripplanner" className="text-primary fw-bold">
                        Trip Planner
                    </Link>.
                </p>

                {/* Form Row */}
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">

                        <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-white">

                            <div className="mb-3">
                                <label className="form-label">Your Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={formData.requestor}
                                    onChange={(e) => setFormData({ ...formData, requestor: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Your Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Your Phone Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Your Message</label>
                                <textarea
                                    className="form-control"
                                    rows="4"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                ></textarea>
                            </div>

                            <div className="d-flex justify-content-between mt-4">
                                <button type="submit" className="btn btn-primary px-4">Submit</button>
                                <button type="button" className="btn btn-secondary px-4" onClick={() => navigate('/')}>
                                    Back to Home
                                </button>
                            </div>

                        </form>

                        <div className="text-center mt-4">
                            <p className="fw-semibold mb-1">Contact Information</p>
                            <p>Phone: +975 12345678 | Email: abc@melong.bt</p>
                        </div>

                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
}
