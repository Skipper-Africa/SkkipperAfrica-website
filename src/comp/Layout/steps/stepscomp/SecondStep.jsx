import React from 'react'
import { images } from '../../..'

const SecondStep = () => {
  return (
    <div className='flex justify-between align-middle items-center'>
        <div className='font-SpaceGrotesk w-[400px]'>
            <h1 className='font-bold text-[30px]'>Fund your skipper wallet</h1>
            <p className='text-lg'>Sail smoothly: Top up your Skipper wallet with ease!</p>
        </div>
        <img src={images.SkipperAfricaTwo} alt="Skipper wallet transaction page" className=''/>
    </div>
  )
}

export default SecondStep