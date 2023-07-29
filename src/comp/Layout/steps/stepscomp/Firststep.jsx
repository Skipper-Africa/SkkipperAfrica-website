import React from 'react'
import { images } from '../../..'

const Firststep = () => {
  return (
    <div className='flex justify-between align-middle items-center'>
        <div className='font-SpaceGrotesk w-[400px]'>
            <h1 className='font-bold text-[30px]'>Create a Skipper Account</h1>
            <p className='text-lg'>Seize the Helm: Sign Up for Your Skipper Account Today!</p>
        </div>
        <img src={images.SkipperAfricaOne} alt="Skipper Africa login page" className=''/>
    </div>
  )
}

export default Firststep