import React from 'react'
import { assets } from '../utils/assets'

function Hotnews() {
    return (
        <div>
            <div className="LillianMorgan bg-white p-8 border-[1px] rounded-sm ">
                <h6 className='heading6'>Hot News</h6>
                <hr className='border-t-2 border-primaryDarkColor'></hr>

                <div className='flex gap-4 flex-wrap tablet:flex-nowrap my-5'>

                    <div className='relative group overflow-hidden'>
                        <img className='w-full' src={assets.hot1} alt="" />
                        <div className=' absolute bg-gradient-to-br from-black to-white opacity-30 inset-0  group-hover:opacity-0 transition-all duration-500 '></div>
                        <div className='absolute bottom-8 left-8 w-[80%] tablet:w-[60%] laptop:w-[80%] laptop:bottom-1'>
                            <h3 className='heading6 text-white'>Setting Goals and Staying Motivated</h3>
                            <div className='flex gap-2 text-white'>
                                <span>By</span>
                                <a href=''>Hellen</a>
                                <span className='tablet:block hidden laptop:hidden'>April 16, 2023</span>
                            </div>
                        </div>
                    </div>

                    <div className='relative group overflow-hidden'>
                        <img className='w-full' src={assets.hot2} alt="" />
                        <div className=' absolute bg-gradient-to-br from-black to-white opacity-30 inset-0  group-hover:opacity-0 transition-all duration-500 '></div>
                        <div className='absolute bottom-8 left-8 w-[80%] tablet:w-[60%] laptop:w-[80%] laptop:bottom-1'>
                            <h3 className='heading6 text-white'>Setting Goals and Staying Motivated</h3>
                            <div className='flex gap-2 text-white'>
                                <span>By</span>
                                <a href=''>Hellen</a>
                                <span className='tablet:block hidden laptop:hidden'>April 16, 2023</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Hotnews
