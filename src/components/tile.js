import React, { useContext, useEffect, useRef } from 'react'


function Tile({property}) {
    return (
        <div className="box">
            {property.name}<br/>
            ${property.balance}
        </div>
    )
}

export default Tile;