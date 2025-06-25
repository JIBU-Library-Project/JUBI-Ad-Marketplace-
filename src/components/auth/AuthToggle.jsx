import React, { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { apiLogin, apiSignup } from "../../services/auth";
import { useNavigate } from "react-router";




function AuthToggle({ className = "" }) {
  const [activeTab, setActiveTab] = useState("login");
  const [rememberMe, setRememberMe] = useState(false);
  const [accountType, setAccountType] = useState("");
  const [isSubmitting, setisSubmitting] = useState(false);
  const [isloggin, setisLogging] = useState(false);
  const navigate = useNavigate();




  const handleInputChange = (e) => {
    setAccountType(e.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);



  const handleLogIn = async (data) => {
  const payload = {
    email: data.email,
    password: data.password,
  };

  console.log(data);
  setisLogging(true);

  try {
    const res = await apiLogin(payload);
    console.log(res);

   const userRole = res?.data?.user?.details?.role;
   localStorage.setItem("accessToken", res.data.user.token)
    toast.success("Login Successfully");

    // Navigate based on role
    if (userRole === "vendor") {
      navigate("/dashboard");
    } else {
      navigate("/user-homepage");
    }
  } catch (error) {
    console.log(error);
    toast.error(error?.message || "Oops! An error occurred");
  } finally {
    setisLogging(false);
  }
};


  const handleSignUp = async (data) => {
    const isUser = accountType == "user";

    const payload = {
      email: data.email,
      password: data.password,

      ...(isUser && {
        firstName: data.firstName,
        lastName: data.lastName,
        userName: data.userName,
      }),
      ...(!isUser && {
        phone: data.phone,
        location: data.location,
        companyName: data.companyName,
        number: data.phone,
      }),
      role: accountType,
    };

    console.log(data);

    setisSubmitting(true);

    try {
      const res = await apiSignup(payload);
      console.log(res);
      toast.success(`${isUser ? "User" : "Vendor"} Registered Successfully!`);
      setActiveTab("login");
    } catch (error) {
      console.log(error);
      toast.error(error?.message || "Oops! An error occured");
    } finally {
      setisSubmitting(false);
    }
  };

  const isError = Object.keys(errors).length > 0;

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
          <form onSubmit={handleSubmit(handleLogIn)}>
            <Input
              label="Email Address"
              id="login-email"
              type="email"
              placeholder="umar@example.com"
              {...register("email", { required: "E-mail is Required" })}
            />
            <Input
              label="Password"
              id="login-password"
              type="password"
              placeholder="••••••••"
              {...register("password", {
                required: "Password Required",
                minLength: {
                  value: 4,
                  message: "Password must be 8 characters",
                },
              })}
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
              {isloggin ? "Logging..." : "Login to Account"}
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
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="mb-6">
              <label
                htmlFor="account-type"
                className="block text-gray-700 font-medium mb-2"
              >
                Account Type
              </label>
              <select
                id="account-type"
                value={accountType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 px- rounded-lg focus:ring-2 focus:ring-gray-500 transition bg-[#2b2c2c]/15"
              >
                <option value="">Select Account Type</option>
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
                    {...register("firstName", { required: "Name Required" })}
                  />

                  <Input
                    label="Last Name"
                    id="last-name"
                    placeholder="Doe"
                    {...register("lastName", {
                      required: "Last Name Required",
                    })}
                  />
                </div>
                <Input
                  label="Username"
                  id="username"
                  placeholder="johndoe123"
                  {...register("userName", { required: "User Name Required" })}
                />
              </>
            ) : (
              <>
                <Input
                  label="Company Name"
                  id="company-name"
                  placeholder="Jubi Market"
                  {...register("companyName", {
                    required: "Provide Company Name",
                  })}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Input
                    label="Phone"
                    id="phone"
                    placeholder="+233500000000"
                    {...register("phone", { required: "Provide Phone Number" })}
                  />
                  <Input
                    label="Location"
                    id="location"
                    placeholder="Accra, Ghana"
                    {...register("location", {
                      required: "Provide Phone Number",
                    })}
                  />
                </div>
              </>
            )}

            <Input
              label="Email Address"
              id="register-email"
              type="email"
              placeholder="you@example.com"
              {...register("email", { required: "Provide E-mail Address" })}
            />
            {/* {errors?.email && (
              <span className="text-red-400"> {errors.email.message} </span>
            )} */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <Input
                label="Password"
                id="register-password"
                type="password"
                placeholder="••••••••"
                {...register("password", { required: "Password Required" })}
              />

              <Input
                label="Confirm Password"
                id="confirm-password"
                type="password"
                placeholder="••••••••"
                {...register("confirmPassword", {
                  required: "Password Required",
                })}
              />
              {/* <div>
                {errors?.password && (
                  <span className="text-red-400">
                    {" "}
                    {errors.password.message}{" "}
                  </span>
                )}
              </div> */}
            </div>

            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-gray-700"
              >
                I agree to the
                <a href="#" className="text-green-600 hover:text-green-800">
                  Terms & Conditions
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition"
            >
              {isSubmitting ? "Submitting..." : "Create Account"}
            </button>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?
                <button
                  type="button"
                  onClick={() => setActiveTab("login")}
                  disabled={isError}
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

function Input(props) {
  const { label, id, type = "text", placeholder } = props;
  return (
    <div className="mb-5">
      <label htmlFor={id} className="block text-gray-700 font-medium mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 bg-[#292b2a]/15 focus:border-transparent transition"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}
