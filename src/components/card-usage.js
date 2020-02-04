import React from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Skeleton from '@material-ui/lab/Skeleton';
import grey from '@material-ui/core/colors/grey';
import Status from './status'


const CardUsage = ({property}) => {
    return (
        <div className="flex-card">
            <div className="flex-card-row">
                <div className="address">{property.address}</div>
                <div><MoreHorizIcon style={{ color: grey[400] }}/></div>
            </div>
            <div className="flex-card-row">
                <div className="usage-trend">Usage Trend</div>
            </div>
            <div className="flex-card-row">
                <div className="gallons clip">
                    -78 gal
                </div>
                <div className="from-last-month">
                    from last month
                </div>
            </div>
            <div className="flex-card-row">
                <div className="trend-chart">Chart</div>
            </div>
            <div className="flex-card-row">
                <div></div>
                <Status status={property.status}/>
            </div>
        </div>
    );
};

export default CardUsage;