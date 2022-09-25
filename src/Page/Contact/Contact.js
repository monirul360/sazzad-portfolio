import React from 'react';
import Form from './Form';
const Contact = () => {
    return (
        <div>
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
        </div >
    );
};

export default Contact;