//https://dev.to/nazmifeeroz/using-usecontext-and-usestate-hooks-as-a-store-mnm

import React from 'react'


export const StoreContext = React.createContext(null)


export default ({ children }) => {

    //INITIAL DATA can be gathered from asynch request
    const accountNumbers = ['11111', '22222', '33333']
    const accountProperties = []
    const userProfile = {
        name: 'Pedro Smith',
        email: 'pedrosmith@gmail.com'
    }
    const appState = {
        oneChart: null,
        oneOverlay: null,
        selectedAccount: accountNumbers[0] //can be set to first accountNumber after they load
    }

    // Global Functions
    const sortAmount = (ascending) => {
        if (ascending) {
            properties.sort((a, b) => a.balance - b.balance);
        } else {
            properties.sort((a, b) => b.balance - a.balance);
        }
        
        console.log('Fidel sortAmount', {ascending, properties})
    };
    const sortStreet = (ascending) => {
        if (ascending) {
            
        } else {
            
        }
    };
    const globalFunctions = {
        sortAmount,
        sortStreet
    }

    const [app, setApp] = React.useState(appState)
    const [user, setUser] = React.useState(userProfile)
    const [accounts, setAccounts] = React.useState(accountNumbers)
    const [properties, setProperties] = React.useState(accountProperties)
    const [appFunctions, setAppFunctions] = React.useState(globalFunctions)

    const store = {
        appInfo: [app, setApp],
        userInfo: [user, setUser],
        accountInfo: [accounts, setAccounts],
        propertyInfo: [properties, setProperties],
        appFunctions: [appFunctions, setAppFunctions],
    }

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}