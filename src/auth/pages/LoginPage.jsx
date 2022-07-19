import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const LoginPage = () => {

  const navigate = useNavigate()

  const { login } = useContext(AuthContext)

  const onLogin = () => {

    login('Juan Diaz')

    navigate('/', {
      replace: true
    })
  }
  //el replace es para que remplace la ruta en la que me encuentro y no puedo dar arrowback (evita que regrese al historial anterior)

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={ onLogin }
      >
        Login
      </button>
    </div>
  )
}

export default LoginPage