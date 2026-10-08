import usercontext from "./UserContext"
import { useContext } from "react"
const Header = () => {
  const {uname:user} = useContext(usercontext);
  return (
    <div className = "header">
      <div>
        <h1>My shopping app</h1>
      </div>
      <div className = "greet">
        <h2>Welcome, {user}</h2>
      </div>
      
    </div>
  )
}

export default Header