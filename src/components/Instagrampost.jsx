import React from 'react'
import { assets } from '../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


function Instagrampost() {
  return (
    <div>
          <div className='grid tablet:grid-cols-6 grid-cols-3 relative  '>
              <a href=""><div className='overflow-hidden relative group'>
                  <img src={assets.insta1} className='w-full h-[auto] object-cover  transition-all duration-500 transform  group-hover:scale-[1.3]  ' />
                  <div className=' absolute inset-0 bg-black opacity-30 group-hover:scale-[1.3]  '></div>
              </div></a>
              <a href=""><div className='overflow-hidden relative group '>
                  <img src={assets.insta2} className='w-full h-[auto] object-cover  transition-all duration-500 transform  group-hover:scale-[1.3]  ' />
                  <div className=' absolute inset-0 bg-black opacity-30 group-hover:scale-[1.3]  '></div>
              </div></a>
              <a href=""><div className='overflow-hidden relative group '>
                  <img src={assets.insta3} className='w-full h-[auto] object-cover  transition-all duration-500 transform  group-hover:scale-[1.3]  ' />
                  <div className=' absolute inset-0 bg-black opacity-30 group-hover:scale-[1.3]  '></div>
              </div></a>
              <a href=""><div className='overflow-hidden relative group '>
                  <img src={assets.insta4} className='w-full h-[auto] object-cover  transition-all duration-500 transform  group-hover:scale-[1.3]  ' />
                  <div className=' absolute inset-0 bg-black opacity-30 group-hover:scale-[1.3]  '></div>
              </div></a>
              <a href=""><div className='overflow-hidden relative group '>
                  <img src={assets.insta5} className='w-full h-[auto] object-cover  transition-all duration-500 transform  group-hover:scale-[1.3]  ' />
                  <div className=' absolute inset-0 bg-black opacity-30 group-hover:scale-[1.3]  '></div>
              </div></a>
              <a href=""><div className='overflow-hidden relative group '>
                  <img src={assets.insta6} className='w-full h-[auto] object-cover  transition-all duration-500 transform  group-hover:scale-[1.3]  ' />
                  <div className=' absolute inset-0 bg-black opacity-30 group-hover:scale-[1.3]  '></div>
              </div></a>

              <div className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                  <button className='bg-primaryColor py-2 px-4 text-white rounded-md hover:bg-primaryDarkColor transition-all duration-500 '>
                      <FontAwesomeIcon className='mr-2' icon={faInstagram} />
                      Follow on Instagram</button>
              </div>
      </div>
    </div>
  )
}

export default Instagrampost
