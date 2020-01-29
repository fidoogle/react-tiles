import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { StoreContext } from '../stores/store'
import Shuffle from 'shufflejs'

import Tile from './tile'
import Skeleton from '@material-ui/lab/Skeleton';
import {fetchProperties} from '../services/accounts'

const Tiles = (props) => {
    const { ['propertyInfo']: [dataProperties, setDataProperties] } = useContext(StoreContext); //global
    const [properties, setProperties] = useState([]); //local
    const [propertiesError, setPropertiesError] = useState(null);
    let shuffleElement = useRef(null)
    let shuffleSizer = useRef(null)
    let shuffle = null

    useEffect(() => {
        if (!dataProperties.length) {
            fetchProperties(true).then(
                p => {setDataProperties(p); shuffle = new Shuffle(shuffleElement, {
                    itemSelector: '.shuffle-item',
                    sizer: shuffleSizer,
                }); shuffle.resetItems();},
                e => {setPropertiesError(e)}
            )
        }
        setProperties(dataProperties)
        // shuffle = new Shuffle(shuffleElement, {
        //     itemSelector: '.shuffle-item',
        //     sizer: shuffleSizer,
        // });
        // shuffle.resetItems();
    }, [dataProperties]);

    return (
        <div className="shuffle-flex-container" ref={el => { shuffleElement = el }}>
                {
                    propertiesError ?
                        <div>There is an error</div>
                    :
                    properties.length ?
                    properties.map((o) => 
                        <div key={o.id}>
                            <Tile property={o}/>
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
                <div className="shuffle-flex-card" ref={el => { shuffleSizer = el }}></div>
        </div>
    );
};

export default Tiles;