import React, { Fragment, useState } from 'react'

const Toggle = ({ data, setData, className, element }) => {

    const [showIn, setShowIn] = useState(true);
    const [showOptions, setShowOptions] = useState(false);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setShowIn(!showIn);
        }
    }

    return (
        <>
            {
                showIn ? "" : <Fragment className='relative w-fit'>
                    <input
                        className={`outline-none ${className}`}
                        value={data[element]?.text}
                        onChange={(e) =>
                            setData(prevData => ({
                                ...prevData,
                                [element]: {
                                    ...prevData[element],
                                    text: e.target.value
                                }
                            }))
                        }
                        onKeyDown={handleKeyDown}
                        autoFocus
                    />
                </Fragment>
            }
            {
                showIn ? (
                    <div className={className} onDoubleClick={() => { setShowIn(!showIn); setShowOptions(!showOptions) }}>
                        {
                            data[element]?.text
                        }
                    </div>
                ) :
                    <div className='fixed w-fit h-fit z-[999] top-24 flex items-center gap-2 left-2/6' onClick={() => setShowOptions(!showOptions)}>

                        <div>
                            <h2>
                                Select Colour
                            </h2>

                            <div className='flex gap-2 items-center'>
                                <div onClick={() => setData(prevData => ({
                                    ...prevData,
                                    [element]: { ...prevData[element], colour: 'text-black' }
                                }))} className='cursor-pointer flex w-5 h-5 rounded-full bg-black'></div>

                                <div onClick={() => setData(prevData => ({
                                    ...prevData,
                                    [element]: { ...prevData[element], colour: 'text-purple-600' }
                                }))} className='cursor-pointer flex w-5 h-5 rounded-full bg-purple-600'></div>

                                <div onClick={() => setData(prevData => ({
                                    ...prevData,
                                    [element]: { ...prevData[element], colour: 'text-yellow-600' }
                                }))} className='cursor-pointer flex w-5 h-5 rounded-full bg-yellow-600'></div>

                                <div onClick={() => setData(prevData => ({
                                    ...prevData,
                                    [element]: { ...prevData[element], colour: 'text-red-600' }
                                }))} className='cursor-pointer flex w-5 h-5 rounded-full bg-red-600'></div>
                            </div>
                        </div>

                        <div>
                            <h2>
                                Select Font Size
                            </h2>
                            <div className='flex gap-1'>

                                <div onClick={() => setData(prevData => ({
                                    ...prevData,
                                    [element]: { ...prevData[element], fontSize: 'text-xs' }
                                }))} className='cursor-pointer bg-gray-100 border border-gray-300 py-1 text-sm w-fit px-1 rounded-md'>Extra Small</div>

                                <div onClick={() => setData(prevData => ({
                                    ...prevData,
                                    [element]: { ...prevData[element], fontSize: 'text-sm' }
                                }))} className='cursor-pointer bg-gray-100 border border-gray-300 py-1 text-sm w-fit px-1 rounded-md'>Small</div>

                                <div onClick={() => setData(prevData => ({
                                    ...prevData,
                                    [element]: { ...prevData[element], fontSize: 'text-md' }
                                }))} className='cursor-pointer bg-gray-100 border border-gray-300 py-1 text-sm w-fit px-1 rounded-md'>Medium</div>

                                <div onClick={() => setData(prevData => ({
                                    ...prevData,
                                    [element]: { ...prevData[element], fontSize: 'text-lg' }
                                }))} className='cursor-pointer bg-gray-100 border border-gray-300 py-1 text-sm w-fit px-1 rounded-md'>Large</div>

                                <div onClick={() => setData(prevData => ({
                                    ...prevData,
                                    [element]: { ...prevData[element], fontSize: 'text-xl' }
                                }))} className='cursor-pointer bg-gray-100 border border-gray-300 py-1 text-sm w-fit px-1 rounded-md'>Extra Large</div>

                                <div onClick={() => setData(prevData => ({
                                    ...prevData,
                                    [element]: { ...prevData[element], fontSize: 'text-2xl' }
                                }))} className='cursor-pointer bg-gray-100 border border-gray-300 py-1 text-sm w-fit px-1 rounded-md'>XL</div>

                                <div onClick={() => setData(prevData => ({
                                    ...prevData,
                                    [element]: { ...prevData[element], fontSize: 'text-3xl' }
                                }))} className='cursor-pointer bg-gray-100 border border-gray-300 py-1 text-sm w-fit px-1 rounded-md'>XXL</div>
                            </div>
                        </div>

                    </div>
            }
            <div className={`absolute top-0 left-0 w-full h-full ${showIn ? "hidden" : "bg-transparent"} bg-opacity-50 z-[99]`} onClick={() => { setShowOptions(!showOptions); setShowIn(!showIn) }}></div>
        </>
    )
}

export default Toggle;
