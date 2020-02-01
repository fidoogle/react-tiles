import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { StoreContext } from '../stores/store'
import FlipMove from 'react-flip-move';
import Tile from './tile'
import {fetchProperties} from '../services/accounts'
import CardSkeleton from './card-skeleton';
import ListItem from './list-item'

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
        <div className="flex-css">
            <div className="content-max">
                {dataApp.viewAs==='grid' &&
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
                }
                {dataApp.viewAs==='list' && (
                    propertiesError ?
                        <div>There is an error</div>
                    :
                    properties.length ?
                        (<table className="tableview">
                            <thead><tr>
                                <th></th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Balance</th>
                                <th>Status</th>
                                <th>Type</th>
                            </tr></thead>
                            <tbody>
                            {properties.map((o, index) => 
                                <ListItem property={o} key={o.id} index={index+1}/>
                            )}
                        </tbody></table>)
                    :
                    Array.from(new Array(20)).map((o, index) => 
                        <table key={index}>
                            <tr><td>Loading...</td></tr>
                        </table>
                        )
                )}
            </div>
        </div>
    );
};

export default Tiles;