import React, { useContext, useLayoutEffect, useState } from 'react';
import { StoreContext } from '../stores/store'

import Tile from './tile'
import Skeleton from '@material-ui/lab/Skeleton';
import {fetchProperties} from '../services/accounts'

const Tiles = (props) => {
    const { ['propertyInfo']: [dataProperties, setDataProperties] } = useContext(StoreContext); //global
    const [properties, setProperties] = useState([]); //local
    const [propertiesError, setPropertiesError] = useState(null);

    useLayoutEffect(() => {
        if (!dataProperties.length) {
            fetchProperties(true).then(
                p => {setDataProperties(p)},
                e => {setPropertiesError(e)}
            )
        }
        setProperties(dataProperties)
    }, [dataProperties]);

    return (
        <div className="flex-container">
                {
                    propertiesError ?
                        <div>There is an error</div>
                    :
                    properties.length ?
                    properties.map((o, index) => 
                        <Tile property={o} key={o.id} index={index+1}/>
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