import React from 'react'

const ChangeFontBold = ({ setData, element }) => {
    return (
        <div className='flex flex-col gap-2 items-center text-black'>

            <div onClick={() => setData(prevData => ({
                ...prevData,
                [element]: { ...prevData[element], fontWeight: 'font-thin' }
            }))} className='cursor-pointer bg-gray-100 border border-gray-300 hover:bg-gray-200 w-full duration-200 py-1 text-sm px-1 rounded-md'>Thin</div>

            <div onClick={() => setData(prevData => ({
                ...prevData,
                [element]: { ...prevData[element], fontWeight: 'font-light' }
            }))} className='cursor-pointer bg-gray-100 border border-gray-300  duration-200 py-1 text-sm  hover:bg-gray-200 px-1 rounded-md w-full'>Light</div>

            <div onClick={() => setData(prevData => ({
                ...prevData,
                [element]: { ...prevData[element], fontWeight: 'font-normal' }
            }))} className='cursor-pointer bg-gray-100 border border-gray-300 py-1  hover:bg-gray-200 w-full duration-200 text-sm px-1 rounded-md'>Normal</div>

            <div onClick={() => setData(prevData => ({
                ...prevData,
                [element]: { ...prevData[element], fontWeight: 'font-medium' }
            }))} className='cursor-pointer bg-gray-100 border border-gray-300 py-1 text-sm hover:bg-gray-200 w-full duration-200 px-1 rounded-md'>Medium</div>

            <div onClick={() => setData(prevData => ({
                ...prevData,
                [element]: { ...prevData[element], fontWeight: 'font-semibold' }
            }))} className='cursor-pointer bg-gray-100 border border-gray-300 py-1 text-sm hover:bg-gray-200 w-full duration-200 px-1 rounded-md'>Semi Bold</div>

            <div onClick={() => setData(prevData => ({
                ...prevData,
                [element]: { ...prevData[element], fontWeight: 'font-bold' }
            }))} className='cursor-pointer bg-gray-100 border border-gray-300 py-1 text-sm hover:bg-gray-200 w-full duration-200 px-1 rounded-md'>Bold</div>

            <div onClick={() => setData(prevData => ({
                ...prevData,
                [element]: { ...prevData[element], fontWeight: 'font-extrabold' }
            }))} className='cursor-pointer bg-gray-100 border border-gray-300 py-1 text-sm hover:bg-gray-200 w-full duration-200 px-1 rounded-md'>Extra Bold</div>

            <div onClick={() => setData(prevData => ({
                ...prevData,
                [element]: { ...prevData[element], fontWeight: 'font-black' }
            }))} className='cursor-pointer bg-gray-100 border border-gray-300 py-1 text-sm hover:bg-gray-200 w-full duration-200 px-1 rounded-md'>Black</div>

        </div>
    )
}

export default ChangeFontBold;
