import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1>welcome my Dashboard</h1>
            <ul>
                <li><Link to='/Addwork'>Add work</Link></li>
                <li><Link to='/Addwork'>Add work</Link></li>
            </ul>
        </div>
    );
};

export default Dashboard;