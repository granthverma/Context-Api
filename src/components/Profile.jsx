import React , {useContext} from 'react' 
import UserContext from '../context/UserContext'

function Profile() {
    // Access the user information from the UserContext
    const {user} = useContext(UserContext)

    // If user is not logged in, display a message
  if(!user) return <div>Please login</div>
 
  // If user is logged in, display a welcome message
  return <div>Welcome {user.username }</div>

    
}

export default Profile
