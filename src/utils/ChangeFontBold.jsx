import React from 'react';
import { useDispatch } from 'react-redux';
import { updateField } from '../store/TemplateSlice';

const ChangeFontBold = ({ element }) => {
    const dispatch = useDispatch();

    const handleUpdateFontWeight = (weight) => {
        dispatch(updateField({ field: element, updates: { fontWeight: weight } }))
    }


    return (
        <div className='flex flex-col gap-2 items-center text-black'>

            <div onClick={() => handleUpdateFontWeight('font-thin')} className='cursor-pointer bg-gray-100 border border-gray-300 hover:bg-gray-200 w-full duration-200 py-1 text-sm px-1 rounded-md'>Thin</div>

            <div onClick={() => handleUpdateFontWeight('font-light')} className='cursor-pointer bg-gray-100 border border-gray-300  duration-200 py-1 text-sm  hover:bg-gray-200 px-1 rounded-md w-full'>Light</div>

            <div onClick={() => handleUpdateFontWeight('font-normal')} className='cursor-pointer bg-gray-100 border border-gray-300 py-1  hover:bg-gray-200 w-full duration-200 text-sm px-1 rounded-md'>Normal</div>

            <div onClick={() => handleUpdateFontWeight('font-medium')} className='cursor-pointer bg-gray-100 border border-gray-300 py-1 text-sm hover:bg-gray-200 w-full duration-200 px-1 rounded-md'>Medium</div>

            <div onClick={() => handleUpdateFontWeight('font-semibold')} className='cursor-pointer bg-gray-100 border border-gray-300 py-1 text-sm hover:bg-gray-200 w-full duration-200 px-1 rounded-md'>Semi Bold</div>

            <div onClick={() => handleUpdateFontWeight('font-bold')} className='cursor-pointer bg-gray-100 border border-gray-300 py-1 text-sm hover:bg-gray-200 w-full duration-200 px-1 rounded-md'>Bold</div>

            <div onClick={() => handleUpdateFontWeight('font-extrabold')} className='cursor-pointer bg-gray-100 border border-gray-300 py-1 text-sm hover:bg-gray-200 w-full duration-200 px-1 rounded-md'>Extra Bold</div>

            <div onClick={() => handleUpdateFontWeight('font-black')} className='cursor-pointer bg-gray-100 border border-gray-300 py-1 text-sm hover:bg-gray-200 w-full duration-200 px-1 rounded-md'>Black</div>

        </div>
    )
}

export default ChangeFontBold;
