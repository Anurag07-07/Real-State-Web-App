import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import {MdUpload} from 'react-icons/md'
import { useEffect } from 'react'

const Register = () => {
  const [formData,setFormData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    confirmPassword:"",
    profileImage:null
  })

  const [matchPassword,setMatchPassword] = useState(true)

  const navigate = useNavigate()

 const handleChange = (e) => {
  const { name, value, files } = e.target;
  setFormData(prevData => ({
    ...prevData,
    [name]: name === 'profileImage' ? files[0] : value
  }));
};

async function handleSubmit(e) {
  e.preventDefault();
  try {
    const register_form = new FormData()
    for (var key in formData) {
      register_form.append(key,formData[key])
      }
    const response = await fetch('http://localhost:3000/auth/register',{
      method:'POST',
      body:register_form
    });
   if (response.ok) {
      navigate('/login');
    } else {
      const errorData = await response.json();
      console.error('Registration error:', errorData.message);
    }
  } catch (error) {
    console.log(`Registration Failed`,error.message);
  }
}

useEffect(()=>{
  setMatchPassword(
    formData.password === formData.confirmPassword || formData.confirmPassword === ""
  )
},[formData.password,formData.confirmPassword])

  return (
    <div className=' absolute h-full w-full bg-black/40 z-50 flex items-center justify-center '>
      <div>
        <form onSubmit={handleSubmit} className=' flex flex-col gap-y-2.5 bg-white w-[366px] p-7 rounded-xl shadow-md text-[14px] '>
          <div className=' flex justify-between items-baseline my-4'>
            <h4 className='  text-[26px] leading-tight md:text-[29px] md:leading-[1.3] mb-4 font-bold my-4'>Sign Up</h4>
          </div>
          <input onChange={handleChange}  value={formData['firstname']}  className=' bg-[#f9f9f9] border-none p-2 pl-4 rounded-md outline-none' type=' text ' name='firstname' placeholder='First name' required></input>
          <input onChange={handleChange}  value={formData['lastname']}  className=' bg-[#f9f9f9] border-none p-2 pl-4 rounded-md outline-none' type=' text ' name='lastname' placeholder='Last name' required></input>
          <input onChange={handleChange}  value={formData['email']}  className=' bg-[#f9f9f9] border-none p-2 pl-4 rounded-md outline-none' type=' email ' name='email' placeholder='Email Address' required></input>
          <input onChange={handleChange}  value={formData['password']}  className=' bg-[#f9f9f9] border-none p-2 pl-4 rounded-md outline-none' type='password' name='password' placeholder='Password' required></input>
          <input onChange={handleChange}  value={formData['confirmPassword']}  className=' bg-[#f9f9f9] border-none p-2 pl-4 rounded-md outline-none' type='password' name='confirmPassword' placeholder='Confirm Password' required></input>
          {!matchPassword && <p>Password don not Match!</p>}
          <input onChange={handleChange}   type='file' name='profileImage' id='image' accept='image/*'  hidden required></input>
          <label htmlFor='image'>
            <div className=' flex items-center justify-center  ring-1 ring-slate-900/10 p-1 h-16 w-16 rounded'>
            {formData.profileImage ? (<img src={URL.createObjectURL(formData.profileImage)} alt='profileImage' className=' p-1 h-16 object-contain aspect-square'></img>):( <MdUpload className='text-[#404040] text-2xl'></MdUpload>)} 
            </div>
          </label>
          <button type='submit' className=' medium-14 bg-[#7a62fe] px-7 py-2.5 mt-2 text-white transition-all rounded'>Register</button>
          <div className=' text-[#7B7B7B]'>Already have an account?
          <Link to={'/login'} className=' text-[#7a62fe] cursor-pointer'>Login</Link>
          </div> 
        </form>
      </div>
    </div>
  )
}

export default Register