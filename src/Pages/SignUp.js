import React from 'react'
import LogInTemplate from '../components/LogInTemplate'
import signUpImg from '../assests/signup.png'

const SignUp = ({ setIsLoggedIn }) => {
    return (
        <div>
            <LogInTemplate
                title="Join the millions learning to code with StudyNotion for free"
                desc1="Build skills for today, tomorrow, and beyond."
                desc2="Education to future-proof your career."
                image={signUpImg}
                formType="signup"
                setIsLoggedIn={setIsLoggedIn}
            />
        </div>
    )
}

export default SignUp