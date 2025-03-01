import React from 'react'
import { assets } from '../utils/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faClock, faMessage } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    return (
        <div>

            <div className="sidebar flex flex-col gap-10 w-full">

                <div className="LillianMorgan bg-white p-8 border-[1px] rounded-sm ">
                    <h6 className='heading6'>Lillian Morgan</h6>
                    <hr className='border-t-2 border-primaryDarkColor'></hr>
                    <div className="flex flex-col justify-center items-center gap-3 mt-5">
                        <img src={assets.LillianMorgan} className='w-[168px] h-[168px] rounded-full'></img>
                        <div className='flex flex-col justify-center items-center'>
                            <h6 className='heading6'>Lillian Morgan</h6>
                            <span className='sub-text text-textColor'>Blogger & Writer</span>
                        </div>
                        <p className='text text-textColor'>Endeavor bachelor but add eat pleasure doubtful sociable. Age forming covered you entered the examine. Blessing scarcely confined her contempt wondered shy.</p>
                        <div className='flex justify-center items-center gap-2'>
                            <div className='w-8 h-8 flex justify-center items-center rounded-[10%] text-white hover:bg-[#649FFF] bg-[#5395FF]'>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </div>

                            <div className='w-8 h-8 flex justify-center items-center rounded-[10%] text-white bg-[#5BCAFF] hover:bg-[#6BCFFF]'>
                                <FontAwesomeIcon icon={faTwitter} />
                            </div>

                            <div className='w-8 h-8 flex justify-center items-center rounded-[10%] text-white bg-[#5464D7] hover:bg-[#6573DB]'>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Instagram Posts */}

                <div className="LillianMorgan bg-white p-8 border-[1px] rounded-sm ">
                    <h6 className='heading6'>Follow On Instagram</h6>
                    <hr className='border-t-2 border-primaryDarkColor'></hr>

                    <div className='grid grid-cols-3 mt-5 gap-2'>

                        <div className='relative group overflow-hidden'>
                            <img src={assets.insta1} className='object-cover w-full h-full transition-all duration-500 transform group-hover:scale-[1.2] '></img>
                            <div className='absolute w-full h-full inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-500 '></div>
                            <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
                                <a href='' className=' text-textColor hover:text-white'> <FontAwesomeIcon icon={faInstagram} /> </a>
                            </div>
                        </div>

                        <div className='relative group overflow-hidden'>
                            <img src={assets.insta2} className='object-cover w-full h-full transition-all duration-500 transform group-hover:scale-[1.2] '></img>
                            <div className='absolute w-full h-full inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-500 '></div>
                            <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
                                <a href='' className=' text-textColor hover:text-white'> <FontAwesomeIcon icon={faInstagram} /> </a>
                            </div>
                        </div>

                        <div className='relative group overflow-hidden'>
                            <img src={assets.insta3} className='object-cover w-full h-full transition-all duration-500 transform group-hover:scale-[1.2] '></img>
                            <div className='absolute w-full h-full inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-500 '></div>
                            <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
                                <a href='' className=' text-textColor hover:text-white'> <FontAwesomeIcon icon={faInstagram} /> </a>
                            </div>
                        </div>

                        <div className='relative group overflow-hidden'>
                            <img src={assets.insta4} className='object-cover w-full h-full transition-all duration-500 transform group-hover:scale-[1.2] '></img>
                            <div className='absolute w-full h-full inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-500 '></div>
                            <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
                                <a href='' className=' text-textColor hover:text-white'> <FontAwesomeIcon icon={faInstagram} /> </a>
                            </div>
                        </div>

                        <div className='relative group overflow-hidden'>
                            <img src={assets.insta5} className='object-cover w-full h-full transition-all duration-500 transform group-hover:scale-[1.2] '></img>
                            <div className='absolute w-full h-full inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-500 '></div>
                            <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
                                <a href='' className=' text-textColor hover:text-white'> <FontAwesomeIcon icon={faInstagram} /> </a>
                            </div>
                        </div>

                        <div className='relative group overflow-hidden'>
                            <img src={assets.insta6} className='object-cover w-full h-full transition-all duration-500 transform group-hover:scale-[1.2] '></img>
                            <div className='absolute w-full h-full inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-500 '></div>
                            <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
                                <a href='' className=' text-textColor hover:text-white'> <FontAwesomeIcon icon={faInstagram} /> </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Post */}

                <div className="LillianMorgan bg-white p-8 border-[1px] rounded-sm ">
                    <h6 className='heading6'>Recent Post</h6>
                    <hr className='border-t-2 border-primaryDarkColor'></hr>

                    <div className='flex flex-col gap-2 mt-5'>

                        <div className="relative flex gap-5 items-center justify-start">
                            <div className="relative w-[80px]">
                                <img src={assets.post3} className="w-full transition-all duration-300" />
                                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
                            </div>
                            <div>
                                <p className="sub-text font-semibold transition-all duration-300 text-headingColor hover:text-gray-600 cursor-pointer">Setting Goals and Staying Motivated</p>
                                <span className='text-textColor text-xs '> <FontAwesomeIcon icon={faClock} /> April 16, 2023 </span>
                            </div>
                        </div>

                        <div className="relative flex gap-5 items-center justify-start">
                            <div className="relative w-[80px]">
                                <img src={assets.post3} className="w-full transition-all duration-300" />
                                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
                            </div>
                            <div>
                                <p className="sub-text font-semibold transition-all duration-300 text-headingColor hover:text-gray-600 cursor-pointer">Setting Goals and Staying Motivated</p>
                                <span className='text-textColor text-xs '> <FontAwesomeIcon icon={faClock} /> April 16, 2023 </span>
                            </div>
                        </div>

                        <div className="relative flex gap-5 items-center justify-start">
                            <div className="relative w-[80px]">
                                <img src={assets.post3} className="w-full transition-all duration-300" />
                                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
                            </div>
                            <div>
                                <p className="sub-text font-semibold transition-all duration-300 text-headingColor hover:text-gray-600 cursor-pointer">Setting Goals and Staying Motivated</p>
                                <span className='text-textColor text-xs '> <FontAwesomeIcon icon={faClock} /> April 16, 2023 </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dream Life */}

                <div>
                    <div className='relative group overflow-hidden'>
                        <img src={assets.image} alt="" className='w-full h-[360px] object-cover group-hover:w-[110%] transition-all duration-500 transform group-hover:scale-[1.9] ' />
                        <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all '></div>
                        <div className='absolute top-0 left-1/2 w-[0.5px] -rotate-45 h-full bg-white transform opacity-0 transition-all  group-hover:translate-y-20 group-hover:left-0 group-hover:opacity-100 duration-500 '></div>
                        <div className='absolute -top-14 right-1/2 w-[0.5px] -rotate-45 h-full bg-white transform opacity-0  transition-all  group-hover:right-0 group-hover:bottom-0 group-hover:opacity-100 duration-500 '></div>
                        <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-3 flex flex-col gap-3 w-full'>
                            <h6 className='heading5 text-white text-center'>Dream Life in Paris</h6>
                            <p className='sub-text text-center text-white'>Questions explained agreeable preferred strangers too him her son. Set put shyness offices his females him distant.</p>
                            <button className='m-auto secondary-btn'>Explore More</button>
                        </div>
                    </div>
                </div>

                {/* Join the family */}

                <div className='bg-white p-8 border-[1px] rounded-sm flex flex-col gap-2 justify-start items-start'>
                    <FontAwesomeIcon className='text-primaryColor text-lg' icon={faMessage} />
                    <h6 className='heading6 '>Join the family</h6>
                    <span className='sub-text text-textColor'>Sign up for a Newsletter.</span>
                    <form className='w-full flex flex-col justify-center items-center gap-3'>
                        <input type='email' placeholder='sample@mail.com' className='border-[1px] rounded-sm px-[15px] py-1 w-full'></input>
                        <input className='primary-btn w-full' type="submit" value="Subscribe" />
                    </form>
                </div>


                {/* Categories */}

                <div className='bg-white p-8 border-[1px] rounded-sm'>
                    <h6 className='heading6 mt-4'>Categories</h6>
                    <hr className='border-t-2 border-primaryDarkColor'></hr>


                    <div className='w-full mt-5'>
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

                {/* Tags */}

                <div className='bg-white p-8 border-[1px] rounded-sm'>
                    <h6 className='heading6 mt-4'>Tags</h6>
                    <hr className='border-t-2 border-primaryDarkColor'></hr>


                    <div className='w-full flex gap-2 flex-wrap mt-5'>
                        <span className='py-[3px] px-2 border-[1px] rounded-sm hover:text-primaryColor cursor-pointer ' >Activities</span>
                        <span className='py-[3px] px-2 border-[1px] rounded-sm hover:text-primaryColor cursor-pointer ' >Fashion</span>
                        <span className='py-[3px] px-2 border-[1px] rounded-sm hover:text-primaryColor cursor-pointer ' >Health</span>
                        <span className='py-[3px] px-2 border-[1px] rounded-sm hover:text-primaryColor cursor-pointer ' >Lifestyle</span>
                        <span className='py-[3px] px-2 border-[1px] rounded-sm hover:text-primaryColor cursor-pointer ' >Photography</span>
                        <span className='py-[3px] px-2 border-[1px] rounded-sm hover:text-primaryColor cursor-pointer ' >Sport</span>
                        <span className='py-[3px] px-2 border-[1px] rounded-sm hover:text-primaryColor cursor-pointer ' >Travel</span>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Sidebar
