import React from "react";
import { useState, useEffect } from "react";
import validateForm from "../components/Validation";
// import Button from "../components/Button"

const CustomerRegistration = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    gender: "",
    maritalStatus: "",
    email: "",
    residential: "",
    phone: "",
    employmentStatus: "",
    employerName: "",
    monthlyIncome: "",
    bankAccount: "",
    identificationNumber: "",
    idType: "",
    nextOfKin: "",
    relationshipOfKin: "",
    phoneNumberOfKin: "",
  });

  // State to manage validation errors
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Handle form submission with validation
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Display errors if any
    } else {
      setErrors({});
      alert("Form submitted successfully!");
      // Here, you can send formData to the backend
    }
  };

  return (
    <section className="flex justify-wrap items-center max-xl:flex-col gap-10 max-container border-2 shadow-xl p-10 max-sm:p-0">
      <div className="w-full max-container ">
        <h1 className="text-center font-bold font-palanquin text-2xl mb-5">
          Register New Customer Here
        </h1>
        <div className=" w-4/5 flex xl:flex-row flex-col justify-center gap-16 max-container">
        {/* First Form */}
        <form
          className="w-full flex flex-col gap-4 bg-white shadow-lg rounded-lg p-6 max-sm:p-0 max-sm:shadow-none"
          onSubmit={handleSubmit}
        >
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>

          <div className="flex flex-col gap-2">
            <label htmlFor="fullName" className="font-bold font-montserrat">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-md"
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <span className="text-red-500">{errors.fullName}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="dateOfBirth" className="font-bold font-montserrat">Date of Birth</label>
            <input
              type="date"
              id="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-md"
              placeholder="Enter your date 0f birth"
            />
            {errors.dateOfBirth && (
              <span className="text-red-500">{errors.dateOfBirth}</span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="gender" className="font-bold font-montserrat">Select your Gender</label>
            <select
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-md"
            >
              <option value="...">Select your Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {errors.gender && (
              <span className="text-red-500">{errors.gender}</span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="maritalStatus" className="font-bold font-montserrat">Marital Status</label>
            <select
              name="maritalStatus"
              id="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-md"
            >
              <option value="...">Select a your marital status</option>
              <option value="Married">Married</option>
              <option value="Single">Single</option>
              <option value="Widow">Widow</option>
              <option value="Widower">Widower</option>
            </select>
            {errors.maritalStatus && (
              <span className="text-red-500">{errors.maritalStatus}</span>
            )}
          </div>

          <div className="flex flex-row gap-2 justify-start items-center">
            <div className="flex flex-col flex-wrap gap-2">
              <label htmlFor="email" className="font-bold font-montserrat">Email Address:</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded-md w-full "
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email}</span>
              )}
            </div>
            <div className="flex flex-col flex-wrap gap-2">
              <label htmlFor="residental" className="font-bold font-montserrat">Residental Address:</label>
              <input
                type="text"
                id="residential"
                value={formData.residential}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded-md w-full "
                placeholder="Enter your address"
              />
              {errors.residential && (
                <span className="text-red-500">{errors.residential}</span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="font-bold font-montserrat">Phone Number</label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-md"
              placeholder="Enter your phone number"
            />
          </div>
          {errors.phone && <span className="text-red-500">{errors.phone}</span>}
        </form>

        {/* Second Form */}
        <form
          className="w-full flex flex-col gap-4 bg-white shadow-lg rounded-lg p-6 max-sm:p-0 max-sm:shadow-none"
          onSubmit={handleSubmit}
        >
          <h2 className="text-xl font-semibold mb-4">Other Information</h2>

          <div className="flex flex-col gap-2">
            <label htmlFor="address" className="font-bold font-montserrat">Employment Status</label>
            <select
              id="employmentStatus"
              className="border border-gray-300 p-2 rounded-md"
              value={formData.employmentStatus}
              onChange={handleChange}
            >
              <option value="employed">Employed</option>
              <option value="unEmployed">Unemployed</option>
              <option value="employed">Self-Employed</option>
            </select>
            {errors.employmentStatus && (
              <span className="text-red-500">{errors.employmentStatus}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="employerName" className="font-bold font-montserrat">Employer Name</label>
            <input
              type="text"
              id="employerName"
              value={formData.employerName}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-md"
              placeholder="Enter your employer name"
            />
            {errors.employerName && (
              <span className="text-red-500">{errors.employerName}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="monthlyIncome" className="font-bold font-montserrat">Monthly Income</label>
            <select
              id="monthlyIncome"
              value={formData.monthlyIncome}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-md"
            >
              <option value="0-50">&#8358;0K-&#8358;50k</option>
              <option value="50-100">&#8358;50K-&#8358;100k</option>
              <option value="100-200">&#8358;100K-&#8358;200K</option>
              <option value="200-500">&#8358;200K-&#8358;500k</option>
              <option value="500-1mil">&#8358;500K-&#8358;1M</option>
            </select>
            {errors.monthlyIncome && (
              <span className="text-red-500">{errors.monthlyIncome}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="bankAccount" className="font-bold font-montserrat">Bank Account Details</label>
            <input
              type="number"
              id="bankAccount"
              value={formData.bankAccount}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-md"
              placeholder="Add you Account Details"
            />
            {errors.bankAccount && (
              <span className="text-red-500">{errors.bankAccount}</span>
            )}
          </div>
          <div className="flex flex-row justify-start items-center gap-2">
            <div className="flex flex-col flex-wrap gap-2">
              <label htmlFor="identificationNumber" className="font-bold font-montserrat">ID Number</label>
              <input
                type="number"
                id="identificationNumber"
                value={formData.identificationNumber}
              className="border border-gray-300 p-2 rounded-md w-full "
                placeholder="Add you Identification Number"
              />
              {errors.identificationNumber && (
                <span className="text-red-500">
                  {errors.identificationNumber}
                </span>
              )}
            </div>
            <div className="flex flex-col flex-wrap gap-2">
              <label htmlFor="idType" className="font-bold font-montserrat">ID Type</label>
              <select
                id="idType"
                value={formData.idType}
                onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md w-full "
              >
                <option value="NIN">NIN</option>
                <option value="BVN">BVN</option>
                <option value="Driver's License">Driver's License</option>
              </select>
              {errors.idType && (
                <span className="text-red-500">{errors.idType}</span>
              )}
            </div>
          </div>
          <div className="flex flex-row justify-start items-center gap-2">
            <div className="flex flex-col flex-wrap gap-2">
              <label htmlFor="nexOfKin" className="font-bold font-montserrat">Next of Kin</label>
              <input
                type="text"
                id="nexOfKin"
                value={formData.nextOfKin}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded-md"
                placeholder="Add you Next of Kin"
              />
              {errors.nextOfKin && (
                <span className="text-red-500">{errors.nextOfKin}</span>
              )}
            </div>
            <div className="flex flex-col flex-wrap gap-2">
              <label htmlFor="relationshipOfKin" className="font-bold font-montserrat">Relationship</label>
              <select
                id="relationshipOfKin"
                value={formData.relationshipOfKin}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded-md"
              >
                <option value="Spouse">Spouse</option>
                <option value="Children">Children</option>
                <option value="Others">Others</option>
              </select>
              {errors.relationshipOfKin && (
                <span className="text-red-500">{errors.relationshipOfKin}</span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <label htmlFor="phoneNumberOfKin" className="font-bold font-montserrat">Next of Kin Number</label>
            <input
              type="number"
              id="phoneNumberOfKin"
              value={formData.phoneNumberOfKin}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-md"
              placeholder="Add you Next of Kin Phone Number"
            />
            {errors.phoneNumberOfKin && (
              <span className="text-red-500">{errors.phoneNumberOfKin}</span>
            )}
          </div>
        </form>
      </div>
      <div className="mt-10 flex justify-center items-center mb-10">
        <button
          type="submit"
          className="bg-lime-600 text-white py-2 rounded-md padding-x hover:bg-slate-50 hover:text-black mt-4 hover:border-2 p-10"
          onClick={handleSubmit}
        >
          Register
        </button>
      </div>
      </div>
     
    </section>
  );
};

export default CustomerRegistration;
