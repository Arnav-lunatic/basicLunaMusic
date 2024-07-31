import { useState } from 'react'
import './App.css'
import { Outlet, useSearchParams } from 'react-router-dom'
import {TrackDataContext} from './context/TrackDataContext.js'

function App() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchTrack, setSearchTrack] = useState(searchParams.get('v') || '')

  const [quality, setQuality] = useState(4)

  return (
    <TrackDataContext.Provider value={{searchTrack, setSearchTrack, setSearchParams, quality, setQuality}}>
      <Outlet />
    </TrackDataContext.Provider>
  )
}

export default App
