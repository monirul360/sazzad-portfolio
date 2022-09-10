import React from 'react';
import Form from './Form';
import ContactFooter from './../Share/ContactFooter/ContactFooter';
import Nav from '../Share/Nav/Nav';
const Contact = () => {
    return (
        <div>
            <Nav></Nav>
            <section className='contact-color'>
                <div className="container">
                    <div className="contact">
                        <div className="contact-title">
                            <h1>Want me to work on your
                                project?</h1>
                            <h2>Let’s work together</h2>
                            <p>Please fill in all the fields and we will reply as soon as possible.</p>
                        </div>
                        <div className="contact-from">
                            <Form></Form>
                        </div>
                    </div>
                </div>
            </section>
            <ContactFooter></ContactFooter>
        </div >
    );
};

export default Contact;