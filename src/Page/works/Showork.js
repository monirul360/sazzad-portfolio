import React from 'react';
import { useNavigate } from 'react-router-dom';
const Showork = ({ work }) => {
    const Navigate = useNavigate();
    const handlework = id => {
        Navigate(`/infowork/${id}`);
    }
    return (

        <div onClick={() => handlework(work?._id)} className="col-md-6 col-lg-4 work-content">
            <div className="work-items">
                <div className='work-img'>
                    <img className='img-fluid' src={work?.photo1} alt="" />
                    <div className='work-hover'>
                        <h3>{work?.Hover}</h3>
                    </div>
                </div>
                <h5 className='lead mt-2'>{work?.Title}</h5>
            </div>
        </div>
    );
};

export default Showork;