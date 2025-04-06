import React from 'react'
import WelcomeComponent from "../Componenti/Welcome.jsx";
import MainComponent from './Componenti/MainComponent.jsx'

export default function HomePage({ books, selectedAsin, setSelectedAsin }) {
  return (
    <>
    <WelcomeComponent />
    <MainComponent books={books} selectedAsin={selectedAsin} setSelectedAsin={setSelectedAsin}/>
    </>
  )
}