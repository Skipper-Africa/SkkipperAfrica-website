import React from 'react'
import { images } from '..'

const HeroSection = () => {
  return (
    <div className='mt-16 w-[70%] m-auto'>
      <div className='flex  justify-between m-auto'>
        <img src={images.SuperFast} alt="" className='w-[30px]'/>
        <img src={images.Convenient} alt="" className='w-[30px]'/>
      </div>
      <span className=' flex bg-skipper-waving w-fit p-2 rounded-full mt-4 m-auto font-SpaceGrotesk'>Hey everyone <img src={images.SkipperAfricaWavingEmoji} alt="" /></span>
      <h1 className='font-SpaceGrotesk font-bold text-[50px] text-center'>Experience fast and convenient payments with a QR scan.</h1>
      <p className='font-SpaceGrotesk text-center mt-2 text-lg'>Effortless payments, just a scan away.</p>
      <div className='flex justify-between'>
        <img src={images.Reliable} alt="Reliable" className='-mt-16 -ml-8' />
        <img src={images.Swift} alt="Swift" className='transform translate-y-6'/>
      </div>
      <button className='bg-skipper font-SpaceGrotesk text-white p-2 rounded-lg m-auto flex justify-center'>Get Started</button>
      <div className='mt-12 transform -translate-x-48'>
      <img src={images.NoStress} alt="no stress" className='w-fit  m-auto'/>
      </div>
    </div>
  )
}

export default HeroSection