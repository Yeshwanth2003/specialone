import React from 'react'
import './App.css'
import IndexPage from "./components/indexpage/App.jsx"
import AboutPage from "./components/about/App.jsx"
import BestPage from "./components/bestthing/App.jsx"
import MusicPage from "./components/musicpage/App.jsx"
import EndPage from "./components/end/App.jsx"

export default function () {
  return (
    <>
      <div id='main-container' className='zero'>
        <IndexPage />
        <AboutPage />
        <BestPage />
        <MusicPage />
        <EndPage />
      </div>
    </>
  )
}
