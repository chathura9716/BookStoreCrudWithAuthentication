import mainImage from '../../images/study.svg';
import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="Home-Page bg-dark text-white container-fluid ">
      <div className="row">
        <div
          className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
          style={{ height: "91.5vh" }}
        >
          <div style={{margin: "0px 50px 0px 50px" }}>
            <h2 style={{ fontSize: "80px", }}>
              BOOK STORE 
            </h2>

            <Link to="/books">
              <button className="viewBook my-3">view books</button>
            </Link>
          </div>
        </div>
        <div
          className="col-lg-6 d-flex justify-content-center align-items-center flex-column"
          style={{ height: "91.5vh" }}
        >
          <img 
            className="image-fluid homeimg overflow"
            src={mainImage}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
