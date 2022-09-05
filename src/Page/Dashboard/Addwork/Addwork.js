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
            <h2>Add Work</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder='Title'
                    {...register("Title", { required: true })}
                />

                <input
                    type="text"
                    placeholder='Hover title'
                    {...register("Hover", { required: true })}
                />
                <textarea
                    placeholder='Description'
                    {...register("Description", { required: true })}
                ></textarea>
                <input type="file" name="" id="" />
                {/*  */}

                <input type="submit" />
            </form>
        </div>
    );
};

export default Addwork;