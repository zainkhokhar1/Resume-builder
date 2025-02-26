
import React from 'react'

const ChangeFontSize = ({ setData, element }) => {
    return (
        <div className='flex flex-col gap-2 text-black text-center'>

            <div onClick={() => setData(prevData => ({
                ...prevData,
                [element]: { ...prevData[element], fontSize: 'text-xs' }
            }))} className='cursor-pointer bg-gray-100 border border-gray-300 py-1 text-sm  hover:bg-gray-200 w-full duration-200 px-1 rounded-md'>Extra Small</div>

            <div onClick={() => setData(prevData => ({
                ...prevData,
                [element]: { ...prevData[element], fontSize: 'text-sm' }
            }))} className='cursor-pointer bg-gray-100 border border-gray-300 py-1 text-sm hover:bg-gray-200 w-full duration-200 px-1 rounded-md'>Small</div>

            <div onClick={() => setData(prevData => ({
                ...prevData,
                [element]: { ...prevData[element], fontSize: 'text-md' }
            }))} className='cursor-pointer bg-gray-100 border border-gray-300 py-1 text-sm hover:bg-gray-200 w-full duration-200 px-1 rounded-md'>Medium</div>

            <div onClick={() => setData(prevData => ({
                ...prevData,
                [element]: { ...prevData[element], fontSize: 'text-lg' }
            }))} className='cursor-pointer bg-gray-100 border border-gray-300 py-1 text-sm hover:bg-gray-200 w-full duration-200 px-1 rounded-md'>Large</div>

            <div onClick={() => setData(prevData => ({
                ...prevData,
                [element]: { ...prevData[element], fontSize: 'text-xl' }
            }))} className='cursor-pointer bg-gray-100 border border-gray-300 py-1 text-sm hover:bg-gray-200 w-full duration-200 px-1 rounded-md'>Extra Large</div>

            <div onClick={() => setData(prevData => ({
                ...prevData,
                [element]: { ...prevData[element], fontSize: 'text-2xl' }
            }))} className='cursor-pointer bg-gray-100 border border-gray-300 py-1 text-sm hover:bg-gray-200 w-full duration-200 px-1 rounded-md'>XL</div>

            <div onClick={() => setData(prevData => ({
                ...prevData,
                [element]: { ...prevData[element], fontSize: 'text-3xl' }
            }))} className='cursor-pointer bg-gray-100 border border-gray-300 py-1 text-sm hover:bg-gray-200 w-full duration-200 px-1 rounded-md'>XXL</div>
        </div>
    )
}

export default ChangeFontSize;