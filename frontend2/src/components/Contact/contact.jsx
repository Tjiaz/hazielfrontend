import React from "react";
import "./contact.scss";
import Footers from "../Footers/Footers";

// Helper function to get the CSRF token from cookies
// function getCookie(name) {
//   let cookieValue = null;
//   if (document.cookie && document.cookie !== "") {
//     const cookies = document.cookie.split(";");
//     for (let i = 0; i < cookies.length; i++) {
//       const cookie = cookies[i].trim();
//       // Does this cookie string begin with the name we want?
//       if (cookie.substring(0, name.length + 1) === name + "=") {
//         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//         break;
//       }
//     }
//   }
//   return cookieValue;
// }

const contact = () => {
  // const [csrftoken, setCsrftoken] = useState("");

  //   useEffect(() => {
  //     setCsrftoken(getCookie("csrftoken"));
  //   }, []);

  return (
    <div>
      <h1 className="text-center">Contact us</h1>

      <div className="contact-container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form action="/contact/" method="POST">
              {/* <input
                type="hidden"
                name="csrfmiddlewaretoken"
                value={csrftoken}
              /> */}
              <div className="form-group">
                <label for="fullname">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  name="fullname"
                  required
                />
              </div>
              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="form-group">
                <label for="desc">How can we help you?</label>
                <textarea
                  className="form-control"
                  id="desc"
                  name="desc"
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label for="phone_number">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone_number"
                  name="phone_number"
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

export default contact;
