import React from 'react'
import LogInTemplate from '../components/LogInTemplate'
import logInImg from '../assests/login.png'

const LogIn = ({ setIsLoggedIn }) => {
    return (
        <div>
            <LogInTemplate
                title="Welcome Back"
                desc1="Build skills for today, tomorrow, and beyond."
                desc2="Education to future-proof your career."
                image={logInImg}
                formType="login"
                setIsLoggedIn={setIsLoggedIn}
            />
        </div>
    )
}

export default LogIn