
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUser, updateUser } from '../store/UserSlice';
import { useForm } from 'react-hook-form';


const UpdateUserDetails = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    // handle deletion
    const handleDelete=()=>{
        dispatch(deleteUser({ id : 'vYwbBVXmrofSOBQ0Gh0m' }))
    }

    const onSubmit = (data) => {
        let newData = { ...data, id: 'vYwbBVXmrofSOBQ0Gh0m' };
        updateUser(dispatch(updateUser((newData))));
    }
    return (
        <div class="flex w-screen min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <img class="mx-auto h-10 w-auto" src="https://img.lovepik.com/element/45006/8218.png_860.png" alt="Your Company" />
                <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Create your Account</h2>
            </div>

            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label for="email" class="block text-sm/6 font-medium text-gray-900">Update Email</label>
                        <div class="mt-2">
                            <input type="email" name="email" id="email" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" {...register("email", { required: false, minLength: 4 })} />
                            {errors.email && <span className='text-red-600 text-sm'>Email must be of 4 characters</span>}

                        </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm/6 font-medium text-gray-900">Update Password</label>
                            <div class="text-sm">
                                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                            </div>
                        </div>
                        <div class="mt-2">
                            <input type="password" name="password" id="password" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" {...register("password", { required: false, minLength: 4 })} />
                            {errors.password && <span className='text-red-600 text-sm'>Password must be of 4 characters</span>}
                        </div>
                    </div>

                    <div>
                        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
                    </div>
                </form>

                <p class="mt-10 text-center text-sm/6 text-gray-500">
                    Not a member?
                    <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
                </p>
            </div>
            {/* Button to delete the user testing */}
            <button className='bg-black text-white px-3 py-2 rounded-xl' onClick={handleDelete}>
                Delete User
            </button>
        </div>
    )
}

export default UpdateUserDetails