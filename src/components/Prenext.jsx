import { faLeftLong } from '@fortawesome/free-solid-svg-icons'
import { faRightLong } from '@fortawesome/free-solid-svg-icons/faRightLong'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Prenext() {
  return (
    <div>
          <div className='bg-white p-8 border-[1px] rounded-sm flex justify-between '>
              <div>
                  <a href=''> <span className='text-primaryColor paragraph'> <FontAwesomeIcon icon={faLeftLong} /> Previous </span> </a>
              </div>

              <div>
                  <a href=''> <span className='text-primaryColor paragraph'> Next <FontAwesomeIcon icon={faRightLong} />  </span> </a>
              </div>

       </div>
    </div>
  )
}

export default Prenext
