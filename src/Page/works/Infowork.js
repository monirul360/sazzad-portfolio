import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Infowork = () => {
    const { id } = useParams();
    const [items, setItems] = useState({});
    useEffect(() => {
        const url = `https://desolate-crag-18556.herokuapp.com/items/${id}`;
        fetch(url)
            .then(Res => Res.json())
            .then(data => setItems(data));
    }, [id]);
    return (
        <div>
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
                    <img src={items?.photo11} alt="" />
                    <img src={items?.photo12} alt="" />
                    <img src={items?.photo13} alt="" />
                    <img src={items?.photo14} alt="" />
                    <img src={items?.photo15} alt="" />
                    <img src={items?.photo16} alt="" />
                    <img src={items?.photo17} alt="" />
                    <img src={items?.photo18} alt="" />
                    <img src={items?.photo19} alt="" />
                    <img src={items?.photo20} alt="" />
                    <img src={items?.photo21} alt="" />
                    <img src={items?.photo22} alt="" />
                    <img src={items?.photo23} alt="" />
                    <img src={items?.photo24} alt="" />
                    <img src={items?.photo25} alt="" />
                    <img src={items?.photo26} alt="" />
                    <img src={items?.photo27} alt="" />
                    <img src={items?.photo28} alt="" />
                    <img src={items?.photo29} alt="" />
                    <img src={items?.photo30} alt="" />

                </div>
            </div>
        </div>
    );
};

export default Infowork;