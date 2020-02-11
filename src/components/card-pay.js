import React, { useContext } from 'react'
import { StoreContext } from '../stores/store'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const CardPay = () => {
    const { ['appInfo']: [dataApp, setDataApp] } = useContext(StoreContext);

    return (
        <>
            {
                dataApp.activeLink==='payment' && 
                <div className="flex-card pay-card">
                    <div className="flex-card-column center pay-card-content">
                        <CheckCircleIcon style={{ fontSize:'100px' }}/>
                        <div>Selected</div>
                    </div>
                </div>
            }
        </>
    );
};

export default CardPay;