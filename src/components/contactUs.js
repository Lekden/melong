import './Home.css';
import './contactUs.css';
import { useNavigate } from 'react-router-dom';
import Banner from './Banner'


export default function ContactUs() {
    const navigate = useNavigate();


    return (

        <div>
            <Banner />
            <div className='contactUs'>
                <div>
                    <h1 className="heading1">Contact Us</h1>
                    <label>Your Name</label>
                    <input type="text" placeholder="Name" className="input-field" />
                    <label>Your Email</label>
                    <input type="email" placeholder="Email" className="input-field" />
                    <label>Your Phone Number</label>
                    <input type="text" placeholder="Subject" className="input-field" />
                    <label>Your Message</label>
                    <textarea placeholder="Message" className="input-field" rows="4"></textarea>
                </div>
                <div>
                    <p style={{ fontWeight: '600', fontSize: '1rem' }}>Contact Information</p>
                    <p>Phone: +975 12345678 || Email: abc@melong.bt</p>
                </div>
                <div className='button-contactUs'>
                    <button className="button" style={{ width: '150px' }} onClick={() => navigate('/')}>
                        Submit
                    </button>
                    <button className="button" style={{ width: '150px' }} onClick={() => navigate('/')}>
                        Back to Home
                    </button>
                </div>
            </div>

        </div>
    )

}