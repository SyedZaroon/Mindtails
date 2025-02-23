import React from "react";
import Sidebar from "../components/Sidebar";
import Postbox from "../components/Postbox";
import Trandingpost from "../components/Trandingpost";
import Hotnews from "../components/Hotnews";
import { assets } from '../assets/assets'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faClock, faMessage } from "@fortawesome/free-solid-svg-icons";


function Categories() {
  return (
    <div>
      <div className="flex gap-3 my-12">
        {/* Main Content */}
        <div className="xl:basis-[868px] basis-auto">
          <div>
            <h4 className="heading5">
              Category <span className="text-primaryDarkColor">Travel</span>
            </h4>
            <hr className="mt-3 h-[2px] bg-primaryDarkColor" />
          </div>

          {/* Post Desigm */}

          <div className="mt-5">
            <div className="laptopl:basis-[868px] basis-auto flex flex-col gap-5">
                      
                       {/* Blog post 1 */}
                            <div className="flex flex-wrap tablet:flex-nowrap gap-4 bg-white border rounded-sm">
                              {/* Post Images */}
                      
                              <img
                                src={assets.post8}
                                alt="Travel Post"
                                className="tablet:w-[330px] w-full h-auto object-cover transition-all duration-300  hover:brightness-75"
                              />
                      
                              {/* Post details */}
                              <div className="py-8 px-5 flex flex-col gap-2">
                                <div className="flex gap-2 text-sm text-gray-600">
                                  <span className="p-1 bg-primaryDarkColor text-white sub-text rounded-sm ">
                              Beauty
                                  </span>
                                  <span className="p-1 bg-primaryDarkColor text-white sub-text rounded-sm ">
                              Photography
                                  </span>
                                </div>
                      
                                <a href="">
                            <h1 className="heading4">Setting Goals and Staying Motivated</h1>
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
                      
                       {/* Blog post 2 */}
                            <div className="flex flex-wrap tablet:flex-nowrap gap-4 bg-white border rounded-sm">
                              {/* Post Images */}
                      
                              <img
                                src={assets.post3}
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
                                  <h1 className="heading4">Reflecting on the Blessings in My Life</h1>
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
                      
                       {/* Blog post 3 */}
                            <div className="flex flex-wrap tablet:flex-nowrap gap-4 bg-white border rounded-sm">
                              {/* Post Images */}
                      
                              <img
                                src={assets.hot1}
                                alt="Travel Post"
                                className="tablet:w-[330px] w-full h-auto object-cover transition-all duration-300  hover:brightness-75"
                              />
                      
                              {/* Post details */}
                              <div className="py-8 px-5 flex flex-col gap-2">
                                <div className="flex gap-2 text-sm text-gray-600">
                                  <span className="p-1 bg-primaryDarkColor text-white sub-text rounded-sm ">
                                    Beauty
                                  </span>
                                  <span className="p-1 bg-primaryDarkColor text-white sub-text rounded-sm ">
                                    Photography
                                  </span>
                                </div>
                      
                                <a href="">
                            <h1 className="heading4">My Experience with Anxiety and Depression</h1>
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
                      
                       {/* Blog post 4 */}
                            <div className="flex flex-wrap tablet:flex-nowrap gap-4 bg-white border rounded-sm">
                              {/* Post Images */}
                      
                              <img
                                src={assets.hot2}
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
                            <h1 className="heading4">Change: Coping with Life’s Transitions</h1>
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
                      
                       {/* Blog post 5 */}
                            <div className="flex flex-wrap tablet:flex-nowrap gap-4 bg-white border rounded-sm">
                              {/* Post Images */}
                      
                              <img
                                src={assets.insta2}
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
                            <h1 className="heading4">Traveled: Lessons from Taking Risks</h1>
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
                      
                       {/* Blog post 6 */}
                            <div className="flex flex-wrap tablet:flex-nowrap gap-4 bg-white border rounded-sm">
                              {/* Post Images */}
                      
                              <img
                                src={assets.insta1}
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
                            <h1 className="heading4">Learning to Embrace My Imperfections</h1>
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
                      
                       {/* Blog post 7 */}
                            <div className="flex flex-wrap tablet:flex-nowrap gap-4 bg-white border rounded-sm">
                              {/* Post Images */}
                      
                              <img
                                src={assets.insta3}
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
                            <h1 className="heading4">Travel: Exploring the World on My Own</h1>
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
                      
                       {/* Blog post 8 */}
                            <div className="flex flex-wrap tablet:flex-nowrap gap-4 bg-white border rounded-sm">
                              {/* Post Images */}
                      
                              <img
                                src={assets.insta4}
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
                            <h1 className="heading4">Moments that Matter in Life and Love</h1>
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
                      
                       {/* Blog post 9 */}
                            <div className="flex flex-wrap tablet:flex-nowrap gap-4 bg-white border rounded-sm">
                              {/* Post Images */}
                      
                              <img
                                src={assets.insta5}
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
                            <h1 className="heading4">Breaking Free from Conventional Wisdom</h1>
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
                      
                       {/* Blog post 10 */}
                            <div className="flex flex-wrap tablet:flex-nowrap gap-4 bg-white border rounded-sm">
                              {/* Post Images */}
                      
                              <img
                                src={assets.insta6}
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
                            <h1 className="heading4">Perspective: Seeing Life Through New Eyes</h1>
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
          </div>
        </div>

        {/* Sidebar */}
        <div className="basis-[350px] hidden laptop:block">
          <Sidebar />
        </div>
      </div>

      {/* Trending & Hot News Section */}
      <div className="py-6 flex gap-4 flex-wrap xl:flex-nowrap">
        <Trandingpost />
        <Hotnews />
      </div>
    </div>
  );
}

export default Categories;
