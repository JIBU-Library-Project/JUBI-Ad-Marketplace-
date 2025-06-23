import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../SIngleCompos/authContext/AuthContext";

function AuthToggle({ className = "" }) {
  const [activeTab, setActiveTab] = useState("login");
  const [rememberMe, setRememberMe] = useState(false);
  const [accountType, setAccountType] = useState("user");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setAccountType(e.target.value);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    // Collect relevant data from form inputs
    const form = new FormData(e.target);
    const username =
      accountType === "vendor"
        ? form.get("company-name")
        : form.get("username");

    if (!username) {
      alert("Please fill in all required fields.");
      return;
    }

    // Save to localStorage
    localStorage.setItem("role", accountType);
    localStorage.setItem("auth", "true");
    localStorage.setItem("username", username);

    // Call context login
    login(username, accountType);

    alert("Account created successfully!");

    // Redirect
    navigate(accountType === "vendor" ? "/dashboard" : "/user-homepage");
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const auth = localStorage.getItem("auth");
    const role = localStorage.getItem("role");
    const storedUsername = localStorage.getItem("username");

    if (auth && storedUsername && role) {
      login(storedUsername, role);
      navigate(role === "vendor" ? "/dashboard" : "/user-homepage");
    } else {
      alert("Invalid login! Please register first.");
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center px-4 py-10 overflow-y-auto login-background loginpage">
      <div
        className={`w-full max-w-xl p-6 rounded-xl shadow-md ${className} backdrop-blur-3xl outline outline-amber-50 bg-[#ffffff]/80`}
      >
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          {["login", "register"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-6 flex-1 text-lg font-medium text-center transition-colors duration-300 ${
                activeTab === tab
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Login Form */}
        {activeTab === "login" ? (
          <form onSubmit={handleLoginSubmit}>
            <Input
              label="Email Address"
              id="login-email"
              type="email"
              placeholder="umar@example.com"
            />
            <Input
              label="Password"
              id="login-password"
              type="password"
              placeholder="••••••••"
            />

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="h-4 w-4 text-green-500 border-gray-300 rounded focus:ring-green-400"
                />
                <span className="ml-2 text-sm text-gray-700">Remember me</span>
              </label>
              <a
                href="#"
                className="text-sm text-[#074d24] hover:text-green-700"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition"
            >
              Login to Account
            </button>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => setActiveTab("register")}
                  className="text-green-600 font-medium hover:text-green-800 transition"
                >
                  Register here
                </button>
              </p>
            </div>
          </form>
        ) : (
          // Register Form
          <form onSubmit={handleRegisterSubmit}>
            <div className="mb-6">
              <label
                htmlFor="account-type"
                className="block text-gray-700 font-medium mb-2"
              >
                Account Type
              </label>
              <select
                id="account-type"
                name="accountType"
                value={accountType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 transition bg-[#08ae5e]/25"
              >
                <option value="user">Regular User</option>
                <option value="vendor">Vendor</option>
              </select>
            </div>

            {accountType === "user" ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <Input
                    label="First Name"
                    id="first-name"
                    placeholder="Babs"
                  />
                  <Input label="Last Name" id="last-name" placeholder="Doe" />
                </div>
                <Input
                  label="Username"
                  id="username"
                  placeholder="johndoe123"
                />
              </>
            ) : (
              <>
                <Input
                  label="Company Name"
                  id="company-name"
                  placeholder="Jubi Market"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Input label="Phone" id="phone" placeholder="+233500000000" />
                  <Input
                    label="Location"
                    id="location"
                    placeholder="Accra, Ghana"
                  />
                </div>
              </>
            )}

            <Input
              label="Email Address"
              id="register-email"
              type="email"
              placeholder="you@example.com"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <Input
                label="Password"
                id="register-password"
                type="password"
                placeholder="••••••••"
              />
              <Input
                label="Confirm Password"
                id="confirm-password"
                type="password"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                required
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-gray-700"
              >
                I agree to the{" "}
                <a href="#" className="text-green-600 hover:text-green-800">
                  Terms & Conditions
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition"
            >
              Create Account
            </button>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setActiveTab("login")}
                  className="text-green-600 font-medium hover:text-green-800 transition"
                >
                  Login here
                </button>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default AuthToggle;

function Input({ label, id, type = "text", placeholder }) {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="block text-gray-700 font-medium mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 bg-[#08ae5e]/25 focus:border-transparent transition"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
