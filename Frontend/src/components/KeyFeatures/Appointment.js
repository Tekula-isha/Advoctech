import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Appointment.css';

const LoginPopup = ({ onClose }) => {
  return (
    <div className="login-popup">
      <p>Login first to schedule a consultation</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const Appointment = () => {
  const [showPopup, setShowPopup] = useState(false);

  const HandleLogin = () => {
    if (!sessionStorage.getItem("userId")) {
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <h1>Book an Appointment Session with Legal Professionals</h1>

      <div className="row"> 
        {/* Lawyer 1 */}
        <div className="col-md-4" style={{ marginBottom: "20px", marginTop: "50px" }}>
          <button className="lawsession" onClick={HandleLogin}>
            <Link to="/Session">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="Lawyer" alt="Profile Icon" width="320px" height="270px" />
            </Link>
          </button>
          <div className="detail">
            <span>
              <h3 style={{ fontSize: "25px" }}>Abhishek Singhvi</h3>
              <h3 style={{ fontSize: "25px" }}>15+ YOE</h3> 
              <h3 style={{ fontSize: "25px" }}>J.D., Harvard Law School</h3>
              <h4 style={{ fontSize: "25px" }}>Corporate Law, Mergers and Acquisitions</h4>
            </span>
          </div>
          <div className="register-button">
            <button className="Regis" onClick={HandleLogin}>
              Register now
            </button>
          </div>
        </div>

        {/* Lawyer 2 */}
        <div className="col-md-4" style={{ marginBottom: "20px", marginTop: "50px" }}>
          <button className="lawsession" onClick={HandleLogin}>
            <Link to="/Session">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="Lawyer" alt="Profile Icon" width="320px" height="270px" />
            </Link>
          </button>
          <div className="detail">
            <span>
              <h3 style={{ fontSize: "25px" }}>K. K. Venugopal</h3>
              <h3 style={{ fontSize: "25px" }}>12+ YOE</h3> 
              <h3 style={{ fontSize: "25px" }}>Yale Law School</h3>
              <h4 style={{ fontSize: "25px" }}>Intellectual Property, Patent Law</h4>
            </span>
          </div>
          <div className="register-button">
            <button className="Regis" onClick={HandleLogin}>
              Register now
            </button>
          </div>
        </div>

        {/* Lawyer 3 */}
        <div className="col-md-4" style={{ marginBottom: "20px", marginTop: "50px" }}>
          <button className="lawsession" onClick={HandleLogin}>
            <Link to="/Session">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile Icon" width="320px" height="270px" />
            </Link>
          </button>
          <div className="detail">
            <span>
              <h3 style={{ fontSize: "25px" }}>Fali Sam Nariman</h3>
              <h3 style={{ fontSize: "25px" }}>10+ YOE</h3> 
              <h3 style={{ fontSize: "25px" }}>Stanford Law School</h3>
              <h4 style={{ fontSize: "25px" }}>Criminal Law, Civil Litigation</h4>
            </span>
          </div>
          <div className="register-button">
            <button className="Regis" onClick={HandleLogin}>
              Register now
            </button>
          </div>
        </div>

        {/* Lawyer 4 */}
        <div className="col-md-4" style={{ marginBottom: "20px", marginTop: "50px" }}>
          <button className="lawsession" onClick={HandleLogin}>
            <Link to="/Session">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile Icon" width="320px" height="270px" />
            </Link>
          </button>
          <div className="detail">
            <span>
              <h3 style={{ fontSize: "25px" }}>Nani Palkhivala</h3>
              <h3 style={{ fontSize: "25px" }}>20+ YOE</h3> 
              <h3 style={{ fontSize: "25px" }}>Oxford University</h3>
              <h4 style={{ fontSize: "25px" }}>Tax Law, Constitutional Law</h4>
            </span>
          </div>
          <div className="register-button">
            <button className="Regis" onClick={HandleLogin}>
              Register now
            </button>
          </div>
        </div>

        {/* Lawyer 5 */}
        <div className="col-md-4" style={{ marginBottom: "20px", marginTop: "50px" }}>
          <button className="lawsession" onClick={HandleLogin}>
            <Link to="/Session">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile Icon" width="320px" height="270px" />
            </Link>
          </button>
          <div className="detail">
            <span>
              <h3 style={{ fontSize: "25px" }}>Indira Jaising</h3>
              <h3 style={{ fontSize: "25px" }}>18+ YOE</h3> 
              <h3 style={{ fontSize: "25px" }}>Cambridge University</h3>
              <h4 style={{ fontSize: "25px" }}>Human Rights, Family Law</h4>
            </span>
          </div>
          <div className="register-button">
            <button className="Regis" onClick={HandleLogin}>
              Register now
            </button>
          </div>
        </div>

        {/* Lawyer 6 */}
        <div className="col-md-4" style={{ marginBottom: "20px", marginTop: "50px" }}>
          <button className="lawsession" onClick={HandleLogin}>
            <Link to="/Session">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile Icon" width="320px" height="270px" />
            </Link>
          </button>
          <div className="detail">
            <span>
              <h3 style={{ fontSize: "25px" }}>Harish Salve</h3>
              <h3 style={{ fontSize: "25px" }}>25+ YOE</h3> 
              <h3 style={{ fontSize: "25px" }}>London School of Economics</h3>
              <h4 style={{ fontSize: "25px" }}>International Arbitration, Commercial Law</h4>
            </span>
          </div>
          <div className="register-button">
            <button className="Regis" onClick={HandleLogin}>
              Register now
            </button>
          </div>
        </div>
      </div>

      {showPopup && <LoginPopup onClose={closePopup} />}
    </>
  );
}

export default Appointment;