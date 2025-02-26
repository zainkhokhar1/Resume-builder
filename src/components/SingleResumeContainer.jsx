
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SingleResumeContainer = ({ img = ''}) => {

  const [showSelect, setShowSelect] = useState(false);


  return (
    <Link to={`/template/first`} className='bg-[#EFEFEF] w-[450px] h-[550px] cursor-pointer p-4 relative' onMouseEnter={() => { setShowSelect(true) }} onMouseLeave={() => { setShowSelect(false) }}>
      <img src={img} className='min-w-full max-h-full object-fill ' alt="resumeImg" />

      {/* absolute container with button to go to the template */}
      <div className={`absolute ${showSelect ? "opacity-100" : "opacity-0"} bg-black/25 flex transition-all duration-400 inset-0  items-center justify-center h-full`}>
        <button className=' bg-black/85 hover:bg-black duration-200 text-white px-3 py-2 rounded-full mt-2 cursor-pointer'>
          Use Template
        </button>
      </div>
    </Link>
  )
}

export default SingleResumeContainer