
import { createSlice } from '@reduxjs/toolkit'

// create a initial data for the slice
const initialState = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : {
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
        theme: {
            color: '#000000'
        },
        image : {
            url : 'https://th.bing.com/th/id/R.88e27777b427a0aa3b5f41ab0507fdee?rik=QZ6F7H1Kz6YMUA&pid=ImgRaw&r=0'
        }
    };

// creating a slice
const templateSlice = createSlice({
    name: 'template',
    initialState,
    reducers: {
        updateField: (state, action) => {
            const { field, updates } = action.payload;
            if (state[field]) {
                state[field] = { ...state[field], ...updates }
            }
        },
    }
});

export const {updateField} = templateSlice.actions;

export default templateSlice.reducer;