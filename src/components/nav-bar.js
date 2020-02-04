import React, { useContext } from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import { StoreContext } from '../stores/store'

const NavBar = () => {
    const { ['appInfo']: [dataApp, setDataApp] } = useContext(StoreContext);

    const flipCard = (e) => {
        e.stopPropagation()
        setDataApp({...dataApp, isFlipped: !dataApp.isFlipped})
    }
    
    return (
        <div className="nav-bar">
            <div className="content-max">
                <div className="nav-links">
                    <div>Overview</div>
                    <div onClick={(e) => {flipCard(e)}}>Usage</div>
                    <div>History</div>
                    <div>Move In/Out</div>
                    <div>Payment</div>
                    <div className="last-link">Contact Us</div>
                    <div className="settings">
                        <SettingsIcon fontSize="large"/>
                        <div>&nbsp;Settings</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;