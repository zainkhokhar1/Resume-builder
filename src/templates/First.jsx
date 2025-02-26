
import React, { useEffect, useRef, useState } from 'react'
import Toggle from '../utils/InputToggle';
import { RiAttachmentLine } from "react-icons/ri";
import ChangeImage from '../utils/ChangeImage';
import { jsPDF } from "jspdf";
import domtoimage from "dom-to-image";

const First = () => {

    const Ref = useRef(null);
    const [templateHeight, setTemplateHeight] = useState(1122);
    const [pages, setPages] = useState(1);

    const [templateData, setTemplateData] = useState(
        localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) :
            {
                name: {
                    text: 'Muhammad Zain ul Abideen',
                    colour: '#000000',
                    fontSize: 'text-3xl',
                },
                location: {
                    text: 'Mohalah gulshan aftab town charka Road, Rawalpindi',
                    colour: '#000000',
                    fontSize: 'text-md',
                },
                phone: {
                    text: '0312-1234567',
                    colour: '#000000',
                    fontSize: 'text-md',
                },
                email: {
                    text: 'muhammadzain@gmail.com',
                    colour: '#000000',
                    fontSize: 'text-sm',
                },
                objective: {
                    text: 'Objective:',
                    colour: '#000000',
                    fontSize: 'text-lg',
                },
                objectivePara: {
                    text: 'To work in a challenging environment where I can utilize my skills and knowledge in the best possible way for the achievement of the organization’s goals and objectives.',
                    colour: '#000000',
                    fontSize: 'text-md',
                },
                personalData: {
                    text: 'Personal Data:',
                    colour: '#000000',
                    fontSize: 'text-lg',
                },
                nickName: {
                    text: 'Nick Name:',
                    colour: '#000000',
                    fontSize: 'text-md',
                },
                nickNameData: {
                    text: 'Zain',
                    colour: '#000000',
                    fontSize: 'text-md',
                },
                age: {
                    text: 'Age:',
                    colour: '#000000',
                    fontSize: 'text-md',
                },
                ageData: {
                    text: 18,
                    colour: '#000000',
                    fontSize: 'text-md',
                },
                birthDay: {
                    text: 'Birth Day:',
                    colour: '#000000',
                    fontSize: 'text-md',
                },
                birthDayData: {
                    text: '12th July 2003',
                    colour: '#000000',
                    fontSize: 'text-md',
                },
                civilStats: {
                    text: 'Civil Status:',
                    colour: '#000000',
                    fontSize: 'text-md',
                },
                civilStatsData: {
                    text: 'Single',
                    colour: '#000000',
                    fontSize: 'text-md',
                },
                permanentAddress: {
                    text: 'Permanent Address:',
                    colour: '#000000',
                    fontSize: 'text-md',
                },
                permanentAddressData: {
                    text: 'Mohalah gulshan aftab town charka Road, Rawalpindi',
                    colour: '#000000',
                    fontSize: 'text-md',
                },
                educationalBackground: {
                    text: 'Educational Background:',
                    colour: '#000000',
                    fontSize: 'text-lg',
                },
                college: {
                    text: 'College:',
                    colour: '#000000',
                    fontSize: 'text-md',
                },
                collegeData: {
                    text: 'University of Engineering and Technology, Taxila',
                    colour: '#000000',
                    fontSize: 'text-md',
                },
                degreeData: {
                    text: 'Bachelors in Computer Science',
                    colour: '#000000',
                    fontSize: 'text-md',
                },
                degreeCollegeData: {
                    text: 'Punjab College, Rawalpindi',
                    colour: '#000000',
                    fontSize: 'text-md',
                },
                degreeTimePeriod: {
                    text: '2019-2023',
                    colour: '#000000',
                    fontSize: 'text-md',
                },
                secondary: {
                    text: 'Secondary:',
                    colour: '#000000',
                    fontSize: 'text-md',
                },
                secondaryData: {
                    text: 'F.G Public School, Rawalpindi',
                    colour: '#000000',
                    fontSize: 'text-md',
                },
                secondaryDegreeData: {
                    text: 'Matriculation',
                    colour: '#000000',
                    fontSize: 'text-md',
                },
                secondaryTimePeriod: {
                    text: '2017-2019',
                    colour: '#000000',
                    fontSize: 'text-md',
                },
                primary: {
                    text: 'Primary:',
                    colour: '#000000',
                    fontSize: 'text-md',
                },
                primaryData: {
                    text: 'F.G Public School, Rawalpindi',
                    colour: '#000000',
                    fontSize: 'text-md',
                },
                primaryTimePeriod: {
                    text: '2015-2017',
                    colour: '#000000',
                    fontSize: 'text-md',
                },
            });

    const downloadImage = () => {
        if (Ref.current) {
            const element = Ref.current; // The component to capture

            // Get the actual width & height of the component
            const width = element.offsetWidth;
            const height = element.offsetHeight;

            domtoimage.toPng(element)
                .then((dataUrl) => {
                    const pdf = new jsPDF("p", "mm", "a4"); // Portrait, A4 size
                    const imgWidth = 210; // A4 width in mm
                    const imgHeight = (height / width) * imgWidth; // Maintain aspect ratio

                    pdf.addImage(dataUrl, "PNG", 0, 0, imgWidth, imgHeight);
                    pdf.save("component.pdf");
                })
                .catch((err) => console.log("Error generating PDF:", err));
        }
    };


    // state for image selection show
    const [showImageSelect, setShowImageSelect] = useState(false);

    // state for image
    const [img, setImg] = useState(localStorage.getItem('img') ?
        JSON.parse(localStorage.getItem('img')) :
        'https://th.bing.com/th/id/R.88e27777b427a0aa3b5f41ab0507fdee?rik=QZ6F7H1Kz6YMUA&pid=ImgRaw&r=0'
    );

    // function to upload image to the cloudinary and set image url
    const handleImageUpload = async (e) => {
        let newImage = await ChangeImage(e.target.files[0]);
        if (newImage) {
            setImg(newImage);
        }
    }

    useEffect(() => {
        const observer = new MutationObserver(() => {
            if (Ref.current) {
                setTemplateHeight(Ref.current.scrollHeight);
            }
        });

        // here attaching an observer to the dom element
        if (Ref.current) {
            observer.observe(Ref.current, { childList: true, subtree: true });
        }

        return () => observer.disconnect(); // Cleanup
    }, [templateData]);

    // useEffect for updating the pages number
    useEffect(() => {
        // switch to check the pages
        let a = templateHeight / 1122;
        if (a > 1.1 && a <= 2) {
            setPages(2);
        } else if (a > 2.1 && a <= 3) {
            setPages(3);
        } else if (a > 3.1 && a <= 4) {
            setPages(4);
        }
        else if (a > 4.1 && a <= 5) {
            setPages(5);
        }
        else if (a > 5.1 && a <= 6) {
            setPages(6);
        }
        else if (a > 6.1 && a <= 7) {
            setPages(7);
        }
        else if (a > 7.1 && a <= 8) {
            setPages(8);
        }
        else {
            a <= 1 ? setPages(1) : setPages((prev) => prev != undefined ? setPages(prev) : setPages(1));
        }

    }, [templateHeight])

    // useEffect to store the updated data
    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(templateData));
    }, [templateData])

    // useEffect to store the image information
    useEffect(() => {
        localStorage.setItem('img', JSON.stringify(img));
    }, [img])

    return (
        // 

        <div className='w-full h-full flex items-center justify-center mt-20'>
            <div ref={Ref} className='p-10 w-[8.27in] overflow-visible h-[11.69in] relative  bg-slate-50'>
                {/* 1/3 starting part of template */}

                <div className='absolute -top-10 left-1/2 px-2 py-1 rounded-md bg-amber-300/5 border border-purple-600/10'>
                    <span>
                        Pages : {
                            pages
                        }
                    </span>
                    <button onClick={downloadImage} className='cursor-pointer'>Download</button>
                </div>
                <div className='flex justify-between w-full'>
                    {/* container for the text */}
                    <div className='space-y-1 w-4/6'>

                        {/* Name */}
                        <div className='w-full'>
                            <Toggle className={` font-bold cursor-pointer `}
                                data={templateData}
                                setData={setTemplateData}
                                element={'name'}
                            />
                        </div>
                        {/* location */}
                        <div>
                            <Toggle className={`w-full cursor-pointer  `}
                                data={templateData}
                                setData={setTemplateData}
                                element={'location'}
                            />
                        </div>
                        {/* phone number */}
                        <div>
                            <Toggle className={` min-w-full cursor-pointer `}
                                data={templateData}
                                setData={setTemplateData}
                                element={'phone'}
                            />
                        </div>

                        {/* Email Address */}
                        <div>
                            <Toggle className={` min-w-full cursor-pointer `}
                                data={templateData}
                                setData={setTemplateData}
                                element={'email'}
                            />
                        </div>

                    </div>
                    {/* container for the image */}
                    <div className='min-w-38 w-2/6 min-h-38 max-h-38 max-w-38 rounded-lg relative' onMouseEnter={() => setShowImageSelect(!showImageSelect)} onMouseLeave={() => setShowImageSelect(!showImageSelect)}>

                        <img className='w-full h-full object-center' src={img} alt='template' />

                        {/* absolute container to show the select image option */}

                        <div className={`${showImageSelect ? 'opacity-100' : 'opacity-0'} transition-all duration-300 absolute inset-0 bg-black/20 h-full cursor-pointer w-full flex items-center justify-center`}>
                            <RiAttachmentLine className='text-gray-300 text-2xl hover:text-white duration-200' />

                            {/* input to get file */}
                            <input type="file" onChange={handleImageUpload} className='opacity-0 h-full w-full absolute inset-0 cursor-pointer' />
                        </div>

                    </div>

                </div>
                {/* line between the sections */}
                <div className='h-[2px] w-full bg-black/75 my-5'></div>

                {/* objective */}
                <div className='h-fit'>
                    <Toggle className={`cursor-pointer min-w-full font-bold `}
                        data={templateData}
                        setData={setTemplateData}
                        element={'objective'}
                    />
                    <Toggle className={`cursor-pointer min-w-full text-md `}
                        data={templateData}
                        setData={setTemplateData}
                        element={'objectivePara'}
                    />
                </div>

                {/* personal data */}
                <div className='mt-10 space-y-1'>

                    <Toggle className={`min-w-full font-bold `}
                        data={templateData}
                        setData={setTemplateData}
                        element={'personalData'}
                    />

                    {/* nick name */}
                    <div className='flex items-start gap-2 w-full'>
                        <Toggle className={`font-semibold w-2/12 `}
                            data={templateData}
                            setData={setTemplateData}
                            element={'nickName'}
                        />
                        <Toggle className={`w-10/12 cursor-pointer `}
                            data={templateData}
                            setData={setTemplateData}
                            element={'nickNameData'}
                        />
                    </div>

                    {/* age */}
                    <div className="flex gap-2 items-start mt-2">
                        <Toggle className={`w-2/12 font-semibold `}
                            data={templateData}
                            setData={setTemplateData}
                            element={'age'}
                        />
                        <Toggle className={`w-10/12 cursor-pointer `}
                            data={templateData}
                            setData={setTemplateData}
                            element={'ageData'}
                        />
                    </div>

                    {/* birth day */}
                    <div className="flex gap-2 items-start mt-2">
                        <Toggle className={`w-2/12 font-semibold `}
                            data={templateData}
                            setData={setTemplateData}
                            element={'birthDay'}
                        />
                        <Toggle className={`w-10/12 cursor-pointer `}
                            data={templateData}
                            setData={setTemplateData}
                            element={'birthDayData'}
                        />
                    </div>

                    {/* civil status */}
                    <div className="flex items-start gap-2 mt-2">
                        <Toggle className={`w-2/12 font-semibold `}
                            data={templateData}
                            setData={setTemplateData}
                            element={'civilStats'}
                        />
                        <Toggle className={`cursor-pointer w-10/12 `}
                            data={templateData}
                            setData={setTemplateData}
                            element={'civilStatsData'}
                        />

                    </div>
                    {/* permanent address */}
                    <div className="flex gap-2 items-start mt-2">
                        <Toggle className={`w-2/12 font-semibold `}
                            data={templateData}
                            setData={setTemplateData}
                            element={'permanentAddress'}
                        />
                        <Toggle className={`cursor-pointer w-10/12 `}
                            data={templateData}
                            setData={setTemplateData}
                            element={'permanentAddressData'}
                        />
                    </div>

                </div>

                {/* line between the sections */}
                <div className='h-[2px] w-full bg-black/75 my-5'></div>

                {/* educational background */}
                <div>
                    <Toggle className={`min-w-full font-bold `}
                        data={templateData}
                        setData={setTemplateData}
                        element={'educationalBackground'}
                    />

                    {/* college */}
                    <div className='flex py-8 px-6 gap-2 items-start justify-start w-full'>
                        <Toggle className={`w-2/6 h-full list-item font-semibold  `}
                            data={templateData}
                            setData={setTemplateData}
                            element={'college'}
                        />
                        {/* div to show the content */}
                        <div className='flex flex-col text-center gap-2 w-4/6'>
                            <Toggle className={`cursor-pointer  `}
                                data={templateData}
                                setData={setTemplateData}
                                element={'collegeData'}
                            />
                            <Toggle className={`cursor-pointer `}
                                data={templateData}
                                setData={setTemplateData}
                                element={'degreeData'}
                            />
                            <Toggle className={`cursor-pointer `}
                                data={templateData}
                                setData={setTemplateData}
                                element={'degreeCollegeData'}
                            />
                            <Toggle className={`cursor-pointer `}
                                data={templateData}
                                setData={setTemplateData}
                                element={'degreeTimePeriod'}
                            />
                        </div>
                    </div>

                    {/* secondary */}
                    <div className='flex py-8 px-6 gap-2 items-start justify-start'>
                        <Toggle className={` w-2/6 list-item font-semibold `}
                            data={templateData}
                            setData={setTemplateData}
                            element={'secondary'}
                        />
                        <div className='flex flex-col pl-10 text-center gap-2 w-4/6'>
                            <Toggle className={`cursor-pointer `}
                                data={templateData}
                                setData={setTemplateData}
                                element={'secondaryData'}
                            />
                            <Toggle className={`cursor-pointer `}
                                data={templateData}
                                setData={setTemplateData}
                                element={'secondaryDegreeData'}
                            />
                            <Toggle className={`cursor-pointer `}
                                data={templateData}
                                setData={setTemplateData}
                                element={'secondaryTimePeriod'}
                            />

                        </div>
                    </div>

                    {/* Primary */}
                    <div className='flex py-8 px-6 gap-2 items-start justify-start'>
                        <Toggle className={`w-2/6 list-item font-semibold `}
                            data={templateData}
                            setData={setTemplateData}
                            element={'primary'}
                        />
                        <div className='flex flex-col pl-10 text-center gap-2 w-4/6'>
                            <Toggle className={`cursor-pointer `}
                                data={templateData}
                                setData={setTemplateData}
                                element={'primaryData'}
                            />
                            <Toggle className={`cursor-pointer `}
                                data={templateData}
                                setData={setTemplateData}
                                element={'primaryTimePeriod'}
                            />

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default First;