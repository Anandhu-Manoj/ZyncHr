// filepath: /D:/Mern/REACT/ZyncHR/zynchr/src/Components/EmpDet.jsx
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getEmployeeById, updateEmployee } from "../services/allApi";
import Header from "./Header"; // Assuming you have a Header component

const EmpDet = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: "",
    place: "",
    phone: "",
    email: "",
    password: ""
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await getEmployeeById(id);
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value
    }));
  };

  const handleSave = async () => {
    try {
      await updateEmployee(id, employee);
      alert("Changes saved successfully");
      navigate("/hr"); 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ backgroundColor: "#A9B5DF", minHeight: "100vh", padding: "20px" }}>
      <Header />
      <div>
        <div className="row">
          <center>
            <h1 style={{ color: "#1E3A8A" }}>
              Employee Details <i className="fa-solid fa-calendar-week"></i>
            </h1>
          </center>
          <div className="col-6 d-flex justify-content-center">
            <div
              style={{
                height: "400px",
                width: "400px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                overflow: "hidden",
                backgroundColor: "#FBBF24",
              }}
            >
              <img
                src="https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1564163368/1564163367.jpg"
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <div
              className="d-flex justify-content-center flex-column"
              style={{
                backgroundColor: "#1E3A8A",
                height: "500px",
                borderRadius: "20px",
                padding: "20px",
                color: "white",
                width: "100%",
                maxWidth: "600px",
              }}
            >
              <h5>NAME</h5>
              <input
                type="text"
                name="name"
                className="form-control mb-3"
                value={employee.name}
                onChange={handleChange}
              />
              <h5>PLACE</h5>
              <input
                type="text"
                name="place"
                className="form-control mb-3"
                value={employee.place}
                onChange={handleChange}
              />
              <h5>PHONE</h5>
              <input
                type="text"
                name="phone"
                className="form-control mb-3"
                value={employee.phone}
                onChange={handleChange}
              />
              <h5>EMAIL</h5>
              <input
                type="text"
                name="email"
                className="form-control mb-3"
                value={employee.email}
                onChange={handleChange}
              />
              <h5>PASSWORD</h5>
              <input
                type="text"
                name="password"
                className="form-control mb-3"
                value={employee.password}
                onChange={handleChange}
              />
              <div className="d-flex gap-3 mt-2">
                <button className="btn btn-outline-success" onClick={handleSave}>
                  Save Changes
                </button>
                <Link to="/hr">
                  <button className="btn btn-outline-danger">Back</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpDet;