import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { applyLeave, getLeave, clearProcessedLeaveRequests } from "../services/allApi";

const Empportal = () => {
  const [employee, setEmployee] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showCredentials, setShowCredentials] = useState(false);
  const [showWorkflow, setShowWorkflow] = useState(false);
  const [showLeaveStatus, setShowLeaveStatus] = useState(false);
  const [isPunchedIn, setIsPunchedIn] = useState(false);
  const [reason, setReason] = useState("");
  const [leaves, setLeaves] = useState([]);

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const storedEmployee = localStorage.getItem("employee");
    if (storedEmployee) {
      setEmployee(JSON.parse(storedEmployee));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    if (employee) {
      fetchLeaves();
    }
  }, [employee, loading]);

  const fetchLeaves = async () => {
    try {
      const serverResp = await getLeave();
      const filteredJobs = serverResp.data.filter((e) => e.empId === employee.id);
      setLeaves(filteredJobs);
      console.log(filteredJobs);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClearProcessedLeaves = async () => {
    try {
      await clearProcessedLeaveRequests();
      setLeaves(leaves.filter((leave) => leave.status === "pending")); // Update the state to remove processed leaves
    } catch (error) {
      console.log(error);
    }
  };

  if (!employee) {
    return <div>Loading...</div>;
  }

  const handleViewDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleViewCredentials = () => {
    setShowCredentials(!showCredentials);
  };

  const handleViewWorkflow = () => {
    setShowWorkflow(!showWorkflow);
  };

  const handleViewLeaveStatus = () => {
    setShowLeaveStatus(!showLeaveStatus);
  };

  const handlePunch = () => {
    setIsPunchedIn(!isPunchedIn);
  };

  const handleSubmit = async (name, userId) => {
    try {
      const payload = {
        empId: userId,
        empleename: name,
        reason: reason,
        status: "pending",
      };
      await applyLeave(payload);
      setLoading("hiii");
      setShow(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("employee");
    navigate("/");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#A9B5DF",
        paddingBottom: "20px",
      }}
    >
      <div
        className="nav"
        style={{
          height: "60px",
          backgroundColor: "#1E3A8A",
          position: "relative",
        }}
      >
        <ul className="nav nav-tabs d-flex justify-content-evenly">
          <li className="nav-item m-2">
            <a
              className="nav-link active text-dark"
              aria-current="page"
              href="#"
              style={{ color: "#fff" }}
            >
              Zync HR
            </a>
          </li>
          <li className="nav-item m-2">
            <a className="nav-link" href="#" style={{ color: "#fff" }}>
              Gmail
            </a>
          </li>
          <li className="nav-item m-2">
            <a className="nav-link" href="#" style={{ color: "#fff" }}>
              Meetings
            </a>
          </li>
          <li className="nav-item m-2">
            <a
              className="nav-link"
              aria-disabled="true"
              style={{ color: "#fff" }}
            >
              Disabled
            </a>
          </li>
          <li style={{ position: "absolute", right: "150px", top: "10px" }}>
            <button className="btn btn-outline-light" onClick={handleShow}>
              Apply Leave
            </button>
          </li>
          <li style={{ position: "absolute", right: "20px", top: "10px" }}>
            <button
              className={`btn ${isPunchedIn ? "btn-danger" : "btn-success"}`}
              onClick={handlePunch}
            >
              {isPunchedIn ? "Punch Out" : "Punch In"}
            </button>
          </li>
          <li style={{ position: "absolute", right: "280px", top: "7px" }}>
            <button
              className="btn btn-warning rounded-circle"
              onClick={handleLogout}
              style={{ padding: "10px 20px" }}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>

      <div
        className="row d-flex align-items-center"
        style={{ marginLeft: "0px", padding: "20px" }}
      >
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
              Welcome <span className="text-primary">{employee.name}</span>
            </h1>
          </center>
          <p>
            Success isn't just about working hard; it's about working smart,
            staying dedicated, and believing in yourself! 💡 Every effort you
            put in today brings us one step closer to greatness. 🚀 Challenges
            may come, but remember, they are just opportunities in disguise. 💪
            Keep pushing, keep learning, and keep growing! 🌱 Your hard work and
            passion make a real difference. Let’s inspire each other and create
            something amazing together! 🎯😊
          </p>
          <button className="btn btn-primary" onClick={handleViewDetails}>
            {showDetails ? "Hide Details" : "View Details"}
          </button>
          {showDetails && (
            <div
              className="mt-3"
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <h5>Details</h5>
              <p>
                <strong>Name:</strong> {employee.name}
              </p>
              <p>
                <strong>Place:</strong> {employee.place}
              </p>
              <p>
                <strong>Phone:</strong> {employee.phone}
              </p>
              <p>
                <strong>Email:</strong> {employee.email}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card" style={{ backgroundColor: "#F4FFC3" }}>
            <div className="card-body">
              <h5 className="card-title">Work Flow</h5>
              <p className="card-text">
                Your workflow details are visible here.
              </p>
              <button className="btn btn-primary" onClick={handleViewWorkflow}>
                {showWorkflow ? "Hide Workflow" : "View Workflow"}
              </button>
              {showWorkflow && (
                <div
                  className="mt-3"
                  style={{
                    backgroundColor: "#fff",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    src="https://media.licdn.com/dms/image/v2/D5612AQFi9iG1xBAn0Q/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1689499617230?e=2147483647&v=beta&t=ZRxvq6xveKohIZlQV3179SI1KpDgMb7_W9LdC5YDDOo"
                    alt="Workflow"
                    className="img-fluid"
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card" style={{ backgroundColor: "#F4FFC3" }}>
            <div className="card-body">
              <h5 className="card-title">Leave Status</h5>
              <p className="card-text">
                Your leave status and reasons are visible here.
              </p>
              <button className="btn btn-primary" onClick={handleViewLeaveStatus}>
                {showLeaveStatus ? "Hide Leave Status" : "View Leave Status"}
              </button>
              {showLeaveStatus && (
                <div
                  className="mt-3"
                  style={{
                    backgroundColor: "#fff",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                >
                  <h5>Leave Status</h5>
                  {leaves.length > 0 ? (
                    leaves.map((leave, index) => (
                      <div key={index} className="d-flex gap-5" style={{ marginBottom: "10px" }}>
                        <p><strong>Reason:</strong> {leave.reason}</p>
                        <p><strong>Status:</strong> {leave.status}</p>
                      </div>
                    ))
                  ) : (
                    <p>No leave records found.</p>
                  )}
                  <button className="btn btn-danger mt-3" onClick={handleClearProcessedLeaves}>
                    Clear Processed Leaves
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-sm-12 mt-3 d-flex justify-content-center">
          <div className="card" style={{ backgroundColor: "#F4FFC3", width: "40%" }}>
            <div className="card-body">
              <h5 className="card-title">Employee Credentials</h5>
              <p className="card-text">
                Your document details are visible here.
              </p>
              <button
                className="btn btn-primary"
                onClick={handleViewCredentials}
              >
                {showCredentials ? "Hide Credentials" : "View Credentials"}
              </button>
              {showCredentials && (
                <div
                  className="mt-3"
                  style={{
                    backgroundColor: "#fff",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                >
                  <h5>Credentials</h5>
                  <p>
                    <strong>Username:</strong> {employee.email}
                  </p>
                  <p>
                    <strong>Password:</strong> {employee.password}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Leaves</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingTextarea2" label="Reason">
            <Form.Control
              onChange={(e) => setReason(e.target.value)}
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="success"
            onClick={() => handleSubmit(employee.name, employee.id)}
          >
            Apply
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Empportal;