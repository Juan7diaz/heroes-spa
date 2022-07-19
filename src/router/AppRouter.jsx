import { Route, Routes } from 'react-router-dom'

import { LoginPage } from '../auth/pages'
import { HeroresRoutes } from '../heroes/routes'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
      } />

        {/* Rutas privadas */}
        <Route path="/*" element={
          <PrivateRoute>
            <HeroresRoutes />
          </PrivateRoute>
        } />

      </Routes>
    </>
  )
}

export default AppRouter