import React, { useState } from "react";
import {
  calculateTotalRepayment,
  calculateRepaymentSchedule,
  validateLoanForm,
} from "../components/loanLogic";

const LoanApplication = () => {
  // State for form data, errors, and repayment schedule
  const [formData, setFormData] = useState({
    loanAmount: "",
    repaymentPlan: "",
    startDate: "",
    fullName: "",
    loanPurpose: "",
    collateralDetails: "",
    guarantorFullName: "",
    relationshipWithBorrower: "",
    guarantorAddress: "",
    guarantorEmail: "",
    guarantorPhone: "",
    employmentStatus: "",
    employerName: "",
    idType: "",
    idNumber: "",
  });
  const [errors, setErrors] = useState({});
  const [repaymentSchedule, setRepaymentSchedule] = useState([]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateLoanForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Calculate repayment schedule
    const schedule = calculateRepaymentSchedule(
      parseFloat(formData.loanAmount),
      formData.repaymentPlan,
      new Date(formData.startDate)
    );
    setRepaymentSchedule(schedule);
  };

  return (
    <section className="flex justify-wrap items-center max-xl:flex-col gap-10 max-container border-2 shadow-xl p-10">
      <div className="w-full max-container">
        <h1 className="text-center font-bold font-palanquin text-2xl mb-5">
          Apply For a Loan
        </h1>
        <div className="w-4/5 flex xl:flex-row flex-col justify-center gap-10 max-container">
          {["Loan Information", "Guarantor Information"].map(
            (sectionTitle, index) => (
              <div
                key={index}
                className="flex flex-col w-full flex-wrap justify-start items-start"
              >
                <form
                  className="w-full flex flex-col gap-4 bg-white shadow-lg rounded-lg p-6 max-sm:p-0 max-sm:shadow-none"
                  onSubmit={handleSubmit}
                >
                  <h2 className="font-extrabold text-2xl">{sectionTitle}</h2>

                  {/* Loan Information Section */}
                  {sectionTitle === "Loan Information" && (
                    <>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="loanAmount">Loan Amount</label>
                        <input
                          type="number"
                          id="loanAmount"
                          placeholder="Loan Amount"
                          value={formData.loanAmount}
                          onChange={handleInputChange}
                          className="border border-gray-300 p-2 rounded-md"
                        />
                        {errors.loanAmount && (
                          <p className="text-red-500">{errors.loanAmount}</p>
                        )}
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="repaymentPlan">Repayment Plan</label>
                        <select
                          id="repaymentPlan"
                          value={formData.repaymentPlan}
                          onChange={handleInputChange}
                          className="border border-gray-300 p-2 rounded-md"
                        >
                          <option value="">Select Plan</option>
                          <option value="weekly">Weekly</option>
                          <option value="monthly">Monthly</option>
                        </select>
                        {errors.repaymentPlan && (
                          <p className="text-red-500">{errors.repaymentPlan}</p>
                        )}
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="startDate">Repayment Group</label>
                        <select
                          id="repaymentPlan"
                          value={formData.repaymentPlan}
                          onChange={handleInputChange}
                          className="border border-gray-300 p-2 rounded-md"
                        >
                          <option value="">Select Gropu</option>
                          <option value="monday">Monday Group</option>
                          <option value="tuesday">Tuesday Group</option>
                          <option value="wednesday">Wednesday Group</option>
                          <option value="thursday">Thursday Group</option>
                          <option value="friday">Friday Group</option>
                        </select>
                        {errors.startDate && (
                          <p className="text-red-500">{errors.startDate}</p>
                        )}
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                          type="text"
                          id="fullName"
                          placeholder="Full Name"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="border border-gray-300 p-2 rounded-md"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="loanPurpose">Loan Purpose</label>
                        <input
                          type="text"
                          id="loanPurpose"
                          placeholder="Loan Purpose"
                          value={formData.loanPurpose}
                          onChange={handleInputChange}
                          className="border border-gray-300 p-2 rounded-md"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="collateralDetails">
                          Collateral Details
                        </label>
                        <textarea
                          id="collateralDetails"
                          placeholder="Collateral Details"
                          value={formData.collateralDetails}
                          onChange={handleInputChange}
                          className="border border-gray-300 p-2 rounded-md w-full h-35 resize-none"
                        ></textarea>
                      </div>
                    </>
                  )}

                  {/* Guarantor Information Section */}
                  {sectionTitle === "Guarantor Information" && (
                    <>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="guarantorFullName">Full Name</label>
                        <input
                          type="text"
                          id="guarantorFullName"
                          placeholder="Full Name"
                          value={formData.guarantorFullName}
                          onChange={handleInputChange}
                          className="border border-gray-300 p-2 rounded-md"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="relationshipWithBorrower">
                          Relationship with Borrower
                        </label>
                        <input
                          type="text"
                          id="relationshipWithBorrower"
                          placeholder="Relationship with Borrower"
                          value={formData.relationshipWithBorrower}
                          onChange={handleInputChange}
                          className="border border-gray-300 p-2 rounded-md"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="guarantorAddress">
                          Residential Address
                        </label>
                        <textarea
                          id="guarantorAddress"
                          placeholder="Residential Address"
                          value={formData.guarantorAddress}
                          onChange={handleInputChange}
                          className="border border-gray-300 p-2 rounded-md w-full h-35 resize-none"
                        ></textarea>
                      </div>
                      <div className="flex w-full max-sm:flex-col flex-row justify-start items-center gap-8">
                        <div className="flex flex-col gap-2">
                          <label htmlFor="guarantorEmail">Email Address</label>
                          <input
                            type="email"
                            id="guarantorEmail"
                            placeholder="Email"
                            value={formData.guarantorEmail}
                            onChange={handleInputChange}
                            className="border border-gray-300 p-2 rounded-md"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="guarantorPhone">Phone Number</label>
                          <input
                            type="number"
                            id="guarantorPhone"
                            placeholder="Phone Number"
                            value={formData.guarantorPhone}
                            onChange={handleInputChange}
                            className="border border-gray-300 p-2 rounded-md"
                          />
                        </div>
                      </div>
                      <div className="flex w-full max-sm:flex-col flex-row justify-start items-center gap-8">
                        <div className="flex flex-col gap-2">
                          <label htmlFor="employmentStatus">
                            Employment Status
                          </label>
                          <select
                            id="employmentStatus"
                            value={formData.employmentStatus}
                            onChange={handleInputChange}
                            className="border border-gray-300 p-2 rounded-md"
                          >
                            <option value="">Select Status</option>
                            <option value="employed">Employed</option>
                            <option value="unemployed">Unemployed</option>
                            <option value="selfEmployed">Self-Employed</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="employerName">Employer Name</label>
                          <input
                            type="text"
                            id="employerName"
                            placeholder="Employer Name"
                            value={formData.employerName}
                            onChange={handleInputChange}
                            className="border border-gray-300 p-2 rounded-md"
                          />
                        </div>
                      </div>
                      <div className="flex w-full max-sm:flex-col flex-row justify-start items-center gap-8">
                        <div className="flex flex-col gap-2">
                          <label htmlFor="idType">ID Type</label>
                          <select
                            id="idType"
                            value={formData.idType}
                            onChange={handleInputChange}
                            className="border border-gray-300 p-2 rounded-md"
                          >
                            <option value="">Select ID Type</option>
                            <option value="NIN">NIN</option>
                            <option value="BVN">BVN</option>
                            <option value="Driver's License">
                              Driver's License
                            </option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="idNumber">ID Number</label>
                          <input
                            type="number"
                            id="idNumber"
                            placeholder="ID Number"
                            value={formData.idNumber}
                            onChange={handleInputChange}
                            className="border border-gray-300 p-2 rounded-md"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </form>
              </div>
            )
          )}
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

        {/* Display Repayment Schedule */}
        {repaymentSchedule.length > 0 && (
          <div className="mt-10">
            <h2 className="font-bold text-xl mb-5">Repayment Schedule</h2>
            <ul>
              {repaymentSchedule.map((payment, index) => (
                <li key={index}>
                  {payment.dueDate}: ${payment.amount}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default LoanApplication;
