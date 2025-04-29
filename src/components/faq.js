
import { useNavigate } from "react-router-dom";
import './faq.css';
import Banner from './Banner';



export default function Faq() {
    const navigate = useNavigate();

    return (
        <div> <Banner />
            <div className="faq">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-item">
                    <h3>What is the best time to visit Bhutan?</h3>
                    <div >The best time to visit Bhutan is during the spring
                        (March to May) and autumn (September to November) seasons when the weather is pleasant and the landscapes are stunning.</div>
                </div>
                <div className="faq-item">
                    <h3>Do I need a visa to visit Bhutan?</h3>
                    <div >Yes, all foreign visitors to Bhutan require a visa.
                        You can apply for a visa through a licensed travel agency in Bhutan.</div>
                </div>
                <div className="faq-item">
                    <h3>What currency is used in Bhutan?</h3>
                    <div > The currency used in Bhutan is the Ngultrum (BTN), which is pegged to
                        the Indian Rupee (INR). <br /> USD, AUD and most major currencies are accepted for exdchange in Bhutanese bannks.</div>
                </div>
                <div className="faq-item">
                    <h3>Is it safe to travel in Bhutan?</h3>
                    <div >Yes, Bhutan is considered one of the safest countries to travel to. The crime rate is low, and the locals are friendly and welcoming.</div>
                </div>
                <button className="button" onClick={() => navigate('/')} style={{ marginTop: '8px' }}>
                    Back to Home
                </button>
            </div >
        </div >

    );
}