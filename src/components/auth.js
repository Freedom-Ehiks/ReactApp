export const handleLogin = async (formData) => {
  try {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Login Successful");
      window.location.href = "/dashboard"; // Redirect to the dashboard
    } else {
      alert(data.message || "Invalid email or password");
    }
  } catch (error) {
    console.error("Error during login:", error);
    alert("An error occurred. Please try again.");
  }
};
