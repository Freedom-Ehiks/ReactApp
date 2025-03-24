import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  // State for form inputs
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // State for errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    let newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      handleLogin(formData); // Call authentication function
    }
  };

  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container border-2 shadow-xl padding">
        
      <div className="flex-1">
      <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          LOGIN INTO
          <br />
          <span className="text-red-400">EMPLOYEE </span>
          <span className="text-red-400">ACCOUNT </span>
        </h2>
        <img
          src="https://img.freepik.com/free-vector/bank-loan-concept-illustration_114360-25995.jpg?t=st=1742485526~exp=1742489126~hmac=2fef45f0080df0d68b2ad7c3e6b7ed6fd4aa8f35f626a016188fd889ea8958e8&w=826"
          alt=""
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col border-3 shadow-2xl padding">
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-md"
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-md"
              placeholder="Enter your password"
            />
            {errors.password && (
              <span className="text-red-500">{errors.password}</span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-700 w-full"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
