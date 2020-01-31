import React, { useContext, useState } from 'react';
import { StoreContext } from '../stores/store'

import SortIcon from '@material-ui/icons/Sort'
import orange from '@material-ui/core/colors/orange'


const Search = () => {
    const [amountAscending, setAmountAscending] = useState(false);
    const [streetAscending, setStreetAscending] = useState(false);
    const [selectedType, setSelectedType] = useState('all');
    const { ['propertyInfo']: [dataProperties, setDataProperties] } = useContext(StoreContext);

    const filterByType = (e) => {
        setSelectedType(e.target.value)
        let temp = [...dataProperties] //clone, avoids mutating state directly
        setDataProperties(
            temp.filter(o => {
                if (e.target.value==='all') return true;
                return (o.type===e.target.value);
            })
        )
    }
    const sortAmount = (e) => {
        e.stopPropagation()
        let temp = [...dataProperties] //clone, avoids mutating state directly
        if (amountAscending) {
            temp.sort((a, b) => {
                try {
                    return a.balance - b.balance
                } catch(err) {
                    return 0
                }
            });
        } else {
            temp.sort((a, b) => {
                try {
                    return b.balance - a.balance
                } catch(err) {
                    return 0
                }
            });
        }
        setDataProperties(temp)
        setAmountAscending(!amountAscending)
    }
    const sortStreet = (e) => {
        e.stopPropagation()
        let temp = [...dataProperties] //clone, avoids mutating state directly
        if (streetAscending) { 
            temp.sort((a, b) => {
                try {
                    const streetA = a.address.toUpperCase().split(' ')[1]
                    const streetB = b.address.toUpperCase().split(' ')[1]
                    if (streetA > streetB) { return 1 }
                    else if (streetA < streetB) { return -1 }
                    return 0
                } catch(err) {
                    return 0
                }
            });
        } else {
            temp.sort((a, b) => {
                try {
                    const streetA = a.address.toUpperCase().split(' ')[1]
                    const streetB = b.address.toUpperCase().split(' ')[1]
                    if (streetA > streetB) { return -1 }
                    else if (streetA < streetB) { return 1 }
                    return 0
                } catch(err) {
                    return 0
                }
            });
        }
        setDataProperties(temp)
        setStreetAscending(!streetAscending)
    }

    return (
        <form>
        <div className="search">
            <div className="content-max search-border">
                <div className="search-option">
                    <div className="search-top">
                        Search by: 
                    </div>
                    <div className="search-bottom">
                        <div>Sort</div>
                        <div className="search-row">
                            <div onClick={(e) => {sortAmount(e)}} className="search-row sort">
                                Amount &nbsp;<SortIcon fontSize="small" style={{ color: orange[700] }}/>
                            </div>
                            <div className="spacer">&nbsp;</div>
                            <div onClick={(e) => {sortStreet(e)}} className="search-row sort">
                                Street Name &nbsp;<SortIcon fontSize="small" style={{ color: orange[700] }}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="search-option">
                    <div className="search-top">
                        &nbsp;
                    </div>
                    <div className="search-bottom">
                        <div>Type</div>
                        <div className="search-row">
                        <div className="search-row">
                                <input 
                                    name="type" 
                                    type="radio" 
                                    value="checking"
                                    checked={selectedType==='checking'}
                                    onChange={filterByType}
                                />Checking
                            </div>
                            <div className="spacer">&nbsp;</div>
                            <div className="search-row">
                                <input 
                                    name="type" 
                                    type="radio" 
                                    value="creditcard"
                                    checked={selectedType==='creditcard'}
                                    onChange={filterByType}
                                />Credit Card
                            </div>
                            <div className="spacer">&nbsp;</div>
                            <div className="search-row">
                                <input 
                                    name="type" 
                                    type="radio" 
                                    value="all"
                                    checked={selectedType==='all'}
                                    onChange={filterByType}
                                />All
                            </div>
                        </div>
                    </div>
                </div>

                <div className="search-option">
                    <div className="search-top">
                        &nbsp;
                    </div>
                    <div className="search-bottom">
                        <div>Amount</div>
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
                        <div>Status</div>
                        <div className="search-row">
                            <div className="search-row"><input type="checkbox"/>Received</div>
                            <div className="spacer">&nbsp;</div>
                            <div className="search-row"><input type="checkbox"/>Pending</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
    );
};

export default Search;