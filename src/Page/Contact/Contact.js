import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import ContactFooter from './../../Page/Share/ContactFooter/ContactFooter';
function ContactForm() {
    const [state, handleSubmit] = useForm("meqdorjk");
    if (state.succeeded) {
        return <div className='tnx-contact'>
            <div>
                <h1> Thanks for Contact!</h1>
                <p>I will come to you shortly.</p>
            </div>
        </div>;
    }
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
                            <form onSubmit={handleSubmit} autoComplete="off">
                                <input
                                    id='name'
                                    name='name'
                                    type="text"
                                    placeholder='Your name'
                                    required
                                />
                                <ValidationError
                                    prefix="name"
                                    field="name"
                                    errors={state.errors}
                                />
                                <input
                                    id='email'
                                    name='email'
                                    type="email"
                                    placeholder='Email address'
                                    required
                                />
                                <ValidationError
                                    prefix="email"
                                    field="email"
                                    errors={state.errors}
                                />
                                <input
                                    id='number'
                                    name='number'
                                    type="number"
                                    placeholder='Your phone number (Whatsapp, Telegram)'
                                />
                                <ValidationError
                                    prefix="number"
                                    field="number"
                                    errors={state.errors}
                                />
                                <input
                                    id='company'
                                    name='company'
                                    type="text"
                                    placeholder='Company name'
                                    required
                                />
                                <ValidationError
                                    prefix="company"
                                    field="company"
                                    errors={state.errors}
                                />
                                <textarea
                                    id='sms'
                                    name='sms'
                                    placeholder='Your message'
                                    required
                                >
                                </textarea>
                                <ValidationError
                                    prefix="sms"
                                    field="sms"
                                    errors={state.errors}
                                />
                                <input
                                    type="submit"
                                    value="Submit"
                                    disabled={state.submitting}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <ContactFooter></ContactFooter>
        </div >
    );
}
function Contact() {
    return (
        <ContactForm />
    );
}
export default Contact;