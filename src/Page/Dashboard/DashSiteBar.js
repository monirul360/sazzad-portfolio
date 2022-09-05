import React from 'react';
import { Link } from 'react-router-dom';

const DashSiteBar = () => {
    return (
        <div>
            <div class="site-bar-dd">
                <Link to="/"><i class="fa fa-bars"></i><span>Dashboard</span></Link>
            </div>

            <div class="site-bar-menu">
                <ul>
                    <li><Link to="/dashboard"> <i class="fa fa-eye"></i><span>View Web</span></Link></li>

                    <li><Link to="/dashboard/addwork"><i class="fa fa-plus-square"></i><span>Posts</span><b id="posts-bar" class="fa fa-angle-right"></b></Link></li>

                    <li><Link to="/dashboard"> <i class="fa fa-compass"></i><span>Media</span></Link></li>

                    <li><Link to="/dashboard"> <i class="fa fa-paste"></i><span>Pages</span><b id="page-bar" class="fa fa-angle-right"></b></Link></li>

                    <li><Link to="/dashboard"><i class="fa fa-photo"></i><span>Slider</span></Link></li>

                    <li><Link to="/dashboard"><i class="fa fa-shopping-cart"></i><span>Order</span><b id="order-bar" class="fa fa-angle-right"></b></Link></li>

                    <li><Link to="/dashboard"> <i class="fa fa-user"></i><span>Users</span><b id="user-bar" class="fa fa-angle-right"></b></Link></li>

                    <li><Link to="/dashboard"><i class="fa fa-compass"></i><span>SEO</span><b id="seo-bar" class="fa fa-angle-right"></b></Link></li>

                    <li><Link to="/dashboard"> <i class="fa fa-cog"></i><span>Settings</span></Link></li>
                </ul>
            </div>
        </div >
    );
};

export default DashSiteBar;