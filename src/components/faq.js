import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Banner from "./Banner";
import logo from "./images/logomelongwhite.png";


export default function Faq() {
    const navigate = useNavigate();
    const location = useLocation();
    const [openIndex, setOpenIndex] = useState(null); // track which FAQ is open

    const faqItems = [
        {
            question: "What is the best time to visit Bhutan?",
            answer: `The best time to visit Bhutan is during the spring (March to May) and autumn (September to November) seasons when the weather is pleasant and the landscapes are stunning.
      But other seasons have their own charm too. Winter (December to February) is cold but offers clear skies and beautiful views of the Himalayas, while summer (June to August) is the monsoon season, which can be wet but also lush and green.`,
        },
        {
            question: "Do I need a visa to visit Bhutan?",
            answer: "Yes, all foreign visitors to Bhutan require a visa. You can apply for a visa through a licensed travel agency in Bhutan.",
        },
        {
            question: "What currency is used in Bhutan?",
            answer: "The currency used in Bhutan is the Ngultrum (BTN), which is pegged to the Indian Rupee (INR). USD, AUD, and most major currencies are accepted for exchange in Bhutanese banks.",
        },
        {
            question: "Is it safe to travel in Bhutan?",
            answer: "Yes, Bhutan is considered one of the safest countries to travel to. The crime rate is low, and the locals are friendly and welcoming.",
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            {/* ================= Banner ================= */}
            <Banner />

            {/* ================= FAQ ================= */}
            <div className="container py-5">
                <h2 className="text-center mb-4">Frequently Asked Questions</h2>

                <div className="faq-list">
                    {faqItems.map((item, index) => (
                        <div key={index} className="faq-item" style={{ marginBottom: "1rem", border: "1px solid #ccc", borderRadius: "5px" }}>
                            <button
                                onClick={() => toggleFAQ(index)}
                                style={{
                                    width: "100%",
                                    padding: "1rem",
                                    background: openIndex === index ? "#2c3853ff" : "#f7f7f7",
                                    color: openIndex === index ? "#fff" : "#000",
                                    border: "none",
                                    textAlign: "left",
                                    cursor: "pointer",
                                    fontWeight: "600",
                                    borderRadius: "5px 5px 0 0"
                                }}
                            >
                                {item.question}
                            </button>
                            {openIndex === index && (
                                <div style={{ padding: "1rem", background: "#fff", borderTop: "1px solid #ccc" }}>
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="text-center mt-4">
                    <button className="btn btn-secondary" onClick={() => navigate("/")}>
                        Back to Home
                    </button>
                </div>
            </div>

            <Footer />
        </div >
    );
}
