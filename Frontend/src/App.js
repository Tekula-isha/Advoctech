import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Nav from './components/Nav';
import Law from './components/Law';
import About from './components/About';
import Service from './components/Service';
import MyChatbot from './components/chatbot/Chat1.js';
import Constitution from './components/TypesofLaws/Constitution';
import Civil from './components/TypesofLaws/Civil';
import Corporate from './components/TypesofLaws/Corporate';
import Criminal from './components/TypesofLaws/Criminal';
import Cyber from './components/TypesofLaws/Cyber';
import Environmental from './components/TypesofLaws/Environmental';
import Family from './components/TypesofLaws/Family';
import Intellectual from './components/TypesofLaws/Intellectual';
import Labor from './components/TypesofLaws/Labor';
import Property from './components/TypesofLaws/Property';
import Tax from './components/TypesofLaws/Tax';
import LawTypes from './components/KeyFeatures/LawTypes.js';
import FAQ from './components/FAQs/FAQ';
import Login from './components/Login.jsx';
import Signup from './components/signup.jsx';
import KnowYourRights from './components/KeyFeatures/KnowYourRights.js';
import LegalAdvice from './components/KeyFeatures/LegalAdvice.js';
import Appointment from './components/KeyFeatures/Appointment.js';
import Session from './components/KeyFeatures/Session.js';
import Details from './components/KeyFeatures/Details.js';
import Contact from './components/Contact.js';
import DocAnalyzer from './components/DocAnalyzer';

function App() {
  return (
    <BrowserRouter basename="/ADVOCTECH">
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  const location = useLocation(); // Get current page

  return (
    <>
      {/* ✅ Hide Navbar on Login & Signup pages */}
      {location.pathname !== "/signup" && location.pathname !== "/login" && <Nav />}

      <Routes>
        {/* 🟢 Make `/login` the Landing Page */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 🔄 Redirect to Home (Law) After Login */}
        <Route path="/home" element={<Law />} />

        {/* Other Routes */}
        <Route path="/Nav" element={<Nav />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/chatbot" element={<MyChatbot />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/KeyFeatures/LawTypes" element={<LawTypes />} />
        <Route path="/constitution" element={<Constitution />} />
        <Route path="/civil" element={<Civil />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/criminal" element={<Criminal />} />
        <Route path="/cyber" element={<Cyber />} />
        <Route path="/environment" element={<Environmental />} />
        <Route path="/family" element={<Family />} />
        <Route path="/intellectual" element={<Intellectual />} />
        <Route path="/labor" element={<Labor />} />
        <Route path="/tax" element={<Tax />} />
        <Route path="/Property" element={<Property />} />
        <Route path="/rights" element={<KnowYourRights />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/legaladvice" element={<LegalAdvice />} />
        <Route path="/Appoint" element={<Appointment />} />
        <Route path="/Session" element={<Session />} />
        <Route path="/details" element={<Details />} />
        <Route path="/docanalyzer" element={<DocAnalyzer />} />
      </Routes>
    </>
  );
}

export default App;
