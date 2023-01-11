import React from "react";
import img1 from "./1.jpg";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import Nav from "./../Page/Share/Nav/Nav";
const Post1 = () => {
  return (
    <div>
      <div className="container">
        <Nav></Nav>

        <div className="infowork">
          {/* items Title} */}
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            mollitia.
          </h2>
          {/* items?.Description */}
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            doloribus illum impedit provident eaque iusto aliquam labore fuga
            laborum. Fuga omnis harum aspernatur mollitia dolorum asperiores
            explicabo praesentium maiores exercitationem?
          </p>
          {/* img section */}
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img5} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            aliquid?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post1;
