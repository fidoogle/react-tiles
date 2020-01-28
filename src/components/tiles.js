import React, { useEffect, useState } from 'react';
import Tile from './tile'
import Skeleton from '@material-ui/lab/Skeleton';
import {fetchProperties} from '../services/accounts'

const Tiles = (props) => {
    const [properties, setProperties] = useState(null);
    const [propertiesError, setPropertiesError] = useState(null);

    useEffect(() => {
        fetchProperties(true).then(
            p => {setProperties(p)},
            e => {setPropertiesError(e)}
        )
    }, [properties]);

    return (
        <div className="flex-container">
                {
                    propertiesError ?
                        <div>There is an error</div>
                    :
                    properties ?
                    properties.map((o, index) => 
                        <Tile property={o} key={o.name} index={index+1}/>
                    )
                    : 
                    Array.from(new Array(20)).map((o, index) => 
                    <div className="flex-card-loader" key={index}>
                        <Skeleton variant="rect" width={210} height={118} />
                        <Skeleton width="210px" />
                        <Skeleton width="210px" />
                    </div>
                    )
                }
        </div>
    );
};

export default Tiles;