import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setLogin } from '../redux/state';

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {

      // Way 1
      // const login_form = new FormData();
      // for (const key in user) {
      //   login_form.append(key, user[key]);
      // }

      // const res = await fetch('http://localhost:3000/auth/login', {
      //   method: 'POST',
      //   body: login_form,
      // });

      // Way 2 //Better when there is no file to send
      const res = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(user),
      }); 

      if (!res.ok) {
        throw new Error('Invalid response from server');
      }

      const data = await res.json();
      if (data) {
        dispatch(
          setLogin({
            user:data.user,
            token:data.token
          })
        )
        navigate('/')
      }
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  }

  return (
    <div className="absolute inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit}
          className="flex flex-col gap-y-4 bg-white w-full p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-sm"
        >
          <h4 className="text-[26px] md:text-[28px] font-bold text-center text-gray-800 mb-2">
            Sign In
          </h4>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={user.email}
            onChange={handleChange}
            className="bg-[#f9f9f9] px-4 py-2 rounded-lg outline-none focus:ring-2 ring-[#7a62fe] transition-all"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            className="bg-[#f9f9f9] px-4 py-2 rounded-lg outline-none focus:ring-2 ring-[#7a62fe] transition-all"
            required
          />

          <button
            type="submit"
            className="bg-[#7a62fe] px-7 py-2.5 mt-2 text-white rounded-lg hover:bg-[#6753e0] transition-all font-medium"
          >
            Login
          </button>

          <div className="text-center text-[#7B7B7B] text-sm mt-2">
            Don't have an account?{' '}
            <Link to="/register" className="text-[#7a62fe] hover:underline transition">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
