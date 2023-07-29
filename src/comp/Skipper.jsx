import React from 'react'
import Nav from './Layout/Nav'
import HeroSection from './Layout/HeroSection'
import Cta from './Layout/Cta'
import SkipperAppFlow from './Layout/SkipperAppFlow'

const Skipper = () => {
  return (
    <div>
      <div className="h-[100vh]  bg-cover bg-no-repeat bg-center bg-skipperAfrica-backgroundImg" >
        <Nav/>
        <HeroSection/>
      </div>
      <Cta/>
      <SkipperAppFlow/>
    </div>
  )
}

export default Skipper