import React from 'react'
import { images } from '../../..'

const Thirdstep = () => {
  return (
    <div className='flex justify-between align-middle items-center'>
        <div className='font-SpaceGrotesk w-[400px]'>
            <h1 className='font-bold text-[30px]'>Scan your receiver’s code or input their ID</h1>
            <p className='text-lg'>Seamless transactions: Pay anyone, anywhere with a quick scan or ID input.</p>
        </div>
        <img src={images.SkipperAfrica3} alt="Skipper Africa Scan page" className=''/>
    </div>
  )
}

export default Thirdstep