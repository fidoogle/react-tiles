import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { StoreContext } from '../stores/store'
import CardBalance from './card-balance'
import CardUsage from './card-usage'
import {fetchProperties} from '../services/accounts'
import CardPay from './card-pay';
import CardSkeleton from './card-skeleton';
import GridSkeleton from './grid-skeleton';
import GridView from './grid-view'
import CircularProgress from '@material-ui/core/CircularProgress'
import ReactCardFlip from 'react-card-flip';


const Tiles = (props) => {
    const { ['appInfo']: [dataApp, setDataApp] } = useContext(StoreContext);
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
        <>
        <div className="flex-css">
            <div className="content-max">
                {dataApp.viewAs==='tiles' &&
                    <div className="flex-card-container">
                        {
                            propertiesError ?
                                <div>There is an error</div>
                            :
                            properties.length ?
                            properties.map((o) => 
                                <div key={o.id} className="pay-card-parent">
                                    <ReactCardFlip isFlipped={dataApp.isFlipped} flipDirection="horizontal">
                                        <CardBalance property={o} key={o.id}/>
                                        <CardUsage property={o} key={o.id}/>
                                    </ReactCardFlip>
                                    <CardPay id={o.id}/>
                                </div>
                            )
                            : 
                            Array.from(new Array(20)).map((o, index) => 
                            <React.Fragment key={index}>
                                <CardSkeleton/>
                            </React.Fragment>
                            )
                        }
                    </div>
                }
            </div>
        </div>
        {dataApp.viewAs==='grid' && (
            propertiesError ?
                <div>There is an error</div>
            :
            properties.length ?
                <GridView properties={properties}/>
            :
                Array.from(new Array(20)).map((o, index) => 
                    <React.Fragment key={index}>
                        <GridSkeleton/>
                    </React.Fragment>
                )
        )}
        </>
    );
};

export default Tiles;