import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Share/Footer/Footer';
import home from './../../../image/home.png';
import Nav from './../../Share/Nav/Nav';
const Home = () => {
    return (
        <div>
            <Nav></Nav>
            {/* Hero Section  */}
            <section class="hero">
                <div class="container">
                    <div class="row">
                        <div>
                            <h1>SAZZAD HOSEN</h1>
                        </div>
                        <div>
                            <p>My approach to projects is
                                collaborative. I listen and work
                                closely with my clients to create
                                beautiful, crafted and timeless
                                design solutions, which are unique
                                to each project brief.</p>
                        </div>
                    </div>
                    <div class="see-link mt-3 mt-md-5">
                        <Link to="/work"><span>See my works</span> <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg> </Link>
                    </div>
                </div>
            </section>

            {/* Brand Section  */}
            <section class="brand">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-6 brand-text">
                            <h2>Building strong brands with passion</h2>
                        </div>
                        <div class="col-12 col-lg-6 brand-icon">
                            <div class="brand-item">
                                <img src={home} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services  */}
            <section class="services">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-12">
                            <div class="tittle">
                                <h2>Services</h2>
                            </div>
                        </div>
                        <div class="content  col-lg-12">
                            <div class="row">
                                <div class="services-item  col-md-6 col-lg-6">
                                    <div class="services-box">
                                        <h3>BRAND IDENTITY</h3>
                                        <p>
                                            I creatively tell the story of who
                                            you are or define what your
                                            brand stands for with
                                            personalized branding that
                                            reflects personality, builds
                                            awareness and gains loyalty.
                                        </p>
                                        <span></span>
                                    </div>
                                </div>
                                <div class="services-item col-md-6 col-lg-6">
                                    <div class="services-box">
                                        <h3>LOGO DESIGN</h3>
                                        <p>
                                            I will design custom-made
                                            modern creative eye-catching
                                            logos for your business that will
                                            talk about your story and are
                                            easy to memorize for your
                                            audience.
                                        </p>
                                        <span></span>
                                    </div>
                                </div>
                                <div class="services-item  col-md-6 col-lg-6">
                                    <div class="services-box">
                                        <h3>UI DESIGN</h3>
                                        <p>
                                            My approach to projects is collaborative. I listen and work
                                            closely with my clients to create beautiful, crafted and
                                            timeless design solutions, which are unique to each project
                                            brief.
                                        </p>
                                        <span></span>
                                    </div>
                                </div>
                                <div class="services-item  col-md-6 col-lg-6">
                                    <div class="services-box">
                                        <h3>WEB DESIGN</h3>
                                        <p>
                                            I custom build every website
                                            in-house ourselves and juice
                                            each one up with 6 months of
                                            free web hosting. No templates
                                            are ever used during the

                                            process.
                                        </p>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial  */}
            <section class="testimonial">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-12">
                            <div class="tittle">
                                <h2 className='mb-5 pb-5'>CLIENT TESTIMONIALS</h2>
                            </div>
                        </div>
                        <div class="col-12 col-md-12">
                            {/* tart  carousel */}
                            <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    {/* 1st Item  */}
                                    <div class="carousel-item active">
                                        <div class="testimonial-content">
                                            <h3>CLIENT NAME</h3>
                                            <p>
                                                My approach to projects is collaborative. I listen and
                                                work closely with my clients to create beautiful, crafted
                                                and timeless design solutions, which are unique to each
                                                project brief. My approach to projects is collaborative. I
                                                listen and work closely with my clients to create
                                                beautiful, crafted and timeless design solutions, which
                                                are unique to each project brief
                                            </p>
                                        </div>
                                    </div>
                                    {/* 2nd Item  */}
                                    <div class="carousel-item">
                                        <div class="testimonial-content">
                                            <h3>CLIENT NAME</h3>
                                            <p>
                                                My approach to projects is collaborative. I listen and
                                                work closely with my clients to create beautiful, crafted
                                                and timeless design solutions, which are unique to each
                                                project brief. My approach to projects is collaborative. I
                                                listen and work closely with my clients to create
                                                beautiful, crafted and timeless design solutions, which
                                                are unique to each project brief
                                            </p>
                                        </div>
                                    </div>
                                    {/* 3ed Item  */}
                                    <div class="carousel-item">
                                        <div class="testimonial-content">
                                            <h3>CLIENT NAME</h3>
                                            <p>
                                                My approach to projects is collaborative. I listen and
                                                work closely with my clients to create beautiful, crafted
                                                and timeless design solutions, which are unique to each
                                                project brief. My approach to projects is collaborative. I
                                                listen and work closely with my clients to create
                                                beautiful, crafted and timeless design solutions, which
                                                are unique to each project brief
                                            </p>
                                        </div>
                                    </div>
                                    {/* Item End  */}
                                </div>
                                {/* Carousel Button  */}
                                <div class="carousel-button">
                                    <button
                                        class="carousel-control-prev"
                                        type="button"
                                        data-bs-target="#myCarousel"
                                        data-bs-slide="prev"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="50" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                        </svg>
                                    </button>
                                    <button
                                        class="carousel-control-next"
                                        type="button"
                                        data-bs-target="#myCarousel"
                                        data-bs-slide="next"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="50" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                        </svg>                                    </button>
                                </div>
                            </div>
                            {/* END carousel  */}
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Home;