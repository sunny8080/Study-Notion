import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast';
import logo from '../assests/Logo.svg'


const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {



    return (

        <nav className=' flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

            {/* <Link to={"/"}><img src={require('../assests/Logo.svg').default} width={160} height={32} loading="lazy"  alt="logo" /></Link> */}

            <Link to={"/"}><img src={logo} width={160} height={32} loading="lazy" alt="logo" /></Link>

            <div className='flex   text-richblack-25 gap-x-6'>
                <Link to={'/'} ><h3>Home</h3></Link>
                <Link to={'/about'}><h3>About</h3></Link>
                <Link to={'/contact'}><h3>Contact</h3></Link>
            </div>

            <div className='flex items-center gap-x-4'>
                {
                    !isLoggedIn &&
                    <Link to={'/login'}><button
                        className=' bg-richblack-800 text-richblack-100 py-2 px-3 rounded-lg border border-richblack-700'
                    >Log In</button></Link>
                }

                {
                    !isLoggedIn &&
                    <Link to={'/signup'} ><button
                        className=' bg-richblack-800 text-richblack-100 py-2 px-3 rounded-lg border border-richblack-700'
                    >Sign Up</button></Link>
                }

                {
                    isLoggedIn &&
                    <Link to={'/login'}
                        onClick={() => {
                            setIsLoggedIn(false);
                            toast.success('Logged Out');
                        }}
                        className=' bg-richblack-800 text-richblack-100 py-2 px-3 rounded-lg border border-richblack-700'
                    ><button>Log Out</button></Link>
                }

                {
                    isLoggedIn &&
                    <Link to={'/dashboard'} ><button
                        className=' bg-richblack-800 text-richblack-100 py-2 px-3 rounded-lg border border-richblack-700'
                    >Dashboard</button></Link>
                }
            </div>

        </nav>
    )
}

export default Navbar