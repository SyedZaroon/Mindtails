import { faClock, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { assets } from '../assets/assets'
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";


function Footer() {
  return (
    <div className="bg-[#0F1012] pt-20 pb-10">
      <div className="max-w-[1240px] m-auto px-5 laptopl:px-0 grid sm:grid-cols-1 sm:px-7 tablet:grid-cols-2 laptop:grid-cols-4 gap-5">
        <div>
          <h5 className="text-white heading5">About</h5>
          <hr className="bg-borderColor h-[0.5px] opacity-50"></hr>
          <p className="mt-5 paragraph text-white">
            Appetite no humoured returned informed. Possession so comparison
            inquietude he he conviction no decisively.
          </p>
        </div>

        <div>
          <h5 className="text-white heading5">Tags</h5>
          <hr className="bg-borderColor h-[0.5px] opacity-50"></hr>
          <div className="w-full flex gap-2 flex-wrap mt-5">
            <span className="py-[3px] px-2 border-[1px] border-[#636363] rounded-sm bg-[#383838] text-white hover:text-primaryColor cursor-pointer ">
              Activities
            </span>
            <span className="py-[3px] px-2 border-[1px] border-[#636363] rounded-sm bg-[#383838] text-white hover:text-primaryColor cursor-pointer ">
              Fashion
            </span>
            <span className="py-[3px] px-2 border-[1px] border-[#636363] rounded-sm bg-[#383838] text-white hover:text-primaryColor cursor-pointer ">
              Health
            </span>
            <span className="py-[3px] px-2 border-[1px] border-[#636363] rounded-sm bg-[#383838] text-white hover:text-primaryColor cursor-pointer ">
              Lifestyle
            </span>
            <span className="py-[3px] px-2 border-[1px] border-[#636363] rounded-sm bg-[#383838] text-white hover:text-primaryColor cursor-pointer ">
              Photography
            </span>
            <span className="py-[3px] px-2 border-[1px] border-[#636363] rounded-sm bg-[#383838] text-white hover:text-primaryColor cursor-pointer ">
              Sport
            </span>
            <span className="py-[3px] px-2 border-[1px] border-[#636363] rounded-sm bg-[#383838] text-white hover:text-primaryColor cursor-pointer ">
              Travel
            </span>
          </div>
        </div>

        <div>
          <h5 className="text-white heading5">Recent Posts</h5>
          <hr className="bg-borderColor h-[0.5px] opacity-50"></hr>
          <div className="flex flex-col gap-2 mt-5">
            <div className="relative flex gap-5 items-center justify-start">
              <div className="relative w-[80px]">
                <img
                  src={assets.post3}
                  className="w-full transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <div>
                <p className="sub-text font-semibold transition-all duration-300 text-white hover:text-gray-600 cursor-pointer">
                  Setting Goals and Staying Motivated
                </p>
                <span className="text-textColor text-xs ">
                  {" "}
                  <FontAwesomeIcon icon={faClock} /> April 16, 2023{" "}
                </span>
              </div>
            </div>

            <div className="relative flex gap-5 items-center justify-start">
              <div className="relative w-[80px]">
                <img
                  src={assets.post8}
                  className="w-full transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <div>
                <p className="sub-text font-semibold transition-all duration-300 text-white hover:text-gray-600 cursor-pointer">
                  Setting Goals and Staying Motivated
                </p>
                <span className="text-textColor text-xs ">
                  {" "}
                  <FontAwesomeIcon icon={faClock} /> April 16, 2023{" "}
                </span>
              </div>
            </div>

            <div className="relative flex gap-5 items-center justify-start">
              <div className="relative w-[80px]">
                <img
                  src={assets.post14}
                  className="w-full transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <div>
                <p className="sub-text font-semibold transition-all duration-300 text-white hover:text-gray-600 cursor-pointer">
                  Setting Goals and Staying Motivated
                </p>
                <span className="text-textColor text-xs ">
                  {" "}
                  <FontAwesomeIcon icon={faClock} /> April 16, 2023{" "}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h5 className="text-white heading5">Follow Me</h5>
          <hr className="bg-borderColor h-[0.5px] opacity-50"></hr>

          <div className="header-icons hidden tablet:flex justify-start items-center gap-1 mt-5">
            <div className="w-8 h-8 flex justify-center items-center rounded-[10%] text-white hover:bg-secondaryColor bg-secondaryDarkColor">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>

            <div className="w-8 h-8 flex justify-center items-center rounded-[10%] text-white bg-accent-yellow hover:bg-accent-yellowlight">
              <FontAwesomeIcon icon={faTwitter} />
            </div>

            <div className="w-8 h-8 flex justify-center items-center rounded-[10%] text-white bg-accent-purple hover:bg-accent-purplelight">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>

            <div className="w-8 h-8 flex justify-center items-center rounded-[10%] text-white hover:bg-primaryColor bg-primaryDarkColor">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </div>
      </div>

      <hr className="h-[1px] bg-[#303030] opacity-50 mt-5"></hr>
      <p className="m-auto mt-5 paragraph text-center text-white">
        Design and Develop By{" "}
        <a href="">
          <span className="text-primaryDarkColor">Zaroon</span>
        </a>
      </p>
    </div>
  );
}

export default Footer;
