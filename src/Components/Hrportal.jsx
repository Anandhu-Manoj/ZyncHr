import React from "react";

const Hrportal = () => {
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
            style={{
              backgroundColor: "#FBBF24",
              padding: "8px 16px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Schedule Meeting
          </button>
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

        <div className="container " style={{ marginTop: "100px" }}>
          <div className="btn btn-primary">Add Employe</div>
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
                <th style={{ padding: "12px", textAlign: "left" }}>EDIT</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid #E5E7EB ",marginLeft:"500px" }}>
                <td style={{ padding: "12px" }}>1</td>
                <td style={{ padding: "12px" }}>ANANDHU</td>
                <td style={{ padding: "12px" }}>TRIVANDRUM</td>
                <td style={{ padding: "12px" }}>8129438086</td>
                <td style={{ padding: "12px", }}>
                  <div className="btn btn-primary me-2"><i className="fa-solid fa-eye"></i></div>
                  <div className="btn btn-success me-2"><i className="fa-solid fa-user-pen"></i></div>
                  <div className="btn btn-danger me-2"><i className="fa-solid fa-trash"></i></div>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Hrportal;
