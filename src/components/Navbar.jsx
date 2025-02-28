
import React from 'react'

const Navbar = () => {
    return (
        <div id='no-print' className='bg-white h-18 flex items-center justify-between border border-transparent border-b-[1px] border-b-gray-300 shadow-xs px-14'>

            <div className='flex items-center gap-24'>

                <span className='text-[#D64227] cursor-pointer font-[950] text-3xl'>
                    CV maker
                </span>

                <div className='flex items-center gap-6 mt-[3px]'>

                    <span className='text-slate-700 hover:text-slate-800 font-bold cursor-pointer duration-300'>
                        Home
                    </span>
                    <span className='text-slate-600 hover:text-slate-800 font-medium cursor-pointer duration-300'>
                    Templates
                    </span>
                    <span className='text-slate-600 hover:text-slate-800 font-medium cursor-pointer duration-300'>
                    My Resumes
                    </span>
                    <span className='text-slate-600 hover:text-slate-800 font-medium cursor-pointer duration-300'>
                        Help & Support
                    </span>

                </div>
            </div>

            <div className='flex items-center gap-2'>
                <button className='bg-[#F0F0F0] hover:bg-[#e0e0e0] duration-300 cursor-pointer px-7 py-[10px] text-sm font-medium rounded-full'>
                    Log In
                </button>
                <button className='bg-[#D64227] duration-300 hover:bg-[#b83721] cursor-pointer text-white px-4 py-[10px] text-sm rounded-full'>
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default Navbar;