import { faCross, faRemove } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { assets } from '../assets/assets'

function Drawer() {
    return (
        <div className='max-w-80 h-full absolute top-0 right-0 bg-white p-8 scrollbar-thin scrollbar overflow-auto  '>

            <div className="drawer  flex flex-col gap-6 items-start">
                <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon>

                {/* Drawer Form Details */}
                <div className='w-full'>
                    <h6 className='heading6'>Want to Partnership with me? Book A Call</h6>
                    <hr className='border-t-2 border-primaryDarkColor'></hr>
                </div>

                <div>
                    <form className='flex flex-col gap-4 w-full'>
                        <div className='flex flex-col'>
                            <label className='subtext'>Date</label>
                            <input type='date' className='bg-white border-borderColor border-[0.8px] p-1  subtext w-full focus:outline-none'></input>
                        </div>

                        <div className='flex flex-col'>
                            <label className='subtext'>Time</label>
                            <input type='time' className='bg-white border-borderColor border-[0.8px] p-1  subtext w-full focus:outline-none'></input>
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="" className='subtext'>Message</label>
                            <textarea className='bg-white border-borderColor border-[0.8px] p-1  subtext w-full focus:outline-none ' placeholder='Your Phone and Other Additional Info' cols={53} rows={6}></textarea>
                        </div>
                        <input type='submit' className='primary-btn text-sm' value='Book Now'></input>
                    </form>
                </div>

                {/* Popular Posts */}

                <div className='w-full'>
                    <h6 className='heading6 mt-4'>Popular Posts</h6>
                    <hr className='border-t-2 border-primaryDarkColor w-full'></hr>
                </div>

                <div className='flex flex-col gap-2'>

                    <div className="relative flex gap-5 items-start justify-start">
                        <div className="relative w-[80px]">
                            <img src={assets.post3} className="w-full transition-all duration-300" />
                            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
                        </div>
                        <p className="sub-text font-semibold transition-all duration-300 text-headingColor hover:text-gray-600 cursor-pointer">Setting Goals and Staying Motivated</p>
                    </div>

                    <div className='relative flex gap-5 items-start justify-start'>
                        <div className="relative w-[80px]">
                            <img src={assets.post8} className="w-full transition-all duration-300" ></img>
                            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
                        </div>
                        <p className='sub-text font-semibold  text-headingColor hover:text-gray-600 cursor-pointer' >Reflecting on the Blessings in My Life</p>
                    </div>

                    <div className='relative flex gap-5 items-start justify-start'>
                        <div className="relative w-[80px]">
                            <img src={assets.post14} className="w-[80px] transition-all duration-300"></img>
                            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
                        </div>
                        <p className='sub-text font-semibold  text-headingColor hover:text-gray-600 cursor-pointer '>My Experience with Anxiety and Depression</p>
                    </div>
                </div>

                {/* Drawer Dream Life */}

                <div>

                    <div className='relative group overflow-hidden'>
                        <img src={assets.image} alt="" className='h-[360px] object-cover group-hover:w-[110%] transition-all duration-500 transform group-hover:scale-[1.9] ' />
                        <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all '></div>
                        <div className='absolute top-0 left-1/2 w-[0.5px] -rotate-45 h-full bg-white transform opacity-0 transition-all  group-hover:translate-y-60 group-hover:opacity-100 duration-500 '></div>
                        <div className='absolute top-0 left-1/2 w-[0.5px] -rotate-45 h-full bg-white transform opacity-0  transition-all  group-hover:-translate-y-60 group-hover:opacity-100 duration-500 '></div>

                        <div className='absolute top-1/2 -translate-y-1/2 p-3 flex flex-col gap-3'>
                            <h6 className='heading5 text-white text-center'>Dream Life in Paris</h6>
                            <p className='sub-text text-center text-white'>Questions explained agreeable preferred strangers too him her son. Set put shyness offices his females him distant.</p>
                            <button className='m-auto secondary-btn'>Explore More</button>
                        </div>
                    </div>

                </div>

                {/* Drawer Categories */}

                <div className='w-full'>
                    <h6 className='heading6 mt-4'>Categories</h6>
                    <hr className='border-t-2 border-primaryDarkColor'></hr>
                </div>

                <div className='w-full'>
                    <ul>
                        <li className='flex justify-between items-center border-b-[1px] pb-2 mb-2 group cursor-pointer '>
                            <span className='group-hover:text-primaryColor cursor-pointer '>Beauty</span>
                            <span className='group-hover:text-primaryColor cursor-pointer '>(9)</span>
                        </li>

                        <li className='flex justify-between items-center border-b-[1px] pb-2 mb-2 group cursor-pointer '>
                            <span className='group-hover:text-primaryColor cursor-pointer '>LifeStyle</span>
                            <span className='group-hover:text-primaryColor cursor-pointer '>(9)</span>
                        </li>

                        <li className='flex justify-between items-center border-b-[1px] pb-2 mb-2 group cursor-pointer '>
                            <span className='group-hover:text-primaryColor cursor-pointer '>Photography</span>
                            <span className='group-hover:text-primaryColor cursor-pointer '>(9)</span>
                        </li>

                        <li className='flex justify-between items-center border-b-[1px] pb-2 mb-2 group cursor-pointer '>
                            <span className='group-hover:text-primaryColor cursor-pointer '>Travel</span>
                            <span className='group-hover:text-primaryColor cursor-pointer '>(9)</span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Drawer
