import React, { useState } from "react";
import validateForm from "../components/createacc";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "", 
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value, // Ensure input field IDs match state keys
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Form submitted successfully!");
    }
  };

  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container border-2 shadow-xl padding">
      <div className="flex-1">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          CREATE 
          <br />
          <span className="text-red-400">EMPLOYEE </span>
          <span className="text-red-400">ACCOUNT </span>
        </h2>
        <img
          src="https://img.freepik.com/free-vector/financial-obligation-document-promissory-bill-loan-agreement-debt-return-promise-issuer-payee-signing-contract-businessmen-making-deal_335657-848.jpg?t=st=1742492582~exp=1742496182~hmac=5e5b32cd2393f0d5e85c265e356774a4ca8f0f3a852e0b9cfc8eadbd8fb8e936&w=826"
          alt=""
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-1 flex-col border-3 shadow-2xl padding">
        <form onSubmit={handleSubmit}>
          {/* Full Name Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-md"
              placeholder="Enter Full Name"
            />
            {errors.fullName && (
              <span className="text-red-500">{errors.fullName}</span>
            )}
          </div>

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

          {/* Phone Number Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-md"
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <span className="text-red-500">{errors.phone}</span>
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
            Create Account
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateAccount;
