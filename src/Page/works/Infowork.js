import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Infowork = () => {
    const { id } = useParams();
    const [items, setItems] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/items/${id}`;
        fetch(url)
            .then(Res => Res.json())
            .then(data => setItems(data));
    }, []);
    return (
        <div>
            <div className="container">
                <div className="infowork">
                    <img src={items.img} alt="" />
                    <img src={items.img} alt="" />
                    <img src={items.img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Infowork;