import React from 'react';
import img from './../../../image/About/sazzad.jpg';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <section>
                <div className="hero-section p-5">
                    <div className="row d-flex justify-content-center align-items-center w-100vh h-100vh">
                        <div className="col-12 col-md-5">
                            <div className="hero-img">
                                <img src={img} alt="" />
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
                                <Link to='/'>Portfolio</Link>
                                <Link to='/'>Hire me</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;