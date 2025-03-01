import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faPinterest, faTwitter, faVimeo } from '@fortawesome/free-brands-svg-icons'
import { assets } from '../utils/assets'

function bloger() {
  return (
    <div>
          <div className='bg-white p-8 border-[1px] rounded-sm flex justify-between  '>
              
              <div className='flex flex-col gap-2 justify-center items-center m-auto'>
          <img src={assets.LillianMorgan} className='w-16 h-16 rounded-full ' />
                  <h5 className='heading5'>Hellen</h5>
                  <a href=''><span className='text-primaryColor'>Writer & Blogger</span></a>
                  <p className='paragraph text-center text-textColor'>Considered an invitation do introduced sufficient understood instrument it. Of decisively friendship in as collecting at. No affixed be husband ye females brother garrets proceed. Least child who seven happy yet balls young. Discovery sweetness principle discourse shameless bed one excellent. Sentiments of surrounded friendship dispatched connection is he. Me or produce besides hastily up as pleased. </p>
                  <div className='flex gap-5 mt-5'>
                      <a href=""><FontAwesomeIcon icon={faFacebook} className='hover:grayscale hover:scale-110 transition-transform duration-300 ' /></a>
                      <a href=""><FontAwesomeIcon icon={faTwitter} className='hover:grayscale hover:scale-110 transition-transform duration-300 ' /></a>
                      <a href=""><FontAwesomeIcon icon={faLinkedin} className='hover:grayscale hover:scale-110 transition-transform duration-300 ' /></a>
                      <a href=""><FontAwesomeIcon icon={faPinterest} className='hover:grayscale hover:scale-110 transition-transform duration-300 ' /></a>
                      <a href=""><FontAwesomeIcon icon={faVimeo} className='hover:grayscale hover:scale-110 transition-transform duration-300 ' /></a>
                  </div>
              </div>
              
          </div>
    </div>
  )
}

export default bloger
