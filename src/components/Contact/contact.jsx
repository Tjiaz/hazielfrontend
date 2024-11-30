import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.scss";
import Footers from "../Footers/Footers";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    desc: "",
    phone_number: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Service ID:", import.meta.env.VITE_SERVICE_ID);
    console.log("Template ID:", import.meta.env.VITE_TEMPLATE_ID);
    console.log("Public Key:", import.meta.env.VITE_PUBLIC_KEY);

    // Use EmailJS to send email
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID, // Replace with your EmailJS service ID
        import.meta.env.VITE_TEMPLATE_ID, // Replace with your EmailJS template ID
        {
          fullname: formData.fullname,
          email: formData.email,
          message: formData.desc,
          phone_number: formData.phone_number,
        },
        import.meta.env.VITE_PUBLIC_KEY // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setSuccessMessage("Your message has been sent successfully!");
          setErrorMessage("");
          setFormData({
            fullname: "",
            email: "",
            desc: "",
            phone_number: "",
          });
        },
        (error) => {
          setErrorMessage(
            "There was an error sending your message. Please try again."
          );
          setSuccessMessage("");
        }
      );
    console.log("Service ID:", process.env.VITE_SERVICE_ID);
  };

  return (
    <div>
      <h1 className="text-center">Contact us</h1>
      <div className="contact-container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="desc">How can we help you?</label>
                <textarea
                  className="form-control"
                  id="desc"
                  name="desc"
                  value={formData.desc}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="phone_number">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone_number"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
      <Footers />
    </div>
  );
};

export default Contact;
