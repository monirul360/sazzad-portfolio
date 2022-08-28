import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from './../../image/1.jpg';
const Showork = ({ work }) => {
    const Navigate = useNavigate();
    const handlework = id => {
        Navigate(`/infowork/${id}`);
    }
    return (

        <div onClick={() => handlework(work?.id)} className="col-md-6 col-lg-4 work-content">
            <div className="work-items">
                <div className='work-img'>
                    <img className='img-fluid' src={img} alt="" />
                    <div className='work-hover'>
                        <h3>See case study</h3>
                    </div>
                </div>
                <h5 className='lead mt-2'>Coffee Co</h5>
            </div>
        </div>
    );
};

export default Showork;