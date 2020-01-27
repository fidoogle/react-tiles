import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import {fetchBalance} from '../services/accounts'
import CachedIcon from '@material-ui/icons/Cached';
import WarningIcon from '@material-ui/icons/Warning';
import red from '@material-ui/core/colors/red';


function Tile({property}) {
    const [balance, setBalance] = useState(null);
    const [balanceError, setBalanceError] = useState(null);
    const [refreshThis, setRefreshThis] = useState(null);

    useLayoutEffect(() => {
        setBalanceError(null)
        fetchBalance(property.id, true).then(
            p => {setBalance(p)},
            e => {setBalanceError(e)}
        )
    }, [refreshThis]);

    return (
        <div className="flex-card">
            {property.name}<br/>
            {property.address}<br/>
            {
                balanceError ?
                    <div><WarningIcon fontSize="small" style={{ color: red[500] }}/>
                        <br/>Balance missing
                        <br/><div onClick={(e) => setRefreshThis(Math.random)} style={{cursor: 'pointer'}}><CachedIcon/> Retry</div>
                    </div>
                :
                    (balance ?
                        '$'+balance
                    : 
                        <CircularProgress size={30}/>
                    )
            }
        </div>
    )
}

export default Tile;