import { Link, useLocation } from "react-router-dom";
import logo from "./images/logomelong.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./banner.css";

export default function Banner() {
    const location = useLocation();

    return (
        <div className="banner position-relative w-100" style={{ minHeight: "175px" }}>

            {/* Overlay */}
            <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.55)", zIndex: 1 }} />

            {/* Logo on left */}



            {/* Logo: hide on mobile (smaller than md) */}
            <Link to="/" className="position-absolute top-50 start-0 translate-middle-y ms-3 d-none d-md-block" style={{ zIndex: 2 }}>
                <img src={logo} alt="Melong Tours & Treks" style={{ width: "150px", maxWidth: "20vw", height: "auto" }} />
            </Link>

            {/* Navigation buttons top-right on desktop, under title on mobile */}
            <div className="position-absolute end-0 top-0 mt-3 me-3 d-none d-md-flex gap-2 flex-wrap" style={{ zIndex: 3 }}>
                <Link className="btn btn-outline-light btn-sm" to="/">Home</Link>
                <Link className="btn btn-outline-light btn-sm" to="/knowus">Know Us</Link>
                <Link className="btn btn-outline-light btn-sm" to="/contactus">Contact Us</Link>
                <Link className="btn btn-outline-light btn-sm" to="/faq">FAQ</Link>
            </div>

            {/* Center title */}
            <div className="position-absolute top-50 start-50 translate-middle text-center text-light px-3"
                style={{ zIndex: 2, width: "90%", maxWidth: "600px", minWidth: "200px" }}>
                <h1 className="fw-bold mb-1" style={{ fontSize: "1.8rem", lineHeight: "1.2" }}>Melong Tours & Treks</h1>
                <p className="lead mb-1" style={{ fontSize: "1rem", lineHeight: "1.2" }}>Treks Beyond Trails. Stories Beyond Mountains.</p>

                <div className="d-flex d-md-none flex-wrap justify-content-center mt-4 mb-0 gap-2">
                    <Link className="btn btn-outline-light btn-sm" to="/">Home</Link>
                    <Link className="btn btn-outline-light btn-sm" to="/knowus">Know Us</Link>
                    <Link className="btn btn-outline-light btn-sm" to="/contactus">Contact Us</Link>
                    <Link className="btn btn-outline-light btn-sm" to="/faq">FAQ</Link>
                </div>





            </div>
        </div>
    );
}
