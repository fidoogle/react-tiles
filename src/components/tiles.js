import React, { useEffect, useState } from 'react';
import Tile from './tile'
import CircularProgress from '@material-ui/core/CircularProgress';
import {fetchProperties} from '../services/accounts'

const Tiles = (props) => {
    const [properties, setProperties] = useState(null);
    const [propertiesError, setPropertiesError] = useState(null);

    useEffect(() => {
        fetchProperties().then(
            p => {setProperties(p)},
            e => {setPropertiesError(e)}
        )
    }, [properties]);

    return (
        <div id="container">
            
                {
                    propertiesError ?
                        <div>There is an error</div>
                    :
                    properties ?
                    properties.map((o, index) => 
                        <Tile property={o} key={o.name} index={index+1}/>
                    )
                    : <CircularProgress />
                }
        </div>
    );
};

export default Tiles;