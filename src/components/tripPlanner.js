
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import countryList from 'react-select-country-list';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


import Footer from './Footer';
import Banner from './Banner';



export default function Tripplanner() {
    const location = useLocation();
    const navigate = useNavigate();
    const options = countryList().getData();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        requestor: "",
        email: "",
        phone: "",
        country: "",
        adults: "",
        children: "",
        startDate: null,
        endDate: null,
        message: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true);

        const serviceID = 'service_p0lhjnd';
        const templateID = 'template_educw7f';
        const publicKey = 'cqPC4etpaYKKsgcJ-';
        const autoReplyTemplateID = 'template_vb1tetx';

        const templateParams = {
            ...formData,
            startDate: formData.startDate ? formData.startDate.toLocaleDateString('en-GB') : '',
            endDate: formData.endDate ? formData.endDate.toLocaleDateString('en-GB') : ''
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then(() => {
                const autoReplyParams = {
                    requestor: formData.requestor,
                    email: formData.email
                };

                return emailjs.send(serviceID, autoReplyTemplateID, autoReplyParams, publicKey);
            })
            .then(() => {
                alert("Your trip enquiry has been sent successfully!");
                setFormData({
                    requestor: "",
                    email: "",
                    phone: "",
                    country: "",
                    adults: "",
                    children: "",
                    startDate: null,
                    endDate: null,
                    message: "",
                });
                setIsSubmitting(false);
            })
            .catch((err) => console.error(err));
    }

    return (
        <div className="bg-light">

            <Banner />

            {/* ===================== MAIN CONTENT ===================== */}
            <div className="container py-3">

                <p className="text-center mb-4">
                    Tell us what your dream trip looks like.
                    We’ll send back a personalised estimate and helpful info!
                </p>

                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">

                        {/* ===== FORM BOX ===== */}
                        <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-white">

                            {/* Your Details */}
                            <h5 className="text-primary mb-3"><strong>Your Details</strong></h5>

                            <div className="row g-3">
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Full Name"
                                        value={formData.requestor}
                                        onChange={(e) => setFormData({ ...formData, requestor: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="col-md-6">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Phone Number (optional)"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <select
                                        className="form-select"
                                        value={formData.country}
                                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                        required
                                    >
                                        <option value="">Select your country</option>
                                        {options.map((c, i) => (
                                            <option key={i} value={c.label}>{c.label}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Traveller Info */}
                            <h5 className="text-gray mt-4 mb-3"><strong>Traveller Information</strong></h5>

                            <div className="row g-3">
                                <div className="col-md-6">
                                    <select
                                        className="form-select"
                                        value={formData.adults}
                                        onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
                                        required
                                    >
                                        <option value="">Number of Adults</option>
                                        {Array.from({ length: 25 }, (_, i) => (
                                            <option key={i} value={i}>{i}</option>
                                        ))}
                                        <option value="25+">25+</option>
                                    </select>
                                </div>

                                <div className="col-md-6">
                                    <select
                                        className="form-select"
                                        value={formData.children}
                                        onChange={(e) => setFormData({ ...formData, children: e.target.value })}
                                        required
                                    >
                                        <option value="">Number of Children</option>
                                        {Array.from({ length: 25 }, (_, i) => (
                                            <option key={i} value={i}>{i}</option>
                                        ))}
                                        <option value="25+">25+</option>
                                    </select>
                                </div>
                            </div>

                            {/* Dates */}
                            <h5 className="text-gray mt-4 mb-3"><strong>Travel Dates</strong></h5>

                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label">Estimated Start Date</label>
                                    <DatePicker
                                        className="form-control"
                                        selected={formData.startDate}
                                        onChange={(date) => setFormData({ ...formData, startDate: date })}
                                        dateFormat="dd/MM/yyyy"
                                        placeholderText="DD/MM/YYYY"
                                        required
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Estimated End Date</label>
                                    <DatePicker
                                        className="form-control"
                                        selected={formData.endDate}
                                        onChange={(date) => setFormData({ ...formData, endDate: date })}
                                        dateFormat="dd/MM/yyyy"
                                        placeholderText="DD/MM/YYYY"
                                        minDate={formData.startDate || new Date()}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Additional Info */}
                            <h5 className="text-gray mt-4 mb-2"><strong>Additional Information</strong></h5>

                            <textarea
                                className="form-control"
                                rows="4"
                                placeholder="Describe your ideal trip, preferences, special requests..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                            ></textarea>

                            {/* Buttons */}
                            <div className="d-flex justify-content-between mt-4">
                                <button type="submit" disabled={isSubmitting} className="btn btn-primary px-4">
                                    {isSubmitting ? "Submitting..." : "Submit Form"}
                                </button>

                                <button type="button" className="btn btn-secondary px-4" onClick={() => navigate('/')}>
                                    Back to Home
                                </button>
                            </div>
                        </form>

                        {/* Contact Info */}
                        <div className="text-center mt-4">
                            <p className="fw-semibold mb-1">Need help?</p>
                            <p>Phone: +975 12345678 | Email: abc@melong.bt</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===================== FOOTER ===================== */}
            <Footer />
        </div>
    );
}
