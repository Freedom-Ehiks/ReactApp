const validateForm = (formData) => {
    let errors = {};
  
    // Check required fields
    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required";
    }
    
    if (!formData.dateOfBirth) {
      errors.dateOfBirth = "Date of Birth is required";
    }
  
    if (!formData.gender || formData.gender === "...") {
      errors.gender = "Please select a gender";
    }
  
    if (!formData.maritalStatus || formData.maritalStatus === "...") {
      errors.maritalStatus = "Please select your marital status";
    }
  
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
  
    if (!formData.residential.trim()) {
      errors.residential = "Residential address is required";
    }
  
    if (!formData.phone) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      errors.phone = "Invalid phone number";
    }
  
    if (!formData.employmentStatus) {
      errors.employmentStatus = "Employment status is required";
    }
  
    if (!formData.employerName.trim() && formData.employmentStatus === "employed") {
      errors.employerName = "Employer Name is required for employed individuals";
    }
  
    if (!formData.monthlyIncome) {
      errors.monthlyIncome = "Please select a monthly income range";
    }
  
    if (!formData.bankAccount) {
      errors.bankAccount = "Bank Account Number is required";
    } else if (!/^\d{10,15}$/.test(formData.bankAccount)) {
      errors.bankAccount = "Invalid bank account number";
    }
  
    if (!formData.identificationNumber) {
      errors.identificationNumber = "ID Number is required";
    }
  
    if (!formData.idType) {
      errors.idType = "Please select an ID type";
    }
  
    if (!formData.nextOfKin.trim()) {
      errors.nextOfKin = "Next of Kin is required";
    }
  
    if (!formData.relationshipOfKin) {
      errors.relationshipOfKin = "Please select a relationship type";
    }
  
    if (!formData.phoneNumberOfKin) {
      errors.phoneNumberOfKin = "Next of Kin's phone number is required";
    } else if (!/^\d{10,15}$/.test(formData.phoneNumberOfKin)) {
      errors.phoneNumberOfKin = "Invalid Next of Kin phone number";
    }
    function handleLogin(event){
      event.preventDefault();

      const formData = {
        givenPassword : "Admin@123",
        inputPassword:document.getElementById("password").value
      };
      if(formData.givenPassword == formData.inputPassword){
        alert("Login Successful");
        window.location.href = "dashboard.html";
      }
      else{
        alert("Incorrect Credentials")
      }
    }
  
    return errors;
  };
  
  export default validateForm;