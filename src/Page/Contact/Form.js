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
        </>
    );
}
function Form() {
    return (
        <ContactForm />
    );
}

export default Form;