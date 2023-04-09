import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from 'react-icons/fc'




const SignUpForm = ({ setIsLoggedIn }) => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setaccountType] = useState("student");
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const changeHandler = (e) => {
        setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("Password do not match");
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account Created");

        const finalData = { ...formData, accountType };
        console.log("Printing Sign Up data");
        console.log(finalData);
        navigate("/dashboard")
    }




    return (
        <>
            <div className=' flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max border-b-2 border-richblack-700'>
                <button
                    className={` py-2 px-5 rounded-full transition-all duration-200
                    ${accountType === "student" ? " bg-richblack-900 text-richblack-5" : " bg-transparent text-richblack-200"}`}
                    onClick={() => setaccountType("student")}>
                    Student
                </button>

                <button
                    className={` py-2 px-5 rounded-full transition-all duration-200
                    ${accountType === "instructor" ? " bg-richblack-900 text-richblack-5" : " bg-transparent text-richblack-200"}`}
                    onClick={() => setaccountType("instructor")}>
                    Instructor
                </button>

            </div>

            <form onSubmit={submitHandler} className=''>
                {/* firstName and lastName */}
                <div className=' flex justify-between gap-x-4'>
                    <label>
                        <p className='text-sm text-richblack-5 mb-1 leading-[1.375rem]'>
                            First Name <sup className='  text-pink-200'>*</sup></p>

                        <input
                            className=' bg-richblack-800 rounded-lg text-richblack-5 w-full p-3 border-b-2 border-richblack-700'
                            type="text"
                            name='firstName'
                            placeholder='Enter first name'
                            onChange={changeHandler}
                            value={formData.firstName}
                            required
                        />
                    </label>


                    <label>
                        <p className='text-sm text-richblack-5 mb-1 leading-[1.375rem]'>
                            Last Name <sup className='  text-pink-200'>*</sup></p>

                        <input
                            className=' bg-richblack-800 rounded-lg text-richblack-5 w-full p-3 border-b-2 border-richblack-700'
                            type="text"
                            name='lastName'
                            placeholder='Enter last name'
                            onChange={changeHandler}
                            value={formData.lastName}
                            required
                        />
                    </label>
                </div>



                {/* email */}
                <label >
                    <p className=' mt-[20px] text-sm text-richblack-5 mb-1 leading-[1.375rem]'>
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


                {/* password and confirmPassword */}
                <div className=' mt-[20px] flex justify-between gap-x-4'>
                    <label className='w-full relative'>
                        <p className='text-sm text-richblack-5 mb-1 leading-[1.375rem]' >
                            Create Password <sup className='  text-pink-200'>*</sup></p>

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
                    </label>



                    <label className='w-full relative'>
                        <p className='text-sm text-richblack-5 mb-1 leading-[1.375rem]' >
                            Confirm Password <sup className='  text-pink-200'>*</sup></p>

                        <input
                            className=' bg-richblack-800 rounded-lg text-richblack-5 w-full p-3 border-b-2 border-richblack-700'
                            type={showConfirmPassword ? "text" : "password"}
                            name='confirmPassword'
                            placeholder='Confirm Password'
                            onChange={changeHandler}
                            value={formData.confirmPassword}
                            required
                        />

                        <span
                            className=' absolute right-3 top-[38px] cursor-pointer'
                            onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            {
                                showConfirmPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />
                            }
                        </span>
                    </label>
                </div>


                <div className='mt-4'>
                    <button className=' w-full rounded-lg font-medium bg-yellow-50 border text-black border-richblack-700 px-3 py-2 gap-x-2 mt-6  hover:bg-transparent hover:text-richblack-100 transition-all duration-200'>
                        Create Account
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
        </>
    )
}

export default SignUpForm