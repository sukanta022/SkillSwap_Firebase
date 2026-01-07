import React, {  use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';

const Login = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const emailRef = useRef()
    const {signInUser} = use(AuthContext)
    const navigate = useNavigate()
    

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email,password)

        setError('')
        setSuccess(false)
        signInUser(email,password)
        .then(() =>{
            setSuccess(true)
            navigate("/")
        } )
        .catch(error => setError(error.message))

    }
    return (
         <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col space-y-3 animate__animated animate__fadeIn">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-[#0D9488]">Login now!</h1>
                
                </div>
                <div className="card bg-base-100 w-80 md:w-100  shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name="email" ref={emailRef} className="input w-full" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name="password" className="input w-full" placeholder="Password" />
                                <div ><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn text-white bg-[#0D9488] mt-4 w-full">Login</button>
                            </fieldset>
                        </form>
                        <p>New to our website? Please <Link to={'/EmailPassword'} className='text-blue-500 underline'>Register</Link></p>
                    </div>
                    {
                        error && <p className='text-red-500 text-center font-semibold'>{error}</p> 
                    }
                    {
                        success &&  <p className='text-green-500 text-center'>Logged in successfully</p>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Login;