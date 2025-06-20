import React, { useState } from "react";

function AuthToggle({ defaultTab = "login", className = "" }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [rememberMe, setRememberMe] = useState(false);
  const [accountType, setAccountType] = useState("user");

  const handleInputChange = (e) => {
    setAccountType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Succefully");
  };

  return (
    <div
      className={` w-full max-w-xl mx-auto border border-red-500  mt-3 px-4 ${className}`}
    >
      <div className="flex border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab("login")}
          className={`py-4 px-6 text-center flex-1 font-medium text-lg transition-colors duration-300 ${
            activeTab === "login"
              ? "text-[#7ccf00] border-b-2 border-[#7ccf00]"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Login
        </button>

        <button
          onClick={() => setActiveTab("register")}
          className={`py-4 px-6 text-center flex-1 font-medium text-lg transition-colors duration-300 ${
            activeTab === "register"
              ? "text-indigo-600 border-b-2 border-indigo-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Register
        </button>
      </div>

      <div className="transition-all duration-300">
        {activeTab === "login" ? (
          <form>
            <div className="mb-5">
              <label
                htmlFor="login-email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="login-email"
                name="email"
                // value="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7dcf01] focus:border-transparent transition"
                placeholder="umar@example.com"
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="login-password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="login-password"
                name="password"
                // value=""
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7dcf01] focus:border-transparent transition"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="h-4 w-4 text-indigo-600 focus:ring-[#7dcf01] border-gray-300 rounded"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="text-sm text-indigo-600 hover:text-indigo-800 transition"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 transition duration-300 flex items-center justify-center"
            >
              Login to Account
            </button>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => setActiveTab("register")}
                  className="text-indigo-600 font-medium hover:text-indigo-800 transition"
                >
                  Register here
                </button>
              </p>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-6 ">
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7dcf01] focus:border-transparent transition"
              >
                <option value="user">Regular User</option>
                <option value="vendor">Vendor</option>
              </select>
            </div>

            {accountType === "user" ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="firstName"
                      // value=""
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7dcf01] focus:border-transparent transition"
                      placeholder="Babs"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="lastName"
                      // value=""
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7dcf01] focus:border-transparent transition"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="username"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    // value=""
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7dcf01] focus:border-transparent transition"
                    placeholder="johndoe123"
                    required
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  <div className="mb-5">
                    <label
                      htmlFor="company-name"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company-name"
                      name="companyName"
                      // value=""
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7dcf01] focus:border-transparent transition"
                      placeholder="Jubi Market."
                      required
                    />
                  </div>
                  <div className="grid lg:grid-cols-2 sm:grid-cols-1  gap-3">
                    <div className="mb-5">
                      <label
                        htmlFor="phone"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Phone
                      </label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        // value=""

                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7dcf01] focus:border-transparent transition"
                        placeholder="+233500000000"
                        required
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="location"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        // value=""

                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7dcf01] focus:border-transparent transition"
                        placeholder="Accra, Ghana"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="whatsapp"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      WhatsApp URL
                    </label>
                    <input
                      type="text"
                      id="whatsapp"
                      name="whatsapp"
                      // value=""

                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7dcf01] focus:border-transparent transition"
                      placeholder="https://wa.me/233500000000"
                      required
                    />
                  </div>
                </div>
              </>
            )}

            <div className="mb-5">
              <label
                htmlFor="register-email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="register-email"
                name="email"
                // value=""

                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7dcf01] focus:border-transparent transition"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label
                  htmlFor="register-password"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="register-password"
                  name="password"
                  // value=""

                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7dcf01] focus:border-transparent transition"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirmPassword"
                  // value=""
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7dcf01] focus:border-transparent transition"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-indigo-600 focus:ring-[#7dcf01] border-gray-300 rounded"
                required
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-gray-700"
              >
                I agree to the{" "}
                <a href="#" className="text-indigo-600 hover:text-indigo-800">
                  Terms & Conditions
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 transition duration-300 flex items-center justify-center"
            >
              Create Account
            </button>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setActiveTab("login")}
                  className="text-indigo-600 font-medium hover:text-indigo-800 transition"
                >
                  Login here
                </button>
              </p>
            </div>
          </form>
        )}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200"></div>
    </div>
  );
}

export default AuthToggle;
