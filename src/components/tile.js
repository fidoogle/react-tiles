import React, { useContext, useLayoutEffect, useState } from 'react'
import {fetchBalance} from '../services/accounts'
import Doughnut from './doughnut'
//Material UI
import CircularProgress from '@material-ui/core/CircularProgress'
import CachedIcon from '@material-ui/icons/Cached';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import WarningIcon from '@material-ui/icons/Warning';
//Material Colors
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import lightBlue from '@material-ui/core/colors/lightBlue';
import orange from '@material-ui/core/colors/orange';
import red from '@material-ui/core/colors/red';


function Tile({property}) {
    const [balance, setBalance] = useState(null);
    const [balanceError, setBalanceError] = useState(null);
    const [refreshThis, setRefreshThis] = useState(null);

    useLayoutEffect(() => {
        setBalanceError(null)
        fetchBalance(property.id, true).then(
            p => {setBalance(p)}, // TODO merge into global properties store
            e => {setBalanceError(e)}
        )
    }, [refreshThis]);

    var randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
    };
    const data = {
        labels: [
            'Water',
            'Sewer',
            'Fees'
        ],
        datasets: [{
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
            backgroundColor: [
            '#0e7bb3',
            '#379932',
            '#e68a47'
            ],
            hoverBackgroundColor: [
            '#3d7ee6',
            '#33e621',
            '#efae0e'
            ]
        }]
    };

    return (
        <div className="flex-card">
                <div className="flex-card-column clip">
                    <div className="account clip">Account #: 300104859-1938391-8238</div>
                    <div className="address">{property.address}</div>
                    <div className="balance clip">
                        {
                            balanceError ?
                                <div className="retry" onClick={(e) => setRefreshThis(Math.random)}>
                                    <WarningIcon fontSize="small" style={{ color: red[500] }}/>
                                    <CachedIcon/> Retry
                                </div>
                            :
                                (balance ?
                                    '$'+balance+' Due'
                                : 
                                    <CircularProgress size={20}/>
                                )
                        }
                    </div>
                    <div className="legend">
                        <div><FiberManualRecordIcon fontSize="small" style={{ color: lightBlue[800] }}/> Water</div>
                        <div><FiberManualRecordIcon fontSize="small" style={{ color: green[600] }}/> Sewer</div>
                        <div><FiberManualRecordIcon fontSize="small" style={{ color: orange[700] }}/> Fees</div>
                    </div>
                    <div className="confirmation">
                        Confirmation #: 7577471
                    </div>
                </div>
                <div className="flex-card-column right clip">
                    <div><MoreHorizIcon style={{ color: grey[400] }}/></div>
                    <div className="chart">
                        <Doughnut data={data}/>
                    </div>
                    <div className="status">
                        Pending
                    </div>
                </div>
            
            
        </div>
    )
}

export default Tile;