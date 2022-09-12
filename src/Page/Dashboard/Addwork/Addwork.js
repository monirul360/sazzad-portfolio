import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Addwork = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        const work = {
            Title: data.Title,
            Hover: data.Hover,
            Description: data.Description,
            photo1: data.photo1,
            photo2: data.photo2,
            photo3: data.photo3,
            photo4: data.photo4,
            photo5: data.photo5,
            photo6: data.photo6,
            photo7: data.photo7,
            photo8: data.photo8,
            photo9: data.photo9,
            photo10: data.photo10,
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
                    toast.success('Add successfull');
                    reset();
                }
                else {
                    toast.error('Failed to Add');
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
                <input
                    type="text"
                    placeholder='Photo url'
                    {...register("photo1")}
                />

                <input
                    type="text"
                    placeholder='Photo url'
                    {...register("photo2")}
                />
                <input
                    type="text"
                    placeholder='Photo url'
                    {...register("photo3")}
                />
                <input
                    type="text"
                    placeholder='Photo url'
                    {...register("photo4")}
                />
                <input
                    type="text"
                    placeholder='Photo url'
                    {...register("photo5")}
                />
                <input
                    type="text"
                    placeholder='Photo url'
                    {...register("photo6")}
                />
                <input
                    type="text"
                    placeholder='Photo url'
                    {...register("photo7")}
                />
                <input
                    type="text"
                    placeholder='Photo url'
                    {...register("photo8")}
                />
                <input
                    type="text"
                    placeholder='Photo url'
                    {...register("photo9")}
                />
                <input
                    type="text"
                    placeholder='Photo url'
                    {...register("photo10")}
                />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Addwork;