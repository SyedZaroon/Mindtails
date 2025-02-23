import { faArrowLeft, faArrowRight, faCircle, faClock, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { assets } from '../assets/assets';
import React, { useState, useEffect } from 'react';

function Slider() {
    const slides = [
        {
            image: assets.slide1,
            title: "Setting Goals And Staying Motivated",
            date: "April, 16 2023",
            comments: "No Comment",
            category: ["Beauty", "Photography"],
            description: "Consulted perpetual of pronounce me delivered. Too months nay end change relied who beauty wishes matter. Shew of john real park so rest we on. Ignorant dwelling occasion ham for thoughts overcame off…",
        },
        {
            image: assets.slide2,
            title: "Reflecting on the Blessings in My Life",
            date: "April, 16 2023",
            comments: "No Comment",
            category: ["Lifestyle", "Travel"],
            description: "Consulted perpetual of pronounce me delivered. Too months nay end change relied who beauty wishes matter. Shew of john real park so rest we on. Ignorant dwelling occasion ham for thoughts overcame off…",
        },
        {
            image: assets.slide3,
            title: "My Experience with Anxiety and Depression",
            date: "April, 16 2023",
            comments: "No Comment",
            category: ["Beauty", "Photography"],
            description: "Consulted perpetual of pronounce me delivered. Too months nay end change relied who beauty wishes matter. Shew of john real park so rest we on. Ignorant dwelling occasion ham for thoughts overcame off…",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false); 

    useEffect(() => {
        if (isHovered) return; // Stop auto-slide when hovered

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isHovered]);

   
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative flex justify-center items-center cursor-pointer z-40">
            <img src={slides[currentIndex].image} className="w-full" alt="Slide" />
            <div className="absolute inset-0 bg-black opacity-50 w-full h-full"></div>

            <div className="absolute flex justify-center items-center flex-col gap-1 w-4/5 m-auto">
                <div className="tablet:flex gap-2 hidden">
                    {slides[currentIndex].category.map((value, index) => (
                        <span key={index} className="bg-accent-yellow text-white py-[3px] px-3 rounded-sm">
                            {value}
                        </span>
                    ))}
                </div>

                <div className="heading text-center">
                    <h1 className="text-white text-[22px] tablet:text-[35px] laptop:text-[60px] font-headingFont font-black">
                        {slides[currentIndex].title}
                    </h1>
                </div>

                <div className="flex items-center gap-1 text-[12px]">
                    <FontAwesomeIcon icon={faClock} className="text-white" />
                    <span className="text-white">{slides[currentIndex].date}</span>
                    <span className="text-white">/</span>
                    <FontAwesomeIcon icon={faMessage} className="text-white" />
                    <span className="text-white">{slides[currentIndex].comments}</span>
                </div>

                <p className="text-white paragraph text-center hidden tablet:block">
                    {slides[currentIndex].description}
                </p>

                <a href='' className="tablet:block primary-btn hidden">Read More</a>
            </div>

            <FontAwesomeIcon
                icon={faArrowLeft}
                className="absolute left-2 lg:left-4 top-1/2 text-white text-lg cursor-pointer hover:text-primaryDarkColor"
                onClick={prevSlide}
            />
            <FontAwesomeIcon
                icon={faArrowRight}
                className="absolute right-2 lg:right-4 top-1/2 text-white text-lg cursor-pointer hover:text-primaryDarkColor"
                onClick={nextSlide}
            />
            <div className="absolute bottom-0 md:flex gap-2 hidden">
                {slides.map((_, index) => (
                    <span key={index} onClick={() => setCurrentIndex(index)} className={`cursor-pointer ${currentIndex === index ? "text-white" : "text-gray-500"}`}>
                        <FontAwesomeIcon icon={faCircle} className=' text-sm ' />
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Slider;
