import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { StoreContext } from '../stores/store'
import FlipMove from 'react-flip-move';
import Tile from './tile'
import {fetchProperties} from '../services/accounts'
import CardSkeleton from './card-skeleton';

const Tiles = (props) => {
    const { ['propertyInfo']: [globalProperties, setGlobalProperties] } = useContext(StoreContext); //global
    const { ['propertyInfoIntact']: [globalPropertiesIntact, setGlobalPropertiesIntact] } = useContext(StoreContext); //original global data
    const [properties, setProperties] = useState([]); //local
    const [propertiesError, setPropertiesError] = useState(null);

    useEffect(() => {
        if (!globalPropertiesIntact.length) {
            fetchProperties(true).then(
                p => {setGlobalProperties(p); setGlobalPropertiesIntact(p)},
                e => {setPropertiesError(e)}
            )
        }
        setProperties(globalProperties)
    }, [globalProperties]);

    return (
        <div className="flex-css">
            <div className="content-max">
                <FlipMove className="flex-card-container">
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
                        <div className="flex-card" key={index}>
                            <CardSkeleton key={index}/>
                        </div>
                        )
                    }
                </FlipMove>
            </div>
        </div>
    );
};

export default Tiles;