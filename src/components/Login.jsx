import React ,{useState ,useContext}from 'react'
import UserContext from '../context/UserContext'

function Login() {
    // State for storing username and password
  const [username , setUsername] = useState ('')
  const[password , setPassword ]  = useState ('')

  // Access setUser function from the UserContext

  const {setUser}=useContext (UserContext)

    // Form submission handler
  const handleSubmit = (e)=>{
    e.preventDefault() // value khai nahi jaye 
    setUser(username , password)

  }
    return (
        <div>
            <h2>Login</h2>
            <input type='text'
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            
            placeholder='username'/>
               {" "}
            <input type='text'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder='password'/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
        
    )
}

export default Login
