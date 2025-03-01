import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF'

function Shareartical() {
  return (
      <div>
          <div className='bg-white p-8 border-[1px] rounded-sm flex justify-between '>
              
              <h6 className='heading5'>Share Article</h6>

              <div className="header-icons flex justify-between items-center gap-1">
              
                  <div className='w-8 h-8 flex justify-center items-center rounded-[10%] text-white  bg-primaryDarkColor'>
                        <FontAwesomeIcon icon={faFacebookF} />
                      </div>
              
                  <div className='w-8 h-8 flex justify-center items-center rounded-[10%] text-white bg-primaryDarkColor '>
                        <FontAwesomeIcon icon={faTwitter} />
                      </div>
                          
                      <div className='w-8 h-8 flex justify-center items-center rounded-[10%] text-white  bg-primaryDarkColor'>
                        <FontAwesomeIcon icon={faInstagram} />
                      </div>
              
                    </div>


          </div>
      
    </div>
  )
}

export default Shareartical
