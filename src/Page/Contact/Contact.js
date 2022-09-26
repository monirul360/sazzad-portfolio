import React from 'react';
import Form from './../../Page/Contact/Form';
const Contact = () => {
    return (
        <div>
            <section className='contact p-5'>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className='contact-text  m-4'>
                            <h1>
                                Get in touch
                            </h1>
                            <p>I'm available for new projects and collaborations.
                                Don't hesitate to reach out!
                            </p>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="contact-from m-4">
                            <Form></Form>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Contact;