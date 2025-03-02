import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import {
  addEmploye,
  getEmployee,
  onDeleteData,
  getLeaveRequests,
  updateLeaveStatus,
} from "../services/allApi";
import { Link, useNavigate } from "react-router-dom";
import CalendarView from "./Calendar";

const Hrportal = () => {
  const [show, setShow] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false); // State for calendar modal
  const [showLeaveRequests, setShowLeaveRequests] = useState(false); // State for leave requests modal
  const [userData, setUserDatas] = useState([]);
  const [leaveRequests, setLeaveRequests] = useState([]); // Initialize as an empty array
  const [data, setData] = useState({
    name: "",
    place: "",
    phone: "",
    Role: "Employe",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState("");

  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCalendarClose = () => setShowCalendar(false); 
  const handleCalendarShow = () => setShowCalendar(true); 
  const handleLeaveRequestsClose = () => setShowLeaveRequests(false); 
  const handleLeaveRequestsShow = () => setShowLeaveRequests(true); 

  const onSubmit = async () => {
    if (data.email && data.name && data.password && data.place && data.phone) {
      try {
        await addEmploye(data);
        alert("Successful");
        fetchUserData();
        handleClose(); 
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please fill the form");
    }
  };

  const fetchUserData = async () => {
    try {
      let response = await getEmployee();
      setUserDatas(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchLeaveRequests = async () => {
    try {
      let response = await getLeaveRequests();
      setLeaveRequests(response.data);
    } catch (error) {
      console.log(error);
      setLeaveRequests([]); 
    }
  };

  useEffect(() => {
    fetchUserData();
    fetchLeaveRequests();
  }, [loading]);

  const onDelete = async (id) => {
    try {
      await onDeleteData(id);
      alert("Deleted successfully");
      fetchUserData(); 
    } catch (error) {
      console.log(error);
    }
  };

  const handleLeaveStatusUpdate = async (id, status) => {
    try {
      await updateLeaveStatus(id, status);
      setLoading("approving");
      fetchLeaveRequests();
    } catch (error) {
      console.log(error);
    }
  };

  const clearProcessedLeaveRequests = () => {
    setLeaveRequests(leaveRequests.filter(request => request.status === "pending"));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#A9B5DF",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: "#1E3A8A",
          color: "white",
          padding: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              backgroundColor: "#FBBF24",
              padding: "8px",
              borderRadius: "8px",
            }}
          >
            <img
              src="https://storage.googleapis.com/a1aa/image/1cKsSzE5y-F_glyt9dNQAXIZIOmRjKMlVu6gqJn5dKE.jpg"
              alt="Company Logo"
              style={{ width: "32px", height: "32px" }}
            />
          </div>
          <nav style={{ display: "flex", gap: "16px" }}>
            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Dashboard
            </a>
            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              My Projects
            </a>
            <a
              href="#"
              onClick={handleCalendarShow} 
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Calendar
            </a>
          </nav>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <input
            type="text"
            placeholder="Team request..."
            style={{
              backgroundColor: "#374151",
              color: "white",
              padding: "8px",
              borderRadius: "4px",
              border: "none",
            }}
          />
          <button
            onClick={handleLeaveRequestsShow} 
            style={{
              backgroundColor: "#FBBF24",
              padding: "8px 16px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Leave Requests
          </button>

          <Link to={'/'}><button
           
           style={{
             backgroundColor: "#FBBF24",
             padding: "8px 16px",
             borderRadius: "4px",
             border: "none",
             cursor: "pointer",
             fontWeight: "bold",
           }}
         >
           Log out CHAMP
         </button></Link>
          
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img
              src="https://storage.googleapis.com/a1aa/image/dHoWckSeplOu6fEExAG-zS6V9F3JAQDzHQtsCPUeLDc.jpg"
              alt="User Avatar"
              style={{ width: "32px", height: "32px", borderRadius: "50%" }}
            />
            <span style={{ fontWeight: "bold" }}>Lloyd Robinson</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "24px" }}>
        <h1
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}
        >
          Good morning, Lloyd ☕
        </h1>

        {/* Efficiency Section */}
        <div
          style={{
            backgroundColor: "white",
            padding: "16px",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            maxWidth: "350px",
            position: "relative",
          }}
        >
          <h2
            style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px" }}
          >
            Efficiency
          </h2>
          <div
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#1E3A8A",
              marginBottom: "8px",
            }}
          >
            78%
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                backgroundColor: "#3B82F6",
                height: "8px",
                width: "50%",
                borderRadius: "4px",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "#E5E7EB",
                height: "8px",
                width: "50%",
                borderRadius: "4px",
              }}
            ></div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "14px",
            }}
          >
            <div>
              <div style={{ fontWeight: "bold" }}>32/40</div>
              <div>Tasks</div>
            </div>
            <div>
              <div style={{ fontWeight: "bold" }}>58%</div>
              <div>Progress</div>
            </div>
            <div>
              <div style={{ fontWeight: "bold" }}>3</div>
              <div>Issues</div>
            </div>
          </div>
          <img
            style={{
              height: "300px",
              width: "700px",
              position: "absolute",
              top: "-60px",
              left: "770px",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            src="https://media.licdn.com/dms/image/v2/D5612AQGn6Bt7fuvKLA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1708803021507?e=2147483647&v=beta&t=HMgFre_gzoakZrnQRWhHdD98MoeudTgC-DzCscT_NMI"
            alt="Efficiency Pie Chart"
          />
        </div>

        <div className="container" style={{ marginTop: "100px" }}>
          <div className="btn btn-primary" onClick={handleShow}>
            Add Employe
          </div>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "24px",
              backgroundColor: "white",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <thead style={{ backgroundColor: "#1E3A8A", color: "white" }}>
              <tr>
                <th style={{ padding: "12px", textAlign: "left" }}>Id</th>
                <th style={{ padding: "12px", textAlign: "left" }}>NAME</th>
                <th style={{ padding: "12px", textAlign: "left" }}>PLACE</th>
                <th style={{ padding: "12px", textAlign: "left" }}>PHONE</th>
                <th style={{ padding: "12px", textAlign: "left" }}>Email</th>
                <th style={{ padding: "12px", textAlign: "left" }}>
                  PASSWORD
                </th>
                <th style={{ padding: "12px", textAlign: "left" }}>EDIT</th>
              </tr>
            </thead>
            <tbody>
              {userData.length > 0
                ? userData.map((value, index) => (
                    <tr
                      key={index}
                      style={{
                        borderBottom: "1px solid #E5E7EB",
                      }}
                    >
                      <td style={{ padding: "12px" }}>{index + 1}</td>
                      <td style={{ padding: "12px" }}>{value.name}</td>
                      <td style={{ padding: "12px" }}>{value.place}</td>
                      <td style={{ padding: "12px" }}>{value.phone}</td>
                      <td style={{ padding: "12px" }}>{value.email}</td>
                      <td style={{ padding: "12px" }}>{value.password}</td>
                      <td style={{ padding: "12px" }}>
                        <div className="btn btn-primary me-2" onClick={() => navigate(`/empdtls/${value.id}`)}>
                          <i className="fa-solid fa-eye"></i>
                        </div>
                        <div className="btn btn-success me-2" onClick={() => navigate(`/empdtls/${value.id}`)}>
                          <i className="fa-solid fa-user-pen"></i>
                        </div>
                        <div
                          onClick={() => onDelete(value.id)}
                          className="btn btn-danger me-2"
                        >
                          <i className="fa-solid fa-trash"></i>
                        </div>
                      </td>
                    </tr>
                  ))
                : "no data found"}
            </tbody>
          </table>
        </div>
      </main>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD Employees</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
            <Form.Control
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              type="text"
              placeholder="Name"
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Place" className="mb-3">
            <Form.Control
              onChange={(e) => {
                setData({ ...data, place: e.target.value });
              }}
              type="text"
              placeholder="Place"
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Phone" className="mb-3">
            <Form.Control
              onChange={(e) => {
                setData({ ...data, phone: e.target.value });
              }}
              type="text"
              placeholder="Phone"
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
            <Form.Control
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
              type="email"
              placeholder="Email"
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Password" className="mb-3">
            <Form.Control
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
              type="text"
              placeholder="Password"
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Calendar Modal */}
      <Modal show={showCalendar} onHide={handleCalendarClose}>
        <Modal.Header closeButton>
          <Modal.Title>Calendar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CalendarView />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCalendarClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Leave Requests Modal */}
      <Modal show={showLeaveRequests} onHide={handleLeaveRequestsClose}>
        <Modal.Header closeButton>
          <Modal.Title>Leave Requests</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-end mb-3">
            <button className="btn btn-danger" onClick={clearProcessedLeaveRequests}>
              Clear Processed Requests
            </button>
          </div>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "24px",
              backgroundColor: "white",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <thead style={{ backgroundColor: "#1E3A8A", color: "white" }}>
              <tr>
                <th style={{ padding: "12px", textAlign: "left" }}>Id</th>
                <th style={{ padding: "12px", textAlign: "left" }}>Employee Name</th>
                <th style={{ padding: "12px", textAlign: "left" }}>Reason</th>
                <th style={{ padding: "12px", textAlign: "left" }}>Status</th>
                <th style={{ padding: "12px", textAlign: "left" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {leaveRequests.length > 0 ? (
                leaveRequests.map((request, index) => (
                  <tr key={index} style={{ borderBottom: "1px solid #E5E7EB" }}>
                    <td style={{ padding: "12px" }}>{index + 1}</td>
                    <td style={{ padding: "12px" }}>{request.empleename}</td>
                    <td style={{ padding: "12px" }}>{request.reason}</td>
                    <td style={{ padding: "12px" }}>{request.status}</td>
                    <td style={{ padding: "12px" }}>
                      <button
                        className="btn btn-success me-2"
                        onClick={() => handleLeaveStatusUpdate(request.id, "approved")}
                      >
                        Approve
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleLeaveStatusUpdate(request.id, "rejected")}
                      >
                        Disapprove
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ padding: "12px", textAlign: "center" }}>
                    No leave requests found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleLeaveRequestsClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Hrportal;