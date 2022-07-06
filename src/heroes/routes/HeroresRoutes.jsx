import { Route, Routes, Navigate } from 'react-router-dom'

import { DcPage, MarvelPage, SearchPage, HeroPage } from '../pages'
import { Navbar } from '../../ui/components'

const HeroresRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage/>} />
          <Route path="search" element={<SearchPage/>} />
          <Route path="hero" element={<HeroPage/>} />

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  )
}

export default HeroresRoutes