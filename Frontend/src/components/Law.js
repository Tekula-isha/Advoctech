import React from 'react';
import { Link } from "react-router-dom";
import MySearch from "./MySearch";
import Footer from './Footer';

const Law = () => {
    return (
        <>
            <MySearch />

            <main>
                <section className="container1">
                    <div className="row" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                        {/* Box 1: Laws */}
                        <div className="col-md-4" style={{ marginBottom: "20px", textAlign: "center" }}>
                            <Link to="/KeyFeatures/LawTypes">
                                <button className="lawsession" style={{ width: "100%", padding: "15px", borderRadius: "8px" }}>
                                    <img
                                        src="https://res.cloudinary.com/dtnvkccyy/image/upload/v1702632300/ecwbq7oxj2e0nuez44ec.jpg"
                                        className="img"
                                        alt="Online Marketplace Logo"
                                        style={{ maxWidth: "100%", height: "auto", marginBottom: "10px" }}
                                    />
                                    <h3 style={{ fontSize: "25px" }}>Laws</h3>
                                    <p style={{ color: "GrayText" }}>Different types of laws and their info.</p>
                                </button>
                            </Link>
                        </div>

                        {/* Box 2: Legal Assistant */}
                        <div className="col-md-4" style={{ marginBottom: "20px", textAlign: "center" }}>
                            <Link to="/chatbot">
                                <button className="lawsession" style={{ width: "100%", padding: "15px", borderRadius: "8px" }}>
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9fdd26PxxIM7ZZTR0LVW4g9noEqWele_WxA&usqp=CAU"
                                        className="img"
                                        alt="AI Assistant Logo"
                                        style={{ maxWidth: "100%", height: "auto", marginBottom: "10px" }}
                                    />
                                    <h3 style={{ fontSize: "25px" }}>LEGAL ASSISTANT</h3>
                                    <p style={{ color: "GrayText" }}>
                                        Explore the solutions to simplify your legal processes and make informed decisions.
                                    </p>
                                </button>
                            </Link>
                        </div>

                        {/* Box 3: Know Your Rights */}
                        <div className="col-md-4" style={{ marginBottom: "20px", textAlign: "center" }}>
                            <Link to="/rights">
                                <button className="lawsession" style={{ width: "100%", padding: "15px", borderRadius: "8px" }}>
                                    <img
                                        src="https://res.cloudinary.com/dtnvkccyy/image/upload/v1702546813/know_bgrbmv.png"
                                        className="img"
                                        alt="Know Your Rights Logo"
                                        style={{ maxWidth: "100%", height: "auto", marginBottom: "10px" }}
                                    />
                                    <h3 style={{ fontSize: "25px" }}>Know Your Rights</h3>
                                    <p style={{ color: "GrayText" }}>Explore ALL Your Rights</p>
                                </button>
                            </Link>
                        </div>

                        {/* Box 4: Legal Advice */}
                        <div className="col-md-4" style={{ marginBottom: "20px", textAlign: "center" }}>
                            <Link to="/legaladvice">
                                <button className="lawsession" style={{ width: "100%", padding: "15px", borderRadius: "8px" }}>
                                    <img
                                        src="https://res.cloudinary.com/dtnvkccyy/image/upload/v1702545340/advice_s6ry5c.jpg"
                                        className="img"
                                        alt="Real-time Legal Advice Logo"
                                        style={{ maxWidth: "100%", height: "auto", marginBottom: "10px" }}
                                    />
                                    <h3 style={{ fontSize: "25px" }}>Legal Advice</h3>
                                    <p style={{ color: "GrayText" }}>Get expert advice for solving legal cases.</p>
                                </button>
                            </Link>
                        </div>

                        {/* Box 5: Online Appointment Booking */}
                        <div className="col-md-4" style={{ marginBottom: "20px", textAlign: "center" }}>
                            <Link to="/Appoint">
                                <button className="lawsession" style={{ width: "100%", padding: "15px", borderRadius: "8px" }}>
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1sGSmcfw0KICe9HUXlgrzPcZIUedP9VWWOQ&usqp=CAU"
                                        className="img"
                                        alt="Online Appointment Booking Logo"
                                        style={{ maxWidth: "100%", height: "auto", marginBottom: "10px" }}
                                    />
                                    <h3 style={{ fontSize: "25px" }}>Appointment Booking</h3>
                                    <p style={{ color: "GrayText" }}>
                                        Book a consultation with a legal expert through our secure platform.
                                    </p>
                                </button>
                            </Link>
                        </div>

                       {/* Box 6: Document Analyzer */}
<div className="col-md-4" style={{ marginBottom: "20px", textAlign: "center" }}>
    <Link to="/docanalyzer">
        <button className="lawsession" style={{ width: "100%", padding: "15px", borderRadius: "8px" }}>
            <img
                src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png" // Document icon
                className="img"
                alt="Document Analyzer Logo"
                style={{ maxWidth: "100%", height: "auto", marginBottom: "10px" }}
            />
            <h3 style={{ fontSize: "25px" }}>Document Analyzer</h3>
            <p style={{ color: "GrayText" }}>
                Upload and analyze legal documents for summaries and insights.
            </p>
        </button>
    </Link>
</div>

                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Law;