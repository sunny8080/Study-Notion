import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'




const LogInForm = ({ setIsLoggedIn }) => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const changeHandler = (e) => {
        setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
        toast.success('Logged In');

        console.log("Printing Sign In data");
        console.log(formData);
        navigate("/dashboard")
    }



    return (
        <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
            <label>
                <p className='text-sm text-richblack-5 mb-1 leading-[1.375rem]'>
                    Email Address <sup className='  text-pink-200'>*</sup></p>

                <input
                    className=' bg-richblack-800 rounded-lg text-richblack-5 w-full p-3 border-b-2 border-richblack-700'
                    type="email"
                    name='email'
                    placeholder='Enter email address'
                    onChange={changeHandler}
                    value={formData.email}
                    required
                />
            </label>


            <label className='w-full relative'>
                <p className='text-sm text-richblack-5 mb-1 leading-[1.375rem]' >
                    Password <sup className='  text-pink-200'>*</sup></p>

                <input
                    className=' bg-richblack-800 rounded-lg text-richblack-5 w-full p-3 border-b-2 border-richblack-700'
                    type={showPassword ? "text" : "password"}
                    name='password'
                    placeholder='Enter Password'
                    onChange={changeHandler}
                    value={formData.password}
                    required
                />

                <span
                    className=' absolute right-3 top-[38px] cursor-pointer'
                    onClick={() => setShowPassword((prev) => !prev)}>
                    {
                        showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />
                    }
                </span>

                <Link>
                    <p className=' text-xs mt-1 text-blue-100 max-w-max ml-auto' >
                        Forgot Password</p>
                </Link>
            </label>



            <div>
                <button className='w-full rounded-lg font-medium bg-yellow-50 border text-black border-richblack-700 px-3 py-2 gap-x-2 mt-6  hover:bg-transparent hover:text-richblack-100 transition-all duration-200'>
                    Sign in
                </button>

                <div className='flex items-center w-full my-4 gap-x-2'>
                    <div className='w-full h-[1px] bg-richblack-200 opacity-50' ></div>
                    <p className=' text-richblack-200 font-medium leading-[1.375rem] opacity-50' >OR</p>
                    <div className='w-full h-[1px] bg-richblack-200 opacity-50' ></div>
                </div>

                <button className='flex justify-center items-center w-full rounded-lg font-medium text-richblack-100 border border-richblack-700 px-3 py-2 gap-x-2 mt-6 hover:bg-yellow-50 hover:text-black transition-all duration-200'>
                    <FcGoogle fontSize="1.35rem" />
                    Sign in with Google
                </button>
            </div>

        </form>
    )
}

export default LogInForm