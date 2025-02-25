
import React, { useState } from 'react'
import Toggle from '../utils/InputToggle';

const First = () => {

    const [templateData, setTemplateData] = useState({
        name: {
            text: 'Muhammad Zain ul Abideen',
            colour: '#000000',
            fontSize: 'text-4xl',
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


    return (
        <div className='p-10 w-[8.27in] h-[11.69in] mx-auto my-14 mt-32 bg-slate-50'>

            {/* 1/3 starting part of template */}
            <div className='flex justify-between '>

                {/* container for the text */}
                <div className='space-y-1 '>

                    {/* Name */}
                    <div>
                        <Toggle className={` font-bold min-w-full ${templateData?.name?.fontSize} ${templateData?.name?.colour} `}
                            data={templateData}
                            setData={setTemplateData}
                            element={'name'}
                        />
                    </div>
                    {/* location */}
                    <div>
                        <Toggle className={` min-w-full ${templateData?.location?.fontSize} ${templateData?.location?.colour}`}
                            data={templateData}
                            setData={setTemplateData}
                            element={'location'}
                        />
                    </div>
                    {/* phone number */}
                    <div>
                        <Toggle className={` min-w-full ${templateData?.phone?.fontSize} ${templateData?.phone?.colour}`}
                            data={templateData}
                            setData={setTemplateData}
                            element={'phone'}
                        />
                    </div>

                    {/* Email Address */}
                    <div>
                        <Toggle className={` min-w-full ${templateData?.email?.fontSize} ${templateData?.email?.colour}`}
                            data={templateData}
                            setData={setTemplateData}
                            element={'email'}
                        />
                    </div>

                </div>
                {/* container for the image */}
                <div className='w-40 h-40 rounded-lg'>
                    <img className='w-full h-full object-contain' src='https://th.bing.com/th/id/R.88e27777b427a0aa3b5f41ab0507fdee?rik=QZ6F7H1Kz6YMUA&pid=ImgRaw&r=0' alt='template' />
                </div>
            </div>

            {/* line between the sections */}
            <div className='h-[2px] w-full bg-black/75 my-5'></div>

            {/* objective */}
            <div>
                <Toggle className={`min-w-full font-bold ${templateData?.objective?.fontSize} ${templateData?.objective?.colour}`}
                    data={templateData}
                    setData={setTemplateData}
                    element={'objective'}
                />
                <Toggle className={`min-w-full text-md ${templateData?.objectivePara?.fontSize} ${templateData?.objectivePara?.colour}`}
                    data={templateData}
                    setData={setTemplateData}
                    element={'objectivePara'}
                />
            </div>

            {/* personal data */}
            <div className='mt-10 space-y-1'>

                <Toggle className={`min-w-full font-bold ${templateData?.personalData?.fontSize} ${templateData?.personalData?.colour}`}
                    data={templateData}
                    setData={setTemplateData}
                    element={'personalData'}
                />

                {/* nick name */}
                <div className='flex items-center gap-2'>
                    <Toggle className={`font-semibold ${templateData?.nickName?.fontSize} ${templateData?.nickName?.colour}`}
                        data={templateData}
                        setData={setTemplateData}
                        element={'nickName'}
                    />
                    <Toggle className={` ${templateData?.nickNameData?.fontSize} ${templateData?.nickNameData?.colour}`}
                        data={templateData}
                        setData={setTemplateData}
                        element={'nickNameData'}
                    />
                </div>

                {/* age */}
                <div className="flex gap-2 items-center">
                    <Toggle className={`font-semibold ${templateData?.age?.fontSize} ${templateData?.age?.colour}`}
                        data={templateData}
                        setData={setTemplateData}
                        element={'age'}
                    />
                    <Toggle className={` ${templateData?.ageData?.fontSize} ${templateData?.ageData?.colour}`}
                        data={templateData}
                        setData={setTemplateData}
                        element={'ageData'}
                    />
                </div>

                {/* birth day */}
                <div className="flex gap-2 items-center">
                    <Toggle className={`font-semibold ${templateData?.birthDay?.fontSize} ${templateData?.birthDay?.colour}`}
                        data={templateData}
                        setData={setTemplateData}
                        element={'birthDay'}
                    />
                    <Toggle className={` ${templateData?.birthDayData?.fontSize} ${templateData?.birthDayData?.colour}`}
                        data={templateData}
                        setData={setTemplateData}
                        element={'birthDayData'}
                    />
                </div>

                {/* civil status */}
                <div className="flex items-center gap-2">
                    <Toggle className={`font-semibold ${templateData?.civilStats?.fontSize} ${templateData?.civilStats?.colour}`}
                        data={templateData}
                        setData={setTemplateData}
                        element={'civilStats'}
                    />
                    <Toggle className={` ${templateData?.civilStatsData?.fontSize} ${templateData?.civilStatsData?.colour}`}
                        data={templateData}
                        setData={setTemplateData}
                        element={'civilStatsData'}
                    />

                </div>
                {/* permanent address */}
                <div className="flex gap-2 items-center">
                    <Toggle className={`font-semibold ${templateData?.permanentAddress?.fontSize} ${templateData?.permanentAddress?.colour}`}
                        data={templateData}
                        setData={setTemplateData}
                        element={'permanentAddress'}
                    />
                    <Toggle className={` ${templateData?.permanentAddressData?.fontSize} ${templateData?.permanentAddressData?.colour}`}
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
                <Toggle className={`min-w-full font-bold ${templateData?.educationalBackground?.fontSize} ${templateData?.educationalBackground?.colour}`}
                    data={templateData}
                    setData={setTemplateData}
                    element={'educationalBackground'}
                />

                {/* college */}
                <div className='flex py-8 px-6 gap-2 items-start justify-start'>
                    <Toggle className={`w-1/2 h-full list-item font-semibold ${templateData?.college?.fontSize} ${templateData?.college?.colour}`}
                        data={templateData}
                        setData={setTemplateData}
                        element={'college'}
                    />
                    {/* div to show the content */}
                    <div className='flex flex-col text-center gap-2'>
                        <Toggle className={` ${templateData?.collegeData?.fontSize} ${templateData?.collegeData?.colour}`}
                            data={templateData}
                            setData={setTemplateData}
                            element={'collegeData'}
                        />
                        <Toggle className={` ${templateData?.degreeData?.fontSize} ${templateData?.degreeData?.colour}`}
                            data={templateData}
                            setData={setTemplateData}
                            element={'degreeData'}
                        />
                        <Toggle className={` ${templateData?.degreeCollegeData?.fontSize} ${templateData?.degreeCollegeData?.colour}`}
                            data={templateData}
                            setData={setTemplateData}
                            element={'degreeCollegeData'}
                        />
                        <Toggle className={` ${templateData?.degreeTimePeriod?.fontSize} ${templateData?.degreeTimePeriod?.colour}`}
                            data={templateData}
                            setData={setTemplateData}
                            element={'degreeTimePeriod'}
                        />
                    </div>
                </div>

                {/* secondary */}
                <div className='flex py-8 px-6 gap-2 items-start justify-start'>
                    <Toggle className={`w-1/2 list-item font-semibold ${templateData?.secondary?.fontSize} ${templateData?.secondary?.colour}`}
                        data={templateData}
                        setData={setTemplateData}
                        element={'secondary'}
                    />
                    <div className='flex flex-col pl-10 text-center gap-2'>
                        <Toggle className={` ${templateData?.secondaryData?.fontSize} ${templateData?.secondaryData?.colour}`}
                            data={templateData}
                            setData={setTemplateData}
                            element={'secondaryData'}
                        />
                        <Toggle className={` ${templateData?.secondaryDegreeData?.fontSize} ${templateData?.secondaryDegreeData?.colour}`}
                            data={templateData}
                            setData={setTemplateData}
                            element={'secondaryDegreeData'}
                        />
                        <Toggle className={` ${templateData?.secondaryTimePeriod?.fontSize} ${templateData?.secondaryTimePeriod?.colour}`}
                            data={templateData}
                            setData={setTemplateData}
                            element={'secondaryTimePeriod'}
                        />

                    </div>
                </div>

                {/* Primary */}
                <div className='flex py-8 px-6 gap-2 items-start justify-start'>
                    <Toggle className={`w-1/2 list-item font-semibold ${templateData?.primary?.fontSize} ${templateData?.primary?.colour}`}
                        data={templateData}
                        setData={setTemplateData}
                        element={'primary'}
                    />
                    <div className='flex flex-col pl-10 text-center gap-2'>
                        <Toggle className={` ${templateData?.primaryData?.fontSize} ${templateData?.primaryData?.colour}`}
                            data={templateData}
                            setData={setTemplateData}
                            element={'primaryData'}
                        />
                        <Toggle className={` ${templateData?.primaryTimePeriod?.fontSize} ${templateData?.primaryTimePeriod?.colour}`}
                            data={templateData}
                            setData={setTemplateData}
                            element={'primaryTimePeriod'}
                        />

                    </div>
                </div>


            </div>
        </div>
    )
}

export default First