import React from 'react'
import { assets } from '../assets/assets'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faClock, faMessage } from "@fortawesome/free-solid-svg-icons";

function Postbox(props) {
  console.log(props)
  return (
    <div>
      {/* Blog post 1 */}
      <div className="flex flex-wrap tablet:flex-nowrap gap-4 bg-white border rounded-sm">
        {/* Post Images */}

        <img
          src={props.image}
          alt="Travel Post"
          className="tablet:w-[330px] w-full h-auto object-cover transition-all duration-300  hover:brightness-75"
        />

        {/* Post details */}
        <div className="py-8 px-5 flex flex-col gap-2">
          <div className="flex gap-2 text-sm text-gray-600">
            <span className="p-1 bg-primaryDarkColor text-white sub-text rounded-sm ">
              LifeStyle
            </span>
            <span className="p-1 bg-primaryDarkColor text-white sub-text rounded-sm ">
              Travel
            </span>
          </div>

          <a href="">
            <h1 className="heading4">{props.title}</h1>
          </a>
          {/* Post details author */}
          <div className="flex flex-wrap gap-3 items-center">
            <a href="">
              <div className="group flex gap-2 items-center">
                <FontAwesomeIcon
                  icon={faUser}
                  className="sub-text text-tagColor group-hover:text-primaryDarkColor"
                />
                <span className="sub-text text-tagColor group-hover:text-primaryDarkColor">
                  Hellen
                </span>
              </div>
            </a>
            <div className="group flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faClock}
                className="sub-text text-tagColor"
              />
              <span className="sub-text text-tagColor">April 16, 2023</span>
            </div>
            <div className="group flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faMessage}
                className="sub-text text-tagColor"
              />
              <span className="sub-text text-tagColor">No Comment</span>
            </div>
          </div>

          {/* Post expert */}
          <p className="paragraph text-textColor">
            Consulted perpetual of pronounce me delivered. Too months nay end
            change relied who beauty wishes matter. Shew of john real park so
            rest we on. Ignorant dwelling occasion ham for thoughts overcame
            off…
          </p>
          <a
            href=""
            className="paragraph text-black hover:text-primaryDarkColor font-bold"
          >
            Read More
          </a>
        </div>
      </div>

    </div>
  );
}

export default Postbox
