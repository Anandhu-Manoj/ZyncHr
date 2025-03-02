// filepath: /D:/Mern/REACT/ZyncHR/zynchr/src/Components/Home.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { getAdmin, getEmployee } from "../services/allApi";

const Home = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    role: "",
    email: "",
    password: "",
  });

  const onLogin = async () => {
    if (!userData.role || !userData.email || !userData.password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      if (userData.role === "HR") {
        let resp = await getAdmin();

        if (resp?.data?.email === userData.email && resp?.data?.password === userData.password) {
          navigate("/hr");
        } else {
          alert("Invalid HR credentials");
        }
      } else if (userData.role === "Employee") {
        let serverResp = await getEmployee();
        let find = serverResp?.data?.find(
          (a) => a.email === userData.email && a.password === userData.password
        );

        if (find) {
          localStorage.setItem("employee", JSON.stringify(find));
          navigate("/emp");
        } else {
          alert("Invalid Employee credentials");
        }
      } else {
        alert("Please select a valid role");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <div className="container-fluid" style={{ height: "100vh", backgroundColor: "#f0f0f0" }}>
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
                value={userData.role}
                onChange={(e) => setUserData({ ...userData, role: e.target.value })}
              >
                <option value="">Select Role</option>
                <option value="HR">Login as HR</option>
                <option value="Employee">Login as Employee</option>
              </select>
              <input
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                type="text"
                className="form-control mb-3"
                placeholder="Enter email"
              />
              <input
                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                type="password"
                className="form-control mb-3"
                placeholder="Enter password"
              />
              <button className="btn btn-outline-primary w-50" onClick={onLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;