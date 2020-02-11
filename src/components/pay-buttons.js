import React, { useContext } from 'react'
import { StoreContext } from '../stores/store'

const PayButtons = () => {
    const { ['appInfo']: [dataApp, setDataApp] } = useContext(StoreContext);

    return (
        <>
            {
                dataApp.activeLink==='payment' && 
                <div className="pay-buttons">
                    <div className="content-max">
                        <div className="multiple">Select Accounts</div>
                        <div className="all">Pay All Accounts</div>
                    </div>
                </div>
            }
        </>
    );
};

export default PayButtons;