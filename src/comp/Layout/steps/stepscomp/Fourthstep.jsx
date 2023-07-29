import React from 'react'
import { images } from '../../..'

const Fourthstep = () => {
  return (
    <div className='flex justify-between align-middle items-center'>
        <div className='font-SpaceGrotesk w-[400px]'>
            <h1 className='font-bold text-[30px]'>Confirm payment</h1>
            <p className='text-lg'>Verify and finalize your transaction with confidence.</p>
        </div>
        <img src={images.SkipperAfricaThree} alt="Skipper Africa login page" className=''/>
    </div>
  )
}

export default Fourthstep