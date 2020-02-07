import React, { useContext } from 'react'
import { StoreContext } from '../stores/store'
import Status from './status'
import Type from './type'
import FlipMove from 'react-flip-move'
import GridBalance from './grid-balance'
import GridUsage from './grid-usage'
import ReactCardFlip from 'react-card-flip'


const GridView = ({properties}) => {
    const { ['appInfo']: [dataApp, setDataApp] } = useContext(StoreContext);

    return (
        <>
            <div className="flex-css">
                <div className="content-max">
                    <ReactCardFlip isFlipped={dataApp.isFlipped} flipDirection="vertical">
                        <div className="grid-row header">
                            <div></div>
                            <div>Name</div>
                            <div>Address</div>
                            <div>Balance</div>
                            <div>Status</div>
                            <div>Type</div>
                        </div>
                        <div className="grid-row header">
                            <div></div>
                            <div>Address</div>
                            <div>Usage</div>
                            <div>Gallons</div>
                            <div>Status</div>
                            <div>Type</div>
                        </div>
                    </ReactCardFlip>
                </div>
            </div>
            <FlipMove>
            {!dataApp.shuffle && properties.length &&
                properties.map((o, index) => 
                    <React.Fragment key={o.id}>
                        <ReactCardFlip isFlipped={dataApp.isFlipped} flipDirection="vertical">
                            <GridBalance property={o} index={index+1}/>
                            <GridUsage property={o} index={index+1}/>
                        </ReactCardFlip>
                    </React.Fragment>
                )
            }
            {dataApp.shuffle && properties.length &&
                properties.map((o, index) => 
                    (dataApp.isFlipped) ?
                        <div className="flex-css" key={o.id}>
                            <div className="content-max">
                            <div className={`grid-row ${(index%2===0) ? "even" : ""}`}>
                                    <div>{index+1}</div>
                                    <div>{o.name}</div>
                                    <div>{o.address}</div>
                                    <div>{o.balance}</div>
                                    <div><Status status={o.status}/></div>
                                    <div><Type type={o.type}/></div>
                                </div>
                            </div>
                        </div>
                    :
                        <div className="flex-css" key={o.id}>
                            <div className="content-max">
                            <div className={`grid-row ${(index%2===0) ? "even" : ""}`}>
                                    <div>{index+1}</div>
                                    <div>{o.address}</div>
                                    <div>usage chart goes here</div>
                                    <div>-78</div>
                                    <div><Status status={o.status}/></div>
                                    <div><Type type={o.type}/></div>
                                </div>
                            </div>
                        </div>
                )
            }
            </FlipMove>
        </>
    );
};

export default GridView;