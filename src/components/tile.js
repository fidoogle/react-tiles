import React, { useEffect, useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import {fetchBalance} from '../services/accounts'


function Tile({property}) {
    const [balance, setBalance] = useState(null);
    const [balanceError, setBalanceError] = useState(null);

    useEffect(() => {
        fetchBalance(property.id, true).then(
            p => {setBalance(p)},
            e => {setBalanceError(e)}
        )
    }, [balance]);

    return (
        <div className="flex-card">
            {property.name}<br/>
            {property.address}<br/>
            {
                balanceError ?
                    <div>X retry</div>
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