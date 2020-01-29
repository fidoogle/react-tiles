import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { StoreContext } from '../stores/store'
import FlipMove from 'react-flip-move';
import Tile from './tile'
import Skeleton from '@material-ui/lab/Skeleton';
import {fetchProperties} from '../services/accounts'

const Tiles = (props) => {
    const { ['propertyInfo']: [dataProperties, setDataProperties] } = useContext(StoreContext); //global
    const [properties, setProperties] = useState([]); //local
    const [propertiesError, setPropertiesError] = useState(null);

    useEffect(() => {
        if (!dataProperties.length) {
            fetchProperties(true).then(
                p => {setDataProperties(p)},
                e => {setPropertiesError(e)}
            )
        }
        setProperties(dataProperties)
    }, [dataProperties]);

    return (
        <FlipMove className="flex-container">
                {
                    propertiesError ?
                        <div>There is an error</div>
                    :
                    properties.length ?
                    properties.map((o) => 
                        <div key={o.id}>
                            <Tile property={o} key={o.id}/>
                        </div>
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
        </FlipMove>
    );
};

export default Tiles;