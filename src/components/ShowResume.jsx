
import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import SingleResumeContainer from './SingleResumeContainer';
import resume1 from '../assets/resume1.jpeg';
import resume2 from '../assets/resume2.jpeg';
import resume3 from '../assets/resume3.jpg';
import resume4 from '../assets/resume4.jpg';
import resume5 from '../assets/resume5.png';
import first from '../assets/resume6.jpeg';

const ShowResume = () => {

    const [selected, setSelected] = useState('All');
    const [option, setOption] = useState('Experience Level');
    const [showSelectOption, setShowSelectOption] = useState(false);

    const options = [
        'All',
        'Professional',
        'Minimal',
        'Creative',
        'ATS Friendly',
    ];

    // array of images of resumes
    const resumes = [
        first,
        resume2,
        resume3,
        resume4,
        resume5,
        resume1,
        resume1,
        resume4,
        resume5,
        resume2,
        resume3,
        resume1
    ];

    return (
        <div className='w-full my-7 px-34'>

            <div className='w-full flex items-center'>

                {/* container to show the Nav for operations  */}
                <div className='flex items-center w-3/4 gap-4'>
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
                <div className='flex cursor-pointer relative items-center gap-2 w-2/4' onClick={() => { setShowSelectOption(!showSelectOption) }}>
                    <span className='text-gray-500 text-[14px]'>
                        Filter By Expereince:
                    </span>
                    <div className='border border-gray-300 hover:border-gray-500 duration-300 rounded-full flex items-center justify-between gap-2 w-60 px-2 py-2 text-sm'>
                        <span className='text-gray-700 text-sm font-medium'>
                            {
                                option
                            }
                        </span>
                        <MdOutlineKeyboardArrowDown className='text-2xl text-gray-400' />
                    </div>

                    {/* container with absolute position to show the options */}
                    <div className={`${showSelectOption ? "opacity-100" : "opacity-0"} duration-200 flex absolute top-12 bg-white p-1 z-10 border border-slate-200 cursor-pointer shadow-sm left-30 flex-col w-48 rounded-md text-base font-medium text-slate-600`}>
                        <span onClick={(e) => { setOption('Beginner / Intern'); e.stopPropagation(); setShowSelectOption(!showSelectOption) }} className='hover:text-slate-950 py-2 px-3 hover:bg-gray-100  border border-transparent border-b-slate-200'>
                            Beginner / Intern
                        </span>
                        <span onClick={(e) => { setOption('Intermediate'); e.stopPropagation(); setShowSelectOption(!showSelectOption) }} className='hover:text-slate-950 py-2 px-3 hover:bg-gray-100 border-b-slate-200 border border-transparent'>
                            Intermediate
                        </span>
                        <span onClick={(e) => { setOption('Expert'); e.stopPropagation(); setShowSelectOption(!showSelectOption) }} className='hover:text-slate-950 py-2 px-3 hover:bg-gray-100'>
                            Expert
                        </span>
                    </div>

                    {/* container covering all the page and click on it to close the options open */}
                    {
                        showSelectOption ? <div onClick={() => setShowSelectOption(false)} className='fixed top-0 left-0 cursor-auto w-screen h-screen z-0'></div> : null
                    }
                </div>
            </div>

            {/* flex container to show the resultant resumes */}
            <div className="flex flex-wrap gap-10 items-center justify-center mt-10">
                {
                    resumes.map((single, index) => {
                        return (
                            <SingleResumeContainer key={single + index} img={single} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default ShowResume;