import React, { Fragment, useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import ChangeColour from './ChangeColour';
import ChangeFontSize from './ChangeFontSize';
import ChangeFontBold from './ChangeFontBold';


const Toggle = ({ data, setData, className, element }) => {

    const [showIn, setShowIn] = useState(true);
    const [showOptions, setShowOptions] = useState(false);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setShowIn(!showIn);
            setShowOptions(!showOptions);
        }
    }

    return (
        <>
            {
                showIn ? "" : <Fragment className='relative w-fit'>
                    <input
                        className={`outline-purple-700/10 h-11 p-1 ${data[element]?.fontWeight} ${data[element]?.fontSize} ${className}`}
                        style={{ color: data[element]?.colour }}
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
                showIn && (
                    <div className={`${className} break-words ${data[element]?.fontWeight} ${data[element]?.fontSize}`} style={{ color: data[element]?.colour }} onDoubleClick={() => { setShowIn(!showIn); setShowOptions(!showOptions) }}>
                        {
                            data[element]?.text
                        }
                    </div>
                )
            }

            {/* later move this sidebar to separate file */}
            <div className={`fixed w-44 overflow-y-auto pt-50 space-y-2 bg-black/80 h-screen z-[999] flex flex-col items-center justify-center gap-5 py-5 left-0 top-0 transition-all text-white duration-500 ${showOptions ? '-translate-x-0' : '-translate-x-full z-10'}`} >

                {/* absolute cross to close the options */}
                <div className='absolute top-4 right-2 p-2 rounded-full bg-black hover:bg-black/80 text-white duration-200 cursor-pointer' onClick={() => {
                    setShowIn(!showIn);
                    setShowOptions(!showOptions);
                }}>
                    <RxCross1 />
                </div>

                <div className='flex items-center justify-center w-full'>
                    <ChangeColour setData={setData} data={data} element={element} />
                </div>

                <div className='w-full px-3 text-center'>
                    <h2 className='text-sm font-semibold my-2'>
                        Select Font Size
                    </h2>
                    <ChangeFontSize setData={setData} element={element} />
                </div>

                <div className='text-center'>
                    <h2 className='text-sm font-semibold my-2'>
                        Change Font Boldness
                    </h2>
                    <ChangeFontBold setData={setData} element={element} />
                </div>

            </div>

        </>
    )
}

export default Toggle;
