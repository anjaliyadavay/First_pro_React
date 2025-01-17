import React from "react";
import "./Card.css";
import img from "./img.jpeg";

const Card = () => {
  return (
    <>

{/* <!-- About  --> */}
     <div class="container">
        <div class="left-con">
          <img src={img} alt="" />
        </div>
        <div class="right-con">
            <h1>Anjali Yadav</h1>
            <h2>Web Developer | UI/UX Designer</h2>
            <p>A web developer passionate about crafting responsive, user-friendly, and visually appealing websites.
                I specialize in front-end and back-end development to bring ideas to life.
                Always learning, experimenting, and staying updated with the latest web technologies.</p>
            <div>
            <div className="btn">
          <button>Download CV</button>
        </div>
            </div>
        </div>
     </div>
    </>
  );
};

export default Card;
