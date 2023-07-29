import React from 'react'
import SkipperAppSteps from './steps/SkipperAppSteps'


const SkipperAppFlow = () => {
  return (
    <div className='h-[90vh]'>
        <div className='w-[80%] m-auto mt-[70px]'>
        <h1 className='font-SpaceGrotesk font-bold text-5xl text-center text-Skipper-h1'>How Skipper works</h1>
        <SkipperAppSteps/>
        </div>
    </div>
  )
}

export default SkipperAppFlow