import './Home.css';
import './contactUs.css';
import './tripPlanner.css';
import { useNavigate, Link } from 'react-router-dom';
import Banner from './Banner';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import countryList from 'react-select-country-list';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Tripplanner() {
    const navigate = useNavigate();
    const options = countryList().getData();
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        requestor: "",
        email: "",
        phone: "",
        country: "",
        adults: "",
        children: "",
        startDate: "",
        endDate: "",
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
            requestor: formData.requestor,
            email: formData.email,
            phone: formData.phone,
            country: formData.country,
            adults: formData.adults,
            children: formData.children,
            startDate: formData.startDate ? formData.startDate.toLocaleDateString('en-GB') : '',
            endDate: formData.endDate ? formData.endDate.toLocaleDateString('en-GB') : '',
            message: formData.message,

        };

        // Send main email to site
        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert("Your email has been sent successfully.");

                const autoReplyParams = {
                    requestor: formData.requestor,
                    email: formData.email,
                };

                // Send auto-reply to user
                emailjs.send(serviceID, autoReplyTemplateID, autoReplyParams, publicKey)
                    .then((res) => {
                        console.log('Auto-reply sent:', res.text);
                        setFormData({
                            requestor: "",
                            email: "",
                            phone: "",
                            country: "",
                            adults: "",
                            children: "",
                            startDate: "",
                            endDate: "",
                            message: "",
                        });
                        setIsSubmitting(false)
                    })
                    .catch((err) => {
                        console.error('Auto-reply error:', err.text);
                    });

            })
            .catch((error) => {
                console.error('Main email error:', error.text);
            });
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    };

    return (
        <div>
            <Banner />
            <div className='tripplanner'>
                <form onSubmit={handleSubmit}>
                    <h1 className="heading1">Plan your Trip</h1>
                    <div>
                        Let us know what your trip looks like by filling out the form below. We’ll send over a rough estimate and some handy info to help you get ready! <br />

                    </div>

                    <label style={{ marginTop: '12px', color: '#004CFF' }}><strong>Your Details:</strong>
                        <div className='details-input-wrapper'>
                            <input
                                type="text"
                                placeholder="Name"
                                className="input-field"
                                value={formData.requestor}
                                onChange={(e) => setFormData({ ...formData, requestor: e.target.value })}
                                onKeyDown={handleKeyDown}
                                required
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                className="input-field"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Phone number (optional)"
                                className="input-field"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}

                            />
                            <select
                                className="input-field"
                                value={formData.country}
                                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            >
                                <option value="">select your country </option>
                                {options.map((option, index) => (
                                    <option key={index} value={option.label}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>

                        </div>
                    </label>
                    <label className='travellers' style={{ marginTop: '10px', color: '#004CFF' }}> <strong>Traveller information:</strong>
                        <div className="traveller-input-wrapper">

                            <select
                                type="text"
                                placeholder="Number of Adults"
                                className="input-field"
                                value={formData.adults}
                                onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
                                required
                            >
                                <option value="">Number of Adults</option>
                                {Array.from({ length: 26 }, (_, i) => (
                                    <option key={i + 0} value={i + 0}>
                                        {i + 0}
                                    </option>
                                ))}
                                <option value="25+">25+</option>
                            </select>


                            <select
                                type="text"
                                placeholder="Number of Children"
                                className="input-field"
                                value={formData.children}
                                onChange={(e) => setFormData({ ...formData, children: e.target.value })}
                                required
                            >
                                <option value="">Number of Children</option>
                                {Array.from({ length: 26 }, (_, i) => (
                                    <option key={i + 0} value={i + 0}>
                                        {i + 0}
                                    </option>

                                ))}
                                <option value="25+">25+</option>
                            </select>
                        </div>
                    </label>
                    <label className='travel-date' style={{ marginTop: '10px', color: '#004CFF' }}>
                        <strong>Travel Date:</strong>
                        <div className="date-input-wrapper">
                            <label style={{ color: 'black' }}>Estimated start date:
                                <DatePicker
                                    className="input-field"
                                    selected={formData.startDate}
                                    onChange={(date) => setFormData({ ...formData, startDate: date })}
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="DD/MM/YYYY"
                                    required
                                />
                            </label>

                            <label style={{ color: 'black' }}>Estimated end date:
                                <DatePicker
                                    className="input-field"
                                    selected={formData.endDate}
                                    onChange={(date) => setFormData({ ...formData, endDate: date })}
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="DD/MM/YYYY"
                                    minDate={formData.startDate || new Date()}  // prevent end date before start
                                    required
                                />
                            </label>

                        </div>
                    </label>


                    <label style={{ marginTop: '10px', color: '#004CFF' }}><strong>Additional Information:</strong></label>
                    <textarea
                        placeholder="Message"
                        className="input-field"
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                    ></textarea>

                    <div className='button-contactUs'>
                        <button type="submit" disabled={isSubmitting} className="button" style={{ width: '150px' }}>
                            {isSubmitting ? 'Submitting...' : 'Submit Form'}
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
    );
}
