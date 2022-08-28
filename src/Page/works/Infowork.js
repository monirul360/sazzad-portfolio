import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Infowork = () => {
    const { id } = useParams();
    const [items, setItems] = useState({});
    useEffect(() => {
        const url = 'https://raw.githubusercontent.com/monirul360/test/main/work.json';
        fetch(url)
            .then(Res => Res.json())
            .then(data => setItems(data));
    }, []);
    return (
        <div>

        </div>
    );
};

export default Infowork;