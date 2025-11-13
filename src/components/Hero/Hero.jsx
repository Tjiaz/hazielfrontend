// Hero.jsx
import React, { useEffect, useState } from "react";
import "./hero.scss";

const Hero = () => {
  const images = {
    image_1: "4.jpeg",
    image_2: "5.jpeg",
    image_3: "6.jpeg",
  };
  const [imageIndex, setImageIndex] = useState(0);
  const [text, setText] = useState("");
  const fullText = "Haziel Charity, Caring for the Less Privileged";
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const intervals = setInterval(() => {
      setImageIndex(
        (prevIndex) => (prevIndex + 1) % Object.keys(images).length
      );
    }, 10000);

    return () => clearInterval(intervals);
  }, [images]);

  // Typing effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 100); // Adjust speed here

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <>
      {/* Mobile view */}
      <div className="hero-mobile">
        <div className="typing-text">
          <div className="background-image">
            <img src="images/charity4.jpeg" alt="Charity" />
          </div>
          <h1>{text}</h1>
          {isTypingComplete && <span className="cursor">|</span>}
        </div>
      </div>

      {/* Desktop view */}
      <div className="hero-desktop">
        <img
          src={`/${images[Object.keys(images)[imageIndex]]}`}
          alt="images"
          className="hero-image"
        />
      </div>
    </>
  );
};

export default Hero;
