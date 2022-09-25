import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

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
        <>
            <form onSubmit={handleSubmit} autoComplete="off">
                <label htmlFor="name"><p>Your name *</p></label>
                <input
                    id='name'
                    name='name'
                    type="text"
                    required
                />
                <ValidationError
                    prefix="name"
                    field="name"
                    errors={state.errors}
                />
                <label htmlFor="email"><p>Your email address *</p></label>
                <input
                    id='email'
                    name='email'
                    type="email"
                    required
                />
                <ValidationError
                    prefix="email"
                    field="email"
                    errors={state.errors}
                />

                <label htmlFor="sms"><p>Your message *</p></label>
                <textarea
                    id='sms'
                    name='sms'
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
        </>
    );
}
function Form() {
    return (
        <ContactForm />
    );
}

export default Form;