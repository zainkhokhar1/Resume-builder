
import React from 'react';
import { IoIosAdd } from "react-icons/io";

const Hero = () => {
    return (
        <div className='bg-[#F0F0F0] h-[450px] w-full relative overflow-hidden'>

            <h1 className='text-5xl font-[1000] text-center pt-20 text-[#333]'>
                Resume Templates
            </h1>
            <p className='w-6/12 text-center mx-auto mt-6 text-[#666]'>
            Unlock your career potential with our AI-powered resume builder—a user-friendly platform designed to help you create professional, modern resumes in minutes. Enhance your content with smart suggestions, customize your design with our easy-to-use editor, and export your polished resume as a PDF.
            </p>

            <button className='bg-[#D54027] hover:bg-[#b83721] duration-300 cursor-pointer px-6 py-[13px]  font-medium rounded-full text-white text-base tracking-wider mt-6 mx-auto flex items-center gap-[2px]'>
                <span>
                    <IoIosAdd className='text-3xl opacity-70' />
                </span>
                <span className='opacity-90'>
                    Create New Resume
                </span>
            </button>


            {/* span for the colour */}
            <span className='rounded-full bg-[#FBC9C3] h-48 w-48 absolute -bottom-22 right-2/12 opacity-90'></span>

            {/* span for the colour */}
            <span className='bg-[#CDD2F7] h-80 w-36 rounded-full absolute -bottom-44 -rotate-45 left-2/12 opacity-90'>

            </span>
        </div>
    )
}

export default Hero