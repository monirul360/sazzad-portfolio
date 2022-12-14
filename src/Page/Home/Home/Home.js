import React from 'react';
import img from './../../../image/About/sazzad.jpg';
import { Link } from 'react-router-dom';
import Nav from '../../Share/Nav/Nav';
const Home = () => {
    return (
        <div>
            <section>
                <Nav></Nav>
                <div className="hero-section container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-12 col-md-5">
                            <div className="hero-img m-3">
                                <img className='img-fluid' src={img} alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-md-7">
                            <div className="hero-text">
                                <h1>
                                    A certified designer
                                    helping businesses
                                    with creative design
                                    solutions.
                                </h1>
                            </div>
                            <div className="hero-button">
                                <Link to='/work'>Portfolio</Link>
                                <Link to='/contact'>Hire me</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
}

export default Home;