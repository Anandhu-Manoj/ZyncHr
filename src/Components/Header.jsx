import React from "react";

const Header = () => {
  return (
    <div>
      <nav
        className=""
        style={{
         backgroundImage: "linear-gradient(to right, black, violet)",
          height: "100px",
          position: "fixed", 
          top: "0",
          left:"0",
        
          width: "100%",       
          zIndex: "1000",     
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img style={{marginLeft:"-20px"}}
              src="https://img.freepik.com/premium-vector/metallic-purple-z-letter-logo-gradient-design-illustration_196200-1260.jpg"
              alt="Logo"
              width="200px"
              
              height="90rem"
              className="d-inline-block align-text-top"
            />
          </a>
        </div>
      </nav>
      {/* Adds extra spacing so content is not hidden under the navbar */}
      <div style={{ height: "100px" }}></div>  
    </div>
  );
};

export default Header;

