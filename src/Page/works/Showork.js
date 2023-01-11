import React from "react";
import { Link } from "react-router-dom";
import img1 from "./../../Post1/1.jpg";
import img2 from "./../../Post2/6.png";
const Showork = ({ work }) => {
  // const Navigate = useNavigate();
  // const handlework = id => {
  //     Navigate(`/infowork/${id}`);
  // }
  return (
    <>
      {/* <div onClick={() => handlework(work?._id)} className="work-content">
                <div className="work-items">
                    <div className='work-img'>
                        <img className='img-fluid' src={work?.photo1} alt="" />
                        <div className='work-hover'>
                            <h3>{work?.Hover}</h3>
                        </div>
                    </div>
                </div>
            </div> */}
      {/* <div className="figure">
                <img className='img-fluid' src={work.photo1} alt="" />
            </div> */}
      {/* post start 1*/}
      <Link to="/post1">
        <div className="work-content">
          <div className="work-items">
            <div className="work-img">
              <img className="img-fluid" src={img1} alt="" />
              <div className="work-hover">
                <h3>Lorem ipsum dolor sit</h3>
              </div>
            </div>
          </div>
        </div>
      </Link>
      {/* post end 1*/}
      {/* post start 2*/}
      <Link to="/Post2">
        <div className="work-content">
          <div className="work-items">
            <div className="work-img">
              <img className="img-fluid" src={img2} alt="" />
              <div className="work-hover">
                <h3>my name</h3>
              </div>
            </div>
          </div>
        </div>
      </Link>
      {/* post end 2*/}
    </>
  );
};

export default Showork;
