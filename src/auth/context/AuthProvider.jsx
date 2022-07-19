import { useReducer } from 'react'
import AuthContext from './AuthContext'
import AuthReducer from './AuthReducer'

import types from '../types/types'


//el estado inicial del reducer
const initialState = {
  logged: false
}

//obtiene el usuario del localStorage
const init = () => {
  const user = JSON.parse( localStorage.getItem('user') )

  return {
    logged: !!user,
    user: user
  }
}

const AuthProvider = ({ children }) => {

  const [ authState, dispatch ] = useReducer(AuthReducer, initialState, init)

  //cuando se ejecuta la funcion se guarda un nuevo usuario
  const login = ( name = '' ) => {

    const user = { id: 'ABC', name: name }

    const action = { type: types.login, payload: user}

    localStorage.setItem( 'user', JSON.stringify( user ) )

    dispatch(action)
  }

  const logout = () => {
    localStorage.removeItem('user')
    const action = { type: types.logout  }
    dispatch(action)
  }


  return (
    <AuthContext.Provider value={{login, logout, authState}}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider