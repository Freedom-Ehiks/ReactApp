const validateForm = (formData) => {
    let errors = {};
  
    // Full Name Validation
    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required";
    }
  
    // Email Validation
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
  
    // Phone Number Validation
    if (!formData.phone) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      errors.phone = "Invalid phone number";
    }
  
    // Password Validation
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
  
    return errors;
  };
  
  export default validateForm;
  