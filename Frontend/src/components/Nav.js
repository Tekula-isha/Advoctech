import { Link } from "react-router-dom";

const MyNav = () => {
    return (
        <>
        <div>
         <header>
            <h1 className="pad">ADVOCTECH</h1>
        </header>
        <nav className="navbar navbar-expand-sm navbar" style={{ backgroundColor: '#90CAF9' }}> {/* Lightened the blue color */}

            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0 ul list">

                    <li className="nav-item col link">
                        <Link className="nav-link col custom-navLink" to="/home" aria-current="page">Home</Link>
                    </li>

                    <li className="nav-item link">
                        <Link className="nav-link col" to="/about">About Us</Link>
                    </li>

                    <li className="nav-item link">
                        <Link className="nav-link col" to="/services">Services</Link>
                    </li>

                    <li className="nav-item link">
                        <Link className="nav-link col" to="/FAQ">FAQS</Link>
                    </li>
                    
                    <li className="nav-item link">
                        <Link className="nav-link col" to="/ChatBot">LEGAL ASSISTANT</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/docanalyzer">Document Analyzer</Link>
                    </li>

                </ul>
            </div>

            {/* ✅ Always show the Logout button */}
            <button id="Log">
                <Link to="/login"> Logout</Link>
            </button>

        </nav>
        </div>
        </>
    );
};

export default MyNav;