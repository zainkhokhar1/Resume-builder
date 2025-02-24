
import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import SingleResumeContainer from './SingleResumeContainer';

const ShowResume = () => {

    const [selected, setSelected] = useState('All');

    const options = [
        'All',
        'Professional',
        'Minimal',
        'Creative',
        'ATS Friendly',
    ];

    return (
        <div className='w-full mt-7 px-18'>

            <div className='w-full flex items-center'>

                {/* container to show the Nav for operations  */}
                <div className='flex items-center w-3/4 gap-4 px-24'>
                    {
                        options?.map((single) => {
                            return (
                                <span onClick={() => setSelected(single)} key={single} className={`${selected === single ? "bg-black text-white" : ""} w-fit cursor-pointer h-fit px-3 py-2  rounded-full text-center text-[#333]`}>
                                    {
                                        single
                                    }
                                </span>
                            )
                        })
                    }
                </div>

                {/* div to show the dropdown */}
                <div className='flex items-center gap-2 w-2/4'>
                    <span className='text-gray-500 text-[14px]'>
                        Filter By Expereince:
                    </span>
                    <div className='border border-gray-300 rounded-full flex items-center justify-between gap-2 w-60 px-2 py-2 text-sm'>
                        <span className='text-gray-700'>
                            Experience Level
                        </span>
                        <MdOutlineKeyboardArrowDown className='text-2xl text-gray-400' />
                    </div>

                </div>
            </div>

            {/* flex container to show the resultant resumes */}
            <div className="flex mx-24 mt-10">
                <SingleResumeContainer />
            </div>

        </div>
    )
}

export default ShowResume;