import React from 'react'
import Sidebar from '../components/Sidebar'
import Trandingpost from '../components/Trandingpost'
import Hotnews from '../components/Hotnews'
import about from '../assets/about.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faPinterest, faTwitter, faVimeo } from '@fortawesome/free-brands-svg-icons'

function About() {
  return (
    <div>
      {/* <Drawer></Drawer> */}

      <div className='flex gap-3 my-12'>

        <div className='bg-white p-8 border-[1px] rounded-sm laptopl:basis-[868px] basis-auto h-fit'>
          <img src={about} className='w-full' />
          <p className='mt-3 paragraph'>Appetite no humoured returned informed. Possession so comparison inquietude he he conviction no decisively. Marianne jointure attended she hastened surprise but she. Ever lady son yet you very paid form away. He advantage of exquisite resolving if on tolerably. Become sister on in garden it barton waited on. Unpacked now declared put you confined daughter improved. Celebrated imprudence few interested especially reasonable off one.</p>
          <h5 className='mt-3 heading5'>About Me And My Project:</h5>
          <p className='mt-3 paragraph'>Remain lively hardly needed at do by. Two you fat downs fanny three. True mr gone most at. Dare as name just when with it body. Travelling inquietude she increasing off impossible the. Cottage be noisier looking to we promise on. <span className='text-primaryDarkColor font-bold'> Disposal to kindness appetite diverted learning of on raptures.</span> Betrayed any may returned now dashwood formerly. Balls way delay shy boy man views.</p>
          <p className='mt-3 paragraph'>He do subjects prepared bachelor juvenile ye oh. He feelings removing informed he as ignorant we prepared. Evening do forming observe spirits is in. Country hearted be of justice sending. On so they as with room cold ye. Be call four my went mean. Celebrated if remarkably especially an.</p>
          <blockquote className="my-10 border-l-4 border-primaryDarkColor italic pl-8">
            <p className='heading6'>If you look at what you have in life, you’ll always have more. If you
              look at what you don’t have in life, you’ll never have enough.
            </p>
            <footer className="mt-2 font-semibold">–Oprah Winfrey</footer>
          </blockquote>
          <p className='mt-3 paragraph'>Remain lively hardly needed at do by. Two you fat downs fanny three. True mr gone most at. Dare as name just when with it body. Travelling inquietude she increasing off impossible the. Cottage be noisier looking to we promise on. <span className='text-primaryDarkColor font-bold'> Disposal to kindness appetite diverted learning of on raptures.</span> Betrayed any may returned now dashwood formerly. Balls way delay shy boy man views.</p>
          <p className='mt-3 paragraph'>He do subjects prepared bachelor juvenile ye oh. He feelings removing informed he as ignorant we prepared. Evening do forming observe spirits is in. Country hearted be of justice sending. On so they as with room cold ye. Be call four my went mean. Celebrated if remarkably especially an.</p>
          <hr className='mt-3 bg-borderColor opacity-50'></hr>
          <div className='flex gap-2 mt-5 justify-center'>
            <a href=""><FontAwesomeIcon icon={faFacebook} className='border-[1px] border-primaryDarkColor text-primaryDarkColor p-2 rounded-md transition-all duration-500 hover:scale-[1.1]' /></a>
            <a href=""><FontAwesomeIcon icon={faTwitter} className='border-[1px] border-primaryDarkColor text-primaryDarkColor p-2 rounded-md transition-all duration-500 hover:scale-[1.1]' /></a>
            <a href=""><FontAwesomeIcon icon={faLinkedin} className='border-[1px] border-primaryDarkColor text-primaryDarkColor p-2 rounded-md transition-all duration-500 hover:scale-[1.1]' /></a>
            <a href=""><FontAwesomeIcon icon={faPinterest} className='border-[1px] border-primaryDarkColor text-primaryDarkColor p-2 rounded-md transition-all duration-500 hover:scale-[1.1]' /></a>
            <a href=""><FontAwesomeIcon icon={faVimeo} className='border-[1px] border-primaryDarkColor text-primaryDarkColor p-2 rounded-md transition-all duration-500 hover:scale-[1.1]' /></a>
          </div>
        </div>

        <div className='basis-[350px] hidden laptop:block'>

          <Sidebar />

        </div>


      </div>

      <div className='py-6 flex gap-4 sm:flex-wrap laptop:flex-nowrap'>

        <Trandingpost />
        <Hotnews />

      </div>


    </div>
  )
}

export default About
