import React from 'react';
import photo from './../../image/1.jpg';
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
                </div>
            </section>
        </div>
    );
};

export default About;