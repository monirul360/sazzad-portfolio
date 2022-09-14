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
            photo11: data.photo11,
            photo12: data.photo12,
            photo13: data.photo13,
            photo14: data.photo14,
            photo15: data.photo15,
            photo16: data.photo16,
            photo17: data.photo17,
            photo18: data.photo18,
            photo19: data.photo19,
            photo20: data.photo20,
            photo21: data.photo21,
            photo22: data.photo22,
            photo23: data.photo23,
            photo24: data.photo24,
            photo25: data.photo25,
            photo26: data.photo26,
            photo27: data.photo27,
            photo28: data.photo28,
            photo29: data.photo29,
            photo30: data.photo30,
        }
        fetch('https://desolate-crag-18556.herokuapp.com/items', {
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
                    placeholder='Photo url 1'
                    {...register("photo1")}
                />

                <input
                    type="text"
                    placeholder='Photo url 2'
                    {...register("photo2")}
                />
                <input
                    type="text"
                    placeholder='Photo url 3'
                    {...register("photo3")}
                />
                <input
                    type="text"
                    placeholder='Photo url 4'
                    {...register("photo4")}
                />
                <input
                    type="text"
                    placeholder='Photo url 5'
                    {...register("photo5")}
                />
                <input
                    type="text"
                    placeholder='Photo url 6'
                    {...register("photo6")}
                />
                <input
                    type="text"
                    placeholder='Photo url 7'
                    {...register("photo7")}
                />
                <input
                    type="text"
                    placeholder='Photo url 8'
                    {...register("photo8")}
                />
                <input
                    type="text"
                    placeholder='Photo url 9'
                    {...register("photo9")}
                />
                <input
                    type="text"
                    placeholder='Photo url 10'
                    {...register("photo10")}
                />
                <input
                    type="text"
                    placeholder='Photo url 11'
                    {...register("photo11")}
                />
                <input
                    type="text"
                    placeholder='Photo url 12'
                    {...register("photo12")}
                />
                <input
                    type="text"
                    placeholder='Photo url 13'
                    {...register("photo13")}
                />
                <input
                    type="text"
                    placeholder='Photo url 14'
                    {...register("photo14")}
                />
                <input
                    type="text"
                    placeholder='Photo url 15'
                    {...register("photo15")}
                />
                <input
                    type="text"
                    placeholder='Photo url 16'
                    {...register("photo16")}
                />
                <input
                    type="text"
                    placeholder='Photo url 17'
                    {...register("photo17")}
                />
                <input
                    type="text"
                    placeholder='Photo url 18'
                    {...register("photo18")}
                />
                <input
                    type="text"
                    placeholder='Photo url 19'
                    {...register("photo19")}
                />
                <input
                    type="text"
                    placeholder='Photo url 20'
                    {...register("photo20")}
                />
                <input
                    type="text"
                    placeholder='Photo url 21'
                    {...register("photo21")}
                />
                <input
                    type="text"
                    placeholder='Photo url 22'
                    {...register("photo22")}
                />
                <input
                    type="text"
                    placeholder='Photo url 23'
                    {...register("photo23")}
                />
                <input
                    type="text"
                    placeholder='Photo url 24'
                    {...register("photo24")}
                />
                <input
                    type="text"
                    placeholder='Photo url 25'
                    {...register("photo25")}
                />
                <input
                    type="text"
                    placeholder='Photo url 26'
                    {...register("photo26")}
                />
                <input
                    type="text"
                    placeholder='Photo url 27'
                    {...register("photo27")}
                />
                <input
                    type="text"
                    placeholder='Photo url 28'
                    {...register("photo28")}
                />
                <input
                    type="text"
                    placeholder='Photo url 29'
                    {...register("photo29")}
                />
                <input
                    type="text"
                    placeholder='Photo url 30'
                    {...register("photo30")}
                />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Addwork;