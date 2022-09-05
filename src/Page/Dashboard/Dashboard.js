import React from 'react';
import { Outlet } from 'react-router-dom';
import DashSiteBar from './DashSiteBar';
import DashtopBar from './DashtopBar';
const Dashboard = () => {
    return (
        <div>
            <DashtopBar></DashtopBar>
            <section id="content-flex">
                <div class="content-flex">
                    <div class="site-bar">
                        <DashSiteBar></DashSiteBar>
                    </div>
                    <div class="content-area">
                        <div class="Dashboard">
                            <p>Dashboard</p>
                        </div>
                        <div class="content-section">
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;