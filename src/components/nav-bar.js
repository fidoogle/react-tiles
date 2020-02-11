import React, { useContext, useState } from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import { StoreContext } from '../stores/store'

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('overview')
    const { ['appInfo']: [dataApp, setDataApp] } = useContext(StoreContext);

    const flipCard = (e, setTo) => {
        e.stopPropagation()
        setDataApp({...dataApp, isFlipped: setTo})
    }
    
    return (
        <div className="nav-bar">
            <div className="content-max">
                <div className="nav-links">
                    <div onClick={(e) => {flipCard(e, false); setActiveLink('overview')}} className={(activeLink==='overview')?'active':''}>Overview</div>
                    <div onClick={(e) => {flipCard(e, true); setActiveLink('usage')}} className={(activeLink==='usage')?'active':''}>Usage</div>
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