import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [role,setRole]=useState("HR");
  const navigate=useNavigate()


  const toPortal=()=>{
    if(role==="HR"){
      navigate("/hr")
    }else if(role==="Employee"){
      navigate("/emp")
    }

  }

  return (
    <div
      className="container-fluid"
      style={{ height: "100vh", backgroundColor: "#f0f0f0" }}
    >
      <div className="row h-100">
        <div
          className="col-6 d-flex flex-column justify-content-center align-items-center"
          style={{ backgroundColor: "#143D60", color: "#fff", padding: "20px" }}
        >
          <h2>Welcome to ZyncHR</h2>
          <p>Zync HR – Empowering People, Simplifying HR.</p>
          <div
            className="rounded-circle overflow-hidden mt-3"
            style={{ height: "300px", width: "300px" }}
          >
            <img
              src="https://blog.zohowebstatic.com/sites/zblogs/images/cliq/motivation-final-2019-06.gif"
              alt="Placeholder"
              className="img-fluid"
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
          </div>
        </div>
        <div
          className="col-6 d-flex flex-column justify-content-center align-items-center"
          style={{ backgroundColor: "#27667B", color: "#fff", padding: "20px" }}
        >
          <h2>Get Started</h2>
          <p>Sign up today and streamline your HR processes.</p>
          <div
            className="inputB d-flex flex-column align-items-center p-4"
            style={{
              height: "350px",
              width: "450px",
              backgroundColor: "#EFE9D5",
              borderRadius: "20px",
            }}
          >
            <div
              className="image rounded-circle overflow-hidden mb-3"
              style={{
                height: "100px",
                width: "100px",
                backgroundColor: "black",
              }}
            >
              <img
                src="https://kvernmo.no/wp-content/uploads/2017/06/icon-user-default.png"
                alt="User"
                className="img-fluid"
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
            </div>
            <select
              className="form-control mb-3"
             onChange={(e)=>setRole(e.target.value)}
            >
              <option value="HR">Login as HR</option>
              <option value="Employee">Login as Employee</option>
            </select>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter username"
            />
            <input
              type="password"
              className="form-control mb-3"
              placeholder="Enter password"
            />
            <button className="btn btn-outline-primary w-50" onClick={toPortal}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
