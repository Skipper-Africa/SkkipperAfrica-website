import React from 'react'
import { images } from '../../..'

const FifthStep = () => {
  return (
    <div className='flex justify-between align-middle items-center'>
        <div className='font-SpaceGrotesk w-[400px]'>
            <h1 className='font-bold text-[30px]'>Enjoy instant payment</h1>
            <p className='text-lg'>Instant gratification: Delight in swift and hassle-free payments.</p>
        </div>
        <img src={images.SkipperAfricaDisplayPhone} alt="Skipper Africa Phone" className=''/>
    </div>
  )
}

export default FifthStep