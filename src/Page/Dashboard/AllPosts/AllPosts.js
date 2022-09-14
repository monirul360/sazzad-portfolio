import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Managerow from './Managerow';

const AllPosts = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const url = `https://desolate-crag-18556.herokuapp.com/items`;
        fetch(url)
            .then(Res => Res.json())
            .then(data => setItems(data));
    }, []);
    return (
        <div>
            <h1>All Posts</h1>
            <div className="allposts">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Number</th>
                            <th scope="col">Img</th>
                            <th scope="col">Title</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((items, index) => <Managerow
                                key={items._id}
                                items={items}
                                index={index}
                            ></Managerow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllPosts;