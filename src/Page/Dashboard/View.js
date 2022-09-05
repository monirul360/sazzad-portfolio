import React from 'react';

const View = () => {
    return (
        <div>
            <div id="view" class="view">
                <div class="view-text">
                    <p id="view-title">View</p>
                    <h2>580</h2>
                    <p></p>
                </div>
                <div class="view-icon">
                    <i class="fa fa-user"></i>
                </div>
            </div>
            <div id="view-users" class="view">
                <div class="view-text">
                    <p id="view-title">USERS</p>
                    <h2>58</h2>
                    <p></p>
                </div>
                <div class="view-icon">
                    <i class="fa fa-user"></i>
                </div>
            </div>
            <div id="view-orders" class="view">
                <div class="view-text">
                    <p id="view-title">ORDERS</p>
                    <h2>580</h2>
                    <p></p>
                </div>
                <div class="view-icon">
                    <i class="fa fa-shopping-cart"></i>
                </div>
            </div>
            <div id="view-message" class="view">
                <div class="view-text">
                    <p id="view-title">MESSAGES</p>
                    <h2>30</h2>
                    <p></p>
                </div>
                <div class="view-icon">
                    <i class="fa fa-envelope"></i>
                </div>
            </div>
            <div class="view-img">
                <img src="icon/view.png" alt="" />
            </div>
        </div>

    );
};

export default View;