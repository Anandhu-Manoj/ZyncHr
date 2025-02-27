import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Empportal = () => {
  return (
    <div style={{ height: "100vh", backgroundColor: "#A9B5DF" }}>
      <div className="nav" style={{ height: "60px", backgroundColor: "#1E3A8A", position: "relative" }}>
        <ul className="nav nav-tabs d-flex justify-content-evenly">
          <li className="nav-item m-2">
            <a className="nav-link active text-dark" aria-current="page" href="#" style={{ color: "#fff" }}>
              Zync HR
            </a>
          </li>
          <li className="nav-item m-2">
            <a className="nav-link" href="#" style={{ color: "#fff" }}>
              Link
            </a>
          </li>
          <li className="nav-item m-2">
            <a className="nav-link" href="#" style={{ color: "#fff" }}>
              Link
            </a>
          </li>
          <li className="nav-item m-2">
            <a className="nav-link" aria-disabled="true" style={{ color: "#fff" }}>
              Disabled
            </a>
          </li>
          <li style={{ position: "absolute", right: "150px", top: "10px" }}>
            <button className="btn btn-outline-light">Apply Leave</button>
          </li>
          <li style={{ position: "absolute", right: "20px", top: "10px" }}>
            <button className="btn btn-outline-light">Punch In</button>
          </li>
        </ul>
      </div>

      <div className="row d-flex align-items-center" style={{ marginLeft: "0px", padding: "20px" }}>
        <div className="col-4 d-flex justify-content-center">
          <div
            className="profilepic"
            style={{
              backgroundColor: "#FBBF24",
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              overflow: "hidden",
              marginTop: "50px",
            }}
          >
            <img
              src="https://png.pngtree.com/png-vector/20230912/ourmid/pngtree-d-illustration-diligent-office-worker-3d-cartoon-character-office-worker-holding-png-image_10022101.png"
              alt="Profile"
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="col-8">
          <center>
            <h1>
              Welcome <span className="text-primary">Loyid</span>
            </h1>
          </center>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
            praesentium, consequatur, eos ullam ducimus sunt quod asperiores
            iste officia, est laudantium quae nostrum quis saepe incidunt
            distinctio maxime at modi.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card" style={{ backgroundColor: "#F4FFC3" }}>
            <div className="card-body">
              <h5 className="card-title">Employee Documents</h5>
              <p className="card-text">Your document details are visible here</p>
              <a href="#" className="btn btn-primary">
                View
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card" style={{ backgroundColor: "#F4FFC3" }}>
            <div className="card-body">
              <h5 className="card-title">Work Flow</h5>
              <p className="card-text">Your workflow details are visible here.</p>
              <a href="#" className="btn btn-primary">
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empportal;