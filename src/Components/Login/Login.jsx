import Lottie from 'lottie-react'
import React, { useState } from 'react'
import '../../Components/Login/Login.css'
import LoginAni from '../../assets/animation/ani-login.json'
import { IoEyeOff } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";

const Login = () => {

    // state declear 
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [showPass , setShowPass] = useState(false)



    // function 
    const handelEmail = (e)=>{
        setEmail(e.target.value)
        setEmailError('')
    }
    const handelPassword = (e)=>{
        setPassword(e.target.value)
        setPasswordError('')
    }
    const handelShowPass = ()=>{
        setShowPass(!showPass)
        }


    // submit function 
    const handelSubmit = (e)=>{
        e.preventDefault()

        if(!email){
            setEmailError('Enter your email')
        }
        if(!password){
            setPasswordError('Enter your password')
        }
        else{
            setEmailError('')
            setPasswordError('')
        }
    }



  return (
    <>
    <div className="container">
        <div className="main">

            {/* lottie  */}

            <div className='main-ani' ><Lottie animationData={LoginAni} /></div>

            <div className="main-form">
                <h1>Welcome Back!</h1>
                <form onSubmit={handelSubmit} className='form'>

                    {/* Email  */}
                    <div className='h-[80px] mb-5'>
                    <label>Email</label>
                    <input onChange={handelEmail} className='input focus:outline-none focus:shadow-outline' type="email" placeholder='Email'/>
                    <p className='error text-xs italic text-red-600 mt-1' >{emailError}</p>
                    </div>
                    

                    {/* password  */}
                    <div className='h-[80px] mb-5'>
                    <label>Password</label>
                    <div className=' relative '>
                        {
                            showPass? <IoMdEye onClick={handelShowPass} className='eye-icon'/> : <IoEyeOff onClick={handelShowPass} className='eye-icon' />
                            
                            
                        }
                        
                        <input onChange={handelPassword} type={showPass? "text" : "password" } className='input focus:outline-none focus:shadow-outline' id="text" placeholder='Password'/>
                    </div>
                    <p className='error text-xs italic text-red-600 mt-1' >{passwordError}</p>
                    </div>

                    {/* checkbox  */}
                    <div className="mb-4 flex">
                        <input className="mr-2" type="checkbox"/>
                        <h3 className="text-sm text-white">Remember Me</h3>
                    </div>



                    {/* buttom  */}
                    <button type='submit' className='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline' >Login</button>
                   
                    <hr className='my-6'/>

                    {/* reset */}
                    <div className="from-text flex flex-col gap-1 items-center">
                        <a className="text-[12px] text-white align-baseline hover:text-blue-800" href="#">Create an Account!</a>
                        <a className="text-[12px] text-white align-baseline hover:text-blue-800" href="#">Forgot Password?</a>
                    </div>

                </form>


            </div>
        </div>
    </div>
    </>
  )
}

export default Login
