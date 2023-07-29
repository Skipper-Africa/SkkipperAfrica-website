import  { useState } from 'react'
import { images } from '..'
import { Link } from 'react-router-dom'

const Nav = () => {

    const [isMobileNavVisible, setMobileNavVisibility] = useState(false);

    const showNav = () => {
        setMobileNavVisibility(true);
    };

    const offNav = () => {
        setMobileNavVisibility(false);
    };
    return (
        <>
        <div className='hidden md:flex justify-around w-[100%] p-5'>
                <Link to="/"><img src={images.SkipperAfricaLogo} alt="Skipper Africa Logo" className='w-[70px]' /></Link>
                <ul className='flex justify-around items-center align-middle text-center gap-8 font-SpaceGrotesk text-[8px] bg-white'>
                    <li><Link to="/">How it works</Link></li>
                    <li><Link to="/">About Us</Link></li>
                    <li><Link to="/">Product </Link></li>
                    <li className='w-[120px]'>
                        <Link to="/" className="flex items-center space-x-2 ]">
                            <span >Help Center</span>
                            <img src={images.SkipperAfricaDropdownBtn} alt="Skipper Africa Dropdown list" className="w-3 h-3" />
                        </Link>
                    </li>

                    <li className='bg-skipper p-2 rounded-md text-white'><Link>Download App</Link></li>
                </ul>
            </div>

            {/**Mobile */}
            <div className='md:hidden md:w-[] md:h-0'>
                <div className={`flex justify-between p-2 w-[90%] m-auto items-center fixed top-0 left-0 right-0 ${isMobileNavVisible ? 'bg-white' : 'bg-transparent'}`}>
                    <Link to="/"><img src={images.SkipperAfricaLogo} alt="Skipper Africa Logo" className='w-[130px] ' /></Link>
                    <div>
                        {isMobileNavVisible ? (
                            <button onClick={offNav} >
                                <img src={images.NavBtn1} alt="" className='w-[25px]'/>
                            </button>
                        ) : (
                            <button onClick={showNav} className='flex flex-col'>
                                <div>
                                    <img src={images.NavBtn} alt="Nav" className='h-[8px] w-[30px]' />
                                    <img src={images.NavBtn} alt="Nav" className='h-[8px]' />
                                    <img src={images.NavBtn} alt="Nav" className='h-[8px]' />
                                </div>
                            </button>
                        )}
                    </div>
                </div>

                {isMobileNavVisible && (
                    <div className='fixed top-[70px] right-0 left-0 bottom-0 bg-white z-50'>
                        <ul className='flex flex-col mt-7 font-SpaceGrotesk text-[27px] h-[70%] gap-6'>
                            <li className='border-b border-skipper-input pl-2 pb-4'>
                                <Link to="/">How it works</Link>
                            </li>
                            <li className='border-b border-skipper-input pl-2 pb-4'>
                                <Link to="/">About Us</Link>
                            </li>
                            <li className='border-b border-skipper-input pl-2 pb-4'>
                                <Link to="/">Product</Link>
                            </li>
                            <li className='border-b border-skipper-input pl-2 pb-4'>
                                <Link to="/" className="flex items-center space-x-2 justify-between pr-2">
                                    <span>Help Center</span>
                                    <img src={images.SkipperAfricaDropdownBtn} alt="Skipper Africa Dropdown list" className="w-7 h-7" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}

            </div>


        </>
    )
}

export default Nav