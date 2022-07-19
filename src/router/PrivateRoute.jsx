import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth/context"

const PrivateRoute = ({ children }) => {

  const { authState } = useContext( AuthContext )
  const { logged } = authState

  return (logged)
  ? children
  : <Navigate to='/login' />
}

export default PrivateRoute