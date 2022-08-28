import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Share/Footer/Footer';
import photo from './../../image/About/About.jpg';
const About = () => {
    return (
        <div>
            <section className='about-color'>
                <div className="container">
                    <div className="about">
                        <div className='about-title'>
                            <h1>I design brands with depth, emotion, and
                                impact</h1>
                        </div>
                        <div className="about-description">
                            <img className='img-fluid' src={photo} alt="" />
                            <h2><span className='about-name'>SAZZAD HOSEN</span> Certified Creative Designer</h2>
                            <p>I collaborate with ambitious and creative professionals and business owners to create a stylish
                                and unique brand identity. I have proven designing, problem solving, design thinking, visual
                                communication and strategist skills in creative direction and performance management. My
                                goal is to build great brands for my client with 'Thought Partnership' As a branding expert.</p>
                            <p>I see my time with my clients as a real collaboration of minds working together towards one goal,
                                and many of my clients become real friends. They often tell me that they enjoy the process so
                                much they are sad when the project comes to end!</p>
                            <p>
                                I believe that the power of brand design is to attract and build trust with new customers and
                                retain them.
                            </p>
                            <p>I help startups and established companies to stand out among their competitors by optimizing
                                their brand message through a powerful Design Solution in order to build a wider and more loyal
                                audience.</p>
                            <p>
                                My approach to projects is collaborative. I listen and work closely with my clients to create
                                beautiful, crafted and timeless design solutions, which are unique to each project brief.
                            </p>
                            <p>
                                If you’re ready to expand your business and create an engaging experience for your customers
                                and clients, it’s time to start telling your story through strategic, unique branding.
                            </p>
                        </div>
                    </div>
                    <br /><br /><br />
                    <Link to='/work'>
                        <div className="about-portflow">
                            <div>
                                <p>See Portfolio</p>
                            </div>
                            <div>
                                <b><svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg></b>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default About;