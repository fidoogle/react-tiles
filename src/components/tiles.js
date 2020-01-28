import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../stores/store'

import Tile from './tile'
import Skeleton from '@material-ui/lab/Skeleton';
import {fetchProperties} from '../services/accounts'

const Tiles = (props) => {
    const { ['propertyInfo']: [dataProperties, setDataProperties] } = useContext(StoreContext);
    const [propertiesError, setPropertiesError] = useState(null);

    useEffect(() => {
        fetchProperties(true).then(
            p => {setDataProperties([...dataProperties, ...p])},
            e => {setPropertiesError(e)}
        )
    }, [dataProperties]);

    return (
        <div className="flex-container">
                {
                    propertiesError ?
                        <div>There is an error</div>
                    :
                    dataProperties.length ?
                    dataProperties.map((o, index) => 
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