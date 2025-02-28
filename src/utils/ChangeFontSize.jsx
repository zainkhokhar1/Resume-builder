
import React from 'react'
import { useDispatch } from 'react-redux';
import { updateField } from '../store/TemplateSlice';

const ChangeFontSize = ({ element }) => {
    const dispatch = useDispatch();

    const handleUpdate = (size) => {
        dispatch(updateField({ field: element, updates: { fontSize: size } }))
    }


    return (
        <div className='flex flex-col gap-2 text-black text-center'>

            <div onClick={() => handleUpdate('text-xs')} className='cursor-pointer bg-gray-100 border border-gray-300 py-1 text-sm  hover:bg-gray-200 w-full duration-200 px-1 rounded-md'>Extra Small</div>

            <div onClick={() => handleUpdate('text-sm')} className='cursor-pointer bg-gray-100 border border-gray-300 py-1 text-sm hover:bg-gray-200 w-full duration-200 px-1 rounded-md'>Small</div>

            <div onClick={() => handleUpdate('text-md')} className='cursor-pointer bg-gray-100 border border-gray-300 py-1 text-sm hover:bg-gray-200 w-full duration-200 px-1 rounded-md'>Medium</div>

            <div onClick={() => handleUpdate('text-lg')} className='cursor-pointer bg-gray-100 border border-gray-300 py-1 text-sm hover:bg-gray-200 w-full duration-200 px-1 rounded-md'>Large</div>

            <div onClick={() => handleUpdate('text-xl')} className='cursor-pointer bg-gray-100 border border-gray-300 py-1 text-sm hover:bg-gray-200 w-full duration-200 px-1 rounded-md'>Extra Large</div>

            <div onClick={() => handleUpdate('text-2xl')} className='cursor-pointer bg-gray-100 border border-gray-300 py-1 text-sm hover:bg-gray-200 w-full duration-200 px-1 rounded-md'>XL</div>

            <div onClick={() => handleUpdate('text-3xl')} className='cursor-pointer bg-gray-100 border border-gray-300 py-1 text-sm hover:bg-gray-200 w-full duration-200 px-1 rounded-md'>XXL</div>
        </div>
    )
}

export default ChangeFontSize;