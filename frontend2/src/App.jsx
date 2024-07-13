import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Aboutus from "./components/AboutUs/Aboutus";
import Register from "./components/Register/Register";
import Intro from "./components/Intro/Intro";
import Contact from "./components/Contact/contact";

// import "./components/Navbar/navbar.scss";

import Spinner from "./components/spinner/Spinner";
import JoinHaziel from "./components/JoinHaziel/JoinHaziel";
import Recentnews from "./components/RecentNews/Recentnews";
import Team from "./components/Team/Team";
import Sponsors from "./components/Sponsors/Sponsors";
import Footers from "./components/Footers/Footers";
import { FaBars, FaTimes } from "react-icons/fa";
import Campaign from "./components/Campaign/Campaign";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/home" || location.pathname === "/";
  const [Words, setWords] = useState("");
  const [remWords, setRemWords] = useState(false);
  const [showLinks, setShowLinks] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

 
  useEffect(() => {
    // Split the entire text into words
    const allWords =
      "Haziel - Haziel Charity Foundation. A not-for-profit and non-political organization to firmly and solemnly revolve to provide for ourselves a constitution and to be governed by the provisions therein contained.".split(
        " "
      );

    const intervals = setInterval(() => {
      setRemWords((prevState) => !prevState);

      if (remWords) {
        const firstFiveWords = allWords.slice(0, 5).join(" ");
        setWords(firstFiveWords);
      }
    }, 10000);

    return () => {
      clearInterval(intervals);
    };
  }, [remWords]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 767.98) {
        setShowLinks(true); // Set to true for larger screens
      } else {
        setShowLinks(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="top-section">
        <Link to="/joinus">
          <button className="join-btn">Contact </button>
        </Link>
        <img src="/images/logo2.jpeg" alt="Haziel Logo" className="logo" />
        <button className="support-btn">Support</button>
      </div>
      <div className="description">
        <p>
          {remWords
            ? "A not-for-profit and non-political organization to firmly and solemnly revolve to provide for ourselves a constitution and to be governed by the provisions therein contained."
            : Words}
        </p>
      </div>

      <div className="navbar">
        {showLinks ? (
          <FaTimes className="bar-icon" onClick={() => setShowLinks(false)} />
        ) : (
          <FaBars className="bar-icon" onClick={() => setShowLinks(true)} />
        )}

        {showLinks && (
          <>
            <Link to="/home" className="nav-item">
              Home
            </Link>
            <Link to="/aboutus" className="nav-item">
              About
            </Link>

            <Link to="/support-us" className="nav-item">
              Projects
            </Link>
            <Link to="/contact" className="nav-item">
              Contact-us
            </Link>
            <Link to="/campaign" className="nav-item">
              Campaigns
            </Link>
            {/* <Link to="/register" className="nav-item">
              Register
            </Link> */}
          </>
        )}
      </div>
      {isHomePage && <Hero />}
      {isHomePage && <Intro />}
      {isHomePage && <Recentnews />}
      {isHomePage && <Team />}
      {isHomePage && <Sponsors />}
      {isHomePage && <Footers />}

      <Routes>
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Campaign" element={<Campaign />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
