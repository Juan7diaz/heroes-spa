import { useReducer } from 'react'
import AuthContext from './AuthContext'
import AuthReducer from './AuthReducer'

import types from '../types/types'


const initialState = {
  logged: false
}

const AuthProvider = ({ children }) => {

  const [ authState, dispatch ] = useReducer(AuthReducer, initialState)

  const login = ( name = '' ) => {

    const action = {
      type: types.login,
      payload: {
        id: 'ABC',
        name: name
      }
    }

    dispatch(action)

  }

  return (
    <AuthContext.Provider value={{login, authState}}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider