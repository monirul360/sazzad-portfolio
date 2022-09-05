import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Addwork = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        const work = {
            firstName: data.firstName,
            lastName: data.lastName,
            mail: data.mail
        }
        fetch('http://localhost:5000/items', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(work)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Add Product successfull');
                    reset();
                }
                else {
                    toast.error('Failed to Add Product');
                }
            })
    }
    return (
        <div className='addwork'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName", { required: true })} />
                {errors.firstName?.type === 'required' && "First name is required"}

                <input {...register("lastName", { required: true })} />
                {errors.lastName && <p>Last name is required</p>}

                <input {...register("mail", { required: "Email Address is required" })} />
                <p>{errors.mail?.message}</p>

                <input type="submit" />
            </form>
        </div>
    );
};

export default Addwork;