import React from "react";


const Footer = () => {
  return (
    <div>
      <div
        className="row"
        style={{
          height: "auto",
          width: "100%",
          backgroundColor: "#343a40",
          color: "#fff",
          padding: "20px 0",
          margin: "0px",
          position: "relative",
          bottom: "0px",
        }}
      >
        <div className="col-4">
          <h3>
            <i className="fa fa-music m-2"></i>Zync HR
          </h3>
          <p>
            Zync HR – Empowering People, Simplifying HR.
          </p>
        </div>
        <div className="col-2">
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
        <div className="col-3">
          <h3>Guides</h3>
          <p>
            React <br />
            React Router <br />
            React Bootstrap
          </p>
        </div>
        <div className="col-3">
          <h3>Contact</h3>
          <input
            style={{
              borderRadius: "5px",
              margin: "0px",
              fontSize: "12px",
              outline: "none",
              padding: "5px",
              width: "80%",
            }}
            type="email"
            placeholder="Enter your E-mail here!!!"
          />
          <button className="btn btn-info m-2" style={{ width: "40px" }}>
            →
          </button>
          <div className="d-flex mt-2">
            <i className="fa fa-twitter m-1"></i>
            <i className="fa fa-instagram m-1 ms-3"></i>
            <i className="fa fa-facebook-f m-1 ms-3"></i>
            <i className="fa fa-linkedin m-1 ms-3"></i>
            <i className="fa fa-github m-1 ms-3"></i>
            <i className="fa fa-phone m-1 ms-3"></i>
          </div>
        </div>
        <p className="text-center mt-3" style={{ width: "100%" }}>
          Copyright © July 2025 Batch. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
