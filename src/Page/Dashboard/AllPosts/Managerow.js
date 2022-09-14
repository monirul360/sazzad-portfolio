import React from 'react';
import { toast } from 'react-toastify';

const Managerow = ({ items, index }) => {
    const { _id, Title, photo1 } = items;
    const handleDelete = () => {
        fetch(`https://desolate-crag-18556.herokuapp.com/myitems/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${items.Title}  Deteted`);
                }
            })
    }
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td> <div class="w-20 rounded-full">
                    <img src={photo1} alt="" />
                </div></td>
                <td>{Title}</td>
                <td><button
                    onClick={() => handleDelete()}
                    className='btn btn-primary'>Delete</button>
                </td>
            </tr>

        </>
    );
};

export default Managerow;