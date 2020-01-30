import React from 'react';

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="content-max">
                <div className="nav-links">
                    <div>Overview</div>
                    <div>Usage</div>
                    <div>History</div>
                    <div>Move In/Out</div>
                    <div>Payment</div>
                    <div className="last-link">Contact Us</div>
                    <div className="settings">
                        Settings
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;