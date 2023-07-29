import React from 'react'
import { images } from '..'

const Cta = () => {
  return (
    <div className='flex flex-row gap-4 h-[600px]   bg-gradient-to-tl from-skipper-grid2 to-skipper-grid1 '>
        <div className='w-[40%]  font-SpaceGrotesk font-bold text-[30px] text-white m-auto lg:text-[40px]'>
            <p className='p-5'>Pay anyone, anywhere with a quick scan or ID input.</p>
        </div>
        <div className='mt-[90px] flex flex-row w-[60%]'>
            <img src={images.SkipperWallet} alt="" className='w-[268px] h-[166px] transform translate-x-[250px] translate-y-[320px]'/>
            <img src={images.SkipperAfricaPhone} alt="" />
            <img src={images.SkipperQR} alt="" className='w-[179px] h-[269px] transform -translate-x-[100px]'/>
        </div>
    </div>
  )
}

export default Cta