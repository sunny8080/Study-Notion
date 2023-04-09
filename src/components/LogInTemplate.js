import React from 'react'
import frame from '../assests/frame.png'
import SignUpForm from './SignUpForm'
import LogInForm from './LogInForm'


const LogInTemplate = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>

            {/* left section */}
            <div className='w-11/12  mx-auto mt-12 md:mt-0 md:mx-0  max-w-[450px]'>
                <h3 className=' text-richblack-5 font-semibold text-3xl leading-[2.375rem]'>{title}</h3>

                <p className='text-lg text-richblack-100 leading-[1.625rem] mt-4'>{desc1}</p>

                <p className='text-lg text-blue-100 leading-[1.625rem] italic'>{desc2}</p>

                {
                    formType === "login" ? <LogInForm setIsLoggedIn={setIsLoggedIn} /> : <SignUpForm setIsLoggedIn={setIsLoggedIn} />
                }

            </div>

            {/* right section */}
            <div className='relative w-11/12 mx-auto md:mx-0 max-w-[450px]'>
                <img src={frame} alt="Pattern" width={558} height={504} loading="lazy" />
                <img src={image} alt="Student" width={558} height={490} loading="lazy"
                    className=' absolute -top-4 right-4'
                />
            </div>

        </div>
    )
}

export default LogInTemplate