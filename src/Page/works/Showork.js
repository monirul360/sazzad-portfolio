import React from 'react';
import { useNavigate } from 'react-router-dom';
const Showork = ({ work }) => {
    const Navigate = useNavigate();
    const handlework = id => {
        Navigate(`/infowork/${id}`);
    }
    return (
        <>
            <div onClick={() => handlework(work?._id)} className="work-content">
                <div className="work-items">
                    <div className='work-img'>
                        <img className='img-fluid' src={work?.photo1} alt="" />
                        <div className='work-hover'>
                            <h3>{work?.Hover}</h3>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="figure">
                <img className='img-fluid' src={work.photo1} alt="" />
            </div> */}
        </>
    );
};

export default Showork;