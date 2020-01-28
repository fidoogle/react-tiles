import React from 'react';
import SortIcon from '@material-ui/icons/Sort';
import orange from '@material-ui/core/colors/orange';


const search = () => {
    const sortAmount = () => {
        
    }
    const sortStreet = () => {
        
    }
    return (
        <div className="search">

            <div className="search-option">
                <div className="search-top">
                    Search by:
                </div>
                <div className="search-bottom">
                    <div>Sort</div>
                    <div className="search-row">
                        <div onClick={sortAmount} className="sort">Amount &nbsp;<SortIcon fontSize="small" style={{ color: orange[700] }}/></div>
                        <div className="spacer">&nbsp;</div>
                        <div onClick={sortStreet} className="sort">Street Name &nbsp;<SortIcon fontSize="small" style={{ color: orange[700] }}/></div>
                    </div>
                </div>
            </div>

            <div className="search-option">
                <div className="search-top">
                    &nbsp;
                </div>
                <div className="search-bottom">
                    Type
                    <div className="search-row">
                        <input type="checkbox"/>Checking
                        <div className="spacer">&nbsp;</div>
                        <div className="search-row"><input type="checkbox"/>Credit Card</div>
                    </div>
                </div>
            </div>

            <div className="search-option">
                <div className="search-top">
                    &nbsp;
                </div>
                <div className="search-bottom">
                    Amount
                    <div className="search-row">
                        <input type="text" placeholder="$"/> to &nbsp; &nbsp;<input type="text" placeholder="$"/>
                    </div>
                </div>
            </div>

            <div className="search-option">
                <div className="search-top">
                    &nbsp;
                </div>
                <div className="search-bottom">
                    Status
                    <div className="search-row">
                        <input type="checkbox"/>Received
                        <div className="spacer">&nbsp;</div>
                        <div className="search-row"><input type="checkbox"/>Pending</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default search;