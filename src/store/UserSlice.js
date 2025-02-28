
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from '../../firebaseConfig.js'
import { collection, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';

export const createUser = createAsyncThunk('/User/create', async ({ email, password }, { rejectWithValue }) => {

    try {

        // check if the details are given or not
        if (!email || !password) {
            return rejectWithValue('Missing Parameter');
        }

        const docRef = await addDoc(collection(db, 'users'),
            {
                email,
                password,
                createdAt: Date.now()
            });
        return {
            success: true,
            id: docRef?.id
        }
    }
    catch (e) {
        console.log('Error While creating the user');
        return rejectWithValue(e.message);
    }
});

export const updateUser = createAsyncThunk('/User/update', async ({ email, password,id }, { rejectWithValue }) => {
    try {
        if (!id) {
            return rejectWithValue('User ID is required');
        }

        if (!email && !password) {
            return rejectWithValue('At least one field (email or password) is required');
        }

        const userRef = doc(db, 'users', id);
        const updateData = {};
        if (email) updateData.email = email;
        if (password) updateData.password = password;

        await updateDoc(userRef, updateData);

        return {
            success: true,
            id
        }
    }
    catch (e) {
        console.log('Error While updating the user');
        return rejectWithValue(e.message);
    }
});


export const deleteUser = createAsyncThunk('/User/delete', async ({ id }, { rejectWithValue }) => {
    try {
        if (!id) {
            return rejectWithValue('Id is required');
        }

        // first finding the document in the firebase
        const userRef = doc(db, 'users', id)
        await deleteDoc(userRef);

        return {
            success: true,
            id
        }
    }
    catch (e) {
        console.log('Error while deleting the document');
        return rejectWithValue(e.message);
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        success: false,
        loading: false,
        data: [],
        error: null,
    },
    reducers: {},

    extraReducers: (builder) => {

        //  for creating the user
        builder.addCase(createUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(createUser.rejected, (state, action) => {
            state.error = action.payload;
            state.success = false;
            state.loading = false;
        });

        builder.addCase(createUser.fulfilled, (state, action) => {
            state.error = null;
            state.success = true;
            state.loading = false;
            state.data = action.payload;
        });

        // for updating user detail
        builder.addCase(updateUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(updateUser.rejected, (state, action) => {
            state.error = action.payload;
            state.success = false;
            state.loading = false;
        });

        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.error = null;
            state.success = true;
            state.loading = false;
            state.data = action.payload;
        });

        // for deleting the user
        builder.addCase(deleteUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(deleteUser.rejected, (state, action) => {
            state.error = action.payload;
            state.success = false;
            state.loading = false;
        });

        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.error = null;
            state.success = true;
            state.loading = false;
            state.data = action.payload;
        });
    }

});

export default userSlice.reducer;