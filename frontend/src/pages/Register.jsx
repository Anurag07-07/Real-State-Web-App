import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdUpload } from 'react-icons/md';

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    profileImage: null,
  });

  const [matchPassword, setMatchPassword] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'profileImage' ? files[0] : value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const register_form = new FormData();
      for (var key in formData) {
        register_form.append(key, formData[key]);
      }
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        body: register_form,
      });
      if (response.ok) {
        navigate('/login');
      } else {
        const errorData = await response.json();
        console.error('Registration error:', errorData.message);
      }
    } catch (error) {
      console.log(`Registration Failed`, error.message);
    }
  }

  useEffect(() => {
    setMatchPassword(
      formData.password === formData.confirmPassword || formData.confirmPassword === ''
    );
  }, [formData.password, formData.confirmPassword]);

  return (
    <div className="absolute h-full w-full bg-black/40 z-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-4 bg-white w-full p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-sm"
        >
          <h4 className="text-[26px] md:text-[28px] font-bold text-center text-gray-800">Sign Up</h4>

          <input
            onChange={handleChange}
            value={formData.firstname}
            className="bg-[#f9f9f9] px-4 py-2 rounded-lg outline-none focus:ring-2 ring-[#7a62fe] transition-all"
            type="text"
            name="firstname"
            placeholder="First name"
            required
          />
          <input
            onChange={handleChange}
            value={formData.lastname}
            className="bg-[#f9f9f9] px-4 py-2 rounded-lg outline-none focus:ring-2 ring-[#7a62fe] transition-all"
            type="text"
            name="lastname"
            placeholder="Last name"
            required
          />
          <input
            onChange={handleChange}
            value={formData.email}
            className="bg-[#f9f9f9] px-4 py-2 rounded-lg outline-none focus:ring-2 ring-[#7a62fe] transition-all"
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <input
            onChange={handleChange}
            value={formData.password}
            className="bg-[#f9f9f9] px-4 py-2 rounded-lg outline-none focus:ring-2 ring-[#7a62fe] transition-all"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <input
            onChange={handleChange}
            value={formData.confirmPassword}
            className="bg-[#f9f9f9] px-4 py-2 rounded-lg outline-none focus:ring-2 ring-[#7a62fe] transition-all"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
          />

          {!matchPassword && (
            <p className="text-sm text-red-500 font-medium -mt-2">Passwords do not match!</p>
          )}

          <input
            onChange={handleChange}
            type="file"
            name="profileImage"
            id="image"
            accept="image/*"
            hidden
            required
          />
          <label htmlFor="image">
            <div className="flex items-center justify-center bg-[#f9f9f9] border-dashed border-2 border-gray-300 hover:border-[#7a62fe] h-16 w-16 rounded-xl cursor-pointer transition-all">
              {formData.profileImage ? (
                <img
                  src={URL.createObjectURL(formData.profileImage)}
                  alt="profileImage"
                  className="h-14 w-14 object-cover rounded-lg"
                />
              ) : (
                <MdUpload className="text-[#404040] text-2xl" />
              )}
            </div>
          </label>

          <button
            type="submit"
            className="bg-[#7a62fe] px-7 py-2.5 mt-2 text-white rounded-lg hover:bg-[#6753e0] transition-all"
          >
            Register
          </button>

          <div className="text-gray-600 text-center">
            Already have an account?{' '}
            <Link to="/login" className="text-[#7a62fe] font-medium hover:underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;