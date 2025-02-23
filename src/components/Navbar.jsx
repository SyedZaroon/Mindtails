import { faChevronDown, faBars, faPlane, faBicycle, faDiamond } from '@fortawesome/free-solid-svg-icons'
import { faCamera } from '@fortawesome/free-solid-svg-icons/faCamera';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

  const [submenu, setSubmenu] = useState(false);
  const [mmenu, setmmenu] = useState(false);
  const [msubmenu, setmsubmenu] = useState(false);

  let submenuTimeout;

  const handleMouseEnter = () => {
    clearTimeout(submenuTimeout); // If submenu is closing, stop it
    setSubmenu(true);
  };

  const handleMouseLeave = () => {
    submenuTimeout = setTimeout(() => {
      setSubmenu(false);
    }, 300); // Delay of 300ms
  };

  return (
    <div className='my-12'>
      <div className='max-w-[550px] m-auto bg-primaryColor p-3 rounded-tl-3xl rounded-br-3xl '>
        <ul className=" relative tablet:flex hidden justify-center gap-3 items-center text-white max-w-[530px] py-2">
          <li className="group mx-3">
            <NavLink to="/" className="group-hover:underline group-hover:decoration-1 group-hover:underline-offset-8">
              Home
            </NavLink>
          </li>
          <li className="group  mx-3">
            <NavLink to="about" className="group-hover:underline group-hover:decoration-1 group-hover:underline-offset-8">
              About
            </NavLink>
          </li>
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="group  mx-3 ">
            <NavLink to="categories" className="group-hover:underline group-hover:decoration-1 group-hover:underline-offset-8">
              Categories
              <FontAwesomeIcon icon={faChevronDown} className='ml-1 mt-auto text-sm' />
            </NavLink>
          </li>

          <li className="group  mx-3">
            <NavLink to="post" className="group-hover:underline group-hover:decoration-1 group-hover:underline-offset-8">
              Blog Post
            </NavLink>
          </li>
          <li className="group  mx-3">
            <NavLink to="contact" className="group-hover:underline group-hover:decoration-1 group-hover:underline-offset-8 ">
              Contact
            </NavLink>
          </li>

          <div
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            className={`absolute bg-white rounded-sm px-8 py-4 -bottom-[120px] grid grid-cols-2 gap-x-12 gap-y-6 justify-center transition-opacity duration-500 ease-in-out z-50 ${submenu ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          >


            <div className='flex items-center gap-2 group'>
              <FontAwesomeIcon className='text-primaryDarkColor hover:cursor-pointer' icon={faPlane} />
              <span className='paragraph text-black hover:text-primaryDarkColor hover:cursor-pointer'>Travel</span>
            </div>

            <div className='flex items-center gap-2 group'>
              <FontAwesomeIcon className='text-primaryDarkColor hover:cursor-pointer' icon={faBicycle} />
              <span className='paragraph text-black hover:text-primaryDarkColor hover:cursor-pointer'>Lifestyle</span>
            </div>

            <div className='flex items-center gap-2 group'>
              <FontAwesomeIcon className='text-primaryDarkColor hover:cursor-pointer' icon={faDiamond} />
              <span className='paragraph text-black hover:text-primaryDarkColor hover:cursor-pointer'>Beauty</span>
            </div>

            <div className='flex items-center gap-2 group'>
              <FontAwesomeIcon className='text-primaryDarkColor hover:cursor-pointer' icon={faCamera} />
              <span className='paragraph text-black hover:text-primaryDarkColor hover:cursor-pointer'>Phtography</span>
            </div>

          </div>

        </ul>


        {/* Navigation for mobile view*/}

        <ul
          onClick={() => {
            setmmenu(prev => !prev)
            setmsubmenu(false)
          }}
          className=" relative flex justify-center gap-3 items-center text-white max-w-[530px] tablet:hidden cursor-pointer"
        >
          <li>
            <FontAwesomeIcon icon={faBars} className='text-3xl' />
          </li>

          {/* Mobile Menu */}
          <div
            className={`absolute top-[60%] transform translate-y-[12%] w-[80%] bg-white pb-6 transition-all duration-300 ease-in-out shadow-lg overflow-hidden tablet:hidden z-50 flex flex-col
          ${mmenu ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}
        `}
          >
            <NavLink to="/" className="text-black hover:bg-[#5F5F5F] hover:text-white border-b p-3">
              Home
            </NavLink>
            <div onClick={(e) => {
              e.stopPropagation();
              setmsubmenu(prev => !prev);
            }} className='flex justify-between items-center border-b hover:bg-[#5F5F5F] group'>
              <p className="text-black group-hover:bg-[#5F5F5F] group-hover:text-white  p-3">
                Categories
              </p>
              <FontAwesomeIcon
                icon={faChevronDown} className='text-sm text-black mr-2 group-hover:text-white' />
            </div>
            <div>
              <ul className={`overflow-hidden transition-all duration-500 ${msubmenu ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <NavLink to="categories"> <li className=" group text-black  border-b p-3">
                  <div className='flex items-center gap-2 '>
                    <FontAwesomeIcon className='text-primaryDarkColor hover:cursor-pointer' icon={faPlane} />
                    <span className='paragraph text-black group-hover:text-primaryDarkColor hover:cursor-pointer'>Travel</span>
                  </div>
                </li></NavLink>

                <li className=" group text-black  border-b p-3">
                  <div className='flex items-center gap-2 '>
                    <FontAwesomeIcon className='text-primaryDarkColor hover:cursor-pointer' icon={faBicycle} />
                    <span className='paragraph text-black group-hover:text-primaryDarkColor hover:cursor-pointer'>Lifestyle</span>
                  </div>
                </li>
                <li className=" group text-black  border-b p-3">
                  <div className='flex items-center gap-2 '>
                    <FontAwesomeIcon className='text-primaryDarkColor hover:cursor-pointer' icon={faDiamond} />
                    <span className='paragraph text-black group-hover:text-primaryDarkColor hover:cursor-pointer'>Beauty</span>
                  </div>
                </li>
                <li className=" group text-black  border-b p-3">
                  <div className='flex items-center gap-2 '>
                    <FontAwesomeIcon className='text-primaryDarkColor hover:cursor-pointer' icon={faCamera} />
                    <span className='paragraph text-black group-hover:text-primaryDarkColor hover:cursor-pointer'>Phtography</span>
                  </div>
                </li>
              </ul>
            </div>
            <NavLink to="about" className="text-black hover:bg-[#5F5F5F] hover:text-white border-b p-3">
              About
            </NavLink>
            <NavLink to="post" className="text-black hover:bg-[#5F5F5F] hover:text-white border-b p-3">
              Blog Post
            </NavLink>
            <NavLink to="contact" className="text-black hover:bg-[#5F5F5F] hover:text-white border-b p-3">
              Contact
            </NavLink>
          </div>

        </ul>




      </div>




    </div>
  )
}

export default Navbar
