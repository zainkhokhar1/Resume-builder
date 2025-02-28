import React, { useState } from 'react'
import { HexColorPicker } from "react-colorful";
import { useDispatch, useSelector } from 'react-redux';
import { updateField } from '../store/TemplateSlice';

const ChangeColour = ({ element }) => {
    const data = useSelector((state) => state.template);
    const dispatch = useDispatch();
    const [color, setColor] = useState(data[element]?.colour);
    const [showPicker, setShowPicker] = useState(false);

    // Generate Tailwind text color class dynamically
    // Function to update color when closing the picker
    const handleClosePicker = () => {
        setShowPicker(false);

        // Update state only when the picker is closed (reduces unnecessary updates)
        dispatch(updateField({ field: element, updates: { colour: color } }))
    };

    return (
        <div className='relative w-fit'>
            <h2>Select Colour</h2>

            {/* Circular button to open the color picker */}
            <button
                className="w-8 h-8 rounded-full border border-gray-400"
                style={{ backgroundColor: color }}
                onClick={() => setShowPicker(true)}
            ></button>

            {/* Show color picker when button is clicked */}
            {showPicker && (
                <div className="fixed z-50 top-12 left-0 bg-white shadow-lg p-2 rounded-md">
                    <HexColorPicker color={color} onChange={setColor} />
                </div>
            )}

            {/* Click outside to close the picker & update the state */}
            {showPicker && (
                <div
                    className="fixed inset-0 w-screen h-screen bg-black/10"
                    onClick={handleClosePicker}
                ></div>
            )}
        </div>
    );
};

export default ChangeColour;
