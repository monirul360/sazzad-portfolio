import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../Share/Nav/Nav';

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
            <Nav></Nav>
            <div className="container">
                <div className="infowork">
                    <h2>{items?.Title}</h2>
                    <p>
                        {
                            items?.Description
                        }
                    </p>
                    <img src={items?.photo1} alt="" />
                    <img src={items?.photo2} alt="" />
                    <img src={items?.photo3} alt="" />
                    <img src={items?.photo4} alt="" />
                    <img src={items?.photo5} alt="" />
                    <img src={items?.photo6} alt="" />
                    <img src={items?.photo7} alt="" />
                    <img src={items?.photo8} alt="" />
                    <img src={items?.photo9} alt="" />
                    <img src={items?.photo10} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Infowork;