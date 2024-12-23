import React, { useState, useEffect, useRef } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [Words, setWords] = useState("");
  const [remWords, setRemWords] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const navbarRef = useRef(null);

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
    const handleScroll = () => {
      if (navbarRef.current) {
        const navbarTop = navbarRef.current.getBoundingClientRect().top;
        setIsFixed(navbarTop <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar-container ${isFixed ? "fixed" : ""}`}
      ref={navbarRef}
    >
      <div className="top-section">
        <Link to="/contact">
          <button className="join-btn">Contact</button>
        </Link>
        <img
          src="/hazielfrontend/logo2.jpeg"
          alt="haziel Logo"
          className="logo"
        />
        <Link to="/fundraising">
          <button className="support-btn">Support</button>
        </Link>
      </div>
      <div className="description">
        <p>
          {remWords
            ? "A not-for-profit and non-political organization to firmly and solemnly revolve to provide for ourselves a constitution and to be governed by the provisions there in contained."
            : Words}
        </p>
      </div>
    </div>
  );
};

export default Navbar;
