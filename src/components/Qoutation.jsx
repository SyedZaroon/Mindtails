import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Qoutation() {
  return (
    <div>
          <blockquote className=" relative ">

              <p className='text-[21px] italic' > Remain lively hardly needed at do by. Two you fat downs fanny three. True mr gone most at. Dare as name just when with it body. Travelling inquietude she increasing off impossible the.</p>
              <span><FontAwesomeIcon icon={faQuoteLeft} className='text-textColor w-20 h-20 opacity-20 absolute -top-7 left-0' /></span>

              <footer class="mt-4 text-textColor font-bold ">— Norman Ortega</footer>
      </blockquote>
    </div>
  )
}

export default Qoutation
