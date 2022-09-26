import React from 'react';
import { Link } from 'react-router-dom';
import about from './../../image/About/sazzad.jpg'
const About = () => {
    return (
        <div>
            <section className='about-section p-5'>
                <div className="about">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-5">
                            <div className="about-img m-3">
                                <img className='img-fluid' src={about} alt="" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="about-text m-2">
                                <p>A certifiend designer working on the designer platform
                                    since 2017. My profession as a designer has been the most
                                    rewarding part of my life. I enjoy the technical side but art
                                    and design have always been my favorites. I help
                                    businesses to stand out among their competitors by
                                    optimizing their brand message through a powerful design
                                    solution in order to build a wider and more loyal audience.</p>
                                <br />
                                <p>
                                    My goal is to build great brands for my client with 'Thought
                                    Partnership' As a branding expert. My approach to projects
                                    is collaborative. I listen and work closely with my clients to
                                    create beautiful, crafted and timeless design solutions,
                                    which are unique to each project brief.
                                </p>
                                <Link to='/'>Resume</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;