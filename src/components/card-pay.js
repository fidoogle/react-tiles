import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const CardPay = () => {
    return (
        <div className="flex-card pay-card">
            <div className="flex-card-column center pay-card-content">
                <CheckCircleIcon style={{ fontSize:'100px' }}/>
                <div>Selected</div>
            </div>
        </div>
    );
};

export default CardPay;