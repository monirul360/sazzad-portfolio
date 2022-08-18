import React from 'react';

const Contact = () => {
    return (
        <div>
            <section className='contact-color'>
                <div className="container">
                    <div className="contact">
                        <div className="contact-title">
                            <h1>Want me to work on your
                                project?</h1>
                            <p>I am available for unlimited consultations and reviews during the creative</p>
                            <p>process to ensure you receive the product you want.</p>
                            <h2>Let’s work together on your next project.</h2>
                            <p>Please fill in all the fields and we will reply as soon as possible.</p>
                        </div>
                        <div className="contact-from">
                            <form action="">
                                <input type="text" placeholder='Your name' />
                                <input type="email" placeholder='Email address' />
                                <input type="number" placeholder='Your phone number (Whatsapp, Telegram)' />
                                <input type="text" placeholder='Company name' />
                                <textarea placeholder='Your message'></textarea>
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;