import React from 'react'
import UserContext from './UserContext'

//import the necessary dependencies
//This functional component takes a children prop,
// which represents the nested components that will be wrapped by this context provider.
const UserContextProvider = ({children}) => {
 const [user , setUser] = React.useState(null)

 // initialize a state variable user using the useState hook

    return (
        <UserContext.Provider value ={{user, setUser}} >
         {children}

        </UserContext.Provider>
        

    )
}

export default UserContextProvider;
