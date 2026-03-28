import { useState } from "react";
import authIllustration from "../assets/auth-illustration.svg";
import logo from "../assets/learnhub-logo.png";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = async () => {
    setError("");

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://simple-crud-backend-6o49.onrender.com/api/v1/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 400) {
          setError(
            "Password must be at least 8 characters, include a capital letter and a number.",
          );
        } else if (response.status === 409) {
          setError("Email already exists.");
        } else {
          setError(data.message || "Registration failed.");
        }
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("userName", data.user.name);
      navigate("/Login");
    } catch (err) {
      setError("Something went wrong. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const isValidPassword =
    password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);

  return (
    <div className="min-h-screen flex">
      {/* Left: Illustration */}
      <div className="hidden md:flex flex-1 bg-[#1A3A6E] items-center justify-center relative overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-white/5 -top-20 -left-20" />
        <div className="absolute w-64 h-64 rounded-full bg-[#C89030]/20 bottom-10 right-10" />
        <div className="relative z-10 flex flex-col items-center text-center px-12">
          <img
            src={authIllustration}
            alt="Auth illustration"
            className="w-80 h-80 object-contain mb-8"
          />
          <h2 className="text-white text-3xl font-bold mb-3">
            Start Learning Today!
          </h2>
          <p className="text-[#EEF0F6]/70 text-base max-w-xs">
            Join thousands of students already learning on LearnHub. Create your
            free account now.
          </p>
        </div>
      </div>

      {/* Right: Form */}
      <div className="flex-1 flex items-center justify-center bg-white px-6 py-12">
        <div className="w-full max-w-md">
          {/* Logo + Back */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="LearnHub"
                className="w-8 h-8 object-contain"
              />
              <span className="text-[#0D1A2E] font-bold text-xl tracking-tight">
                LearnHub
              </span>
            </div>
            <Link
              to="/"
              className="text-[#1A3A6E] text-sm font-medium hover:underline"
            >
              ← Back to Home
            </Link>
          </div>

          <h1 className="text-[#0D1A2E] text-3xl font-bold mb-2">
            Create an Account
          </h1>
          <p className="text-gray-400 text-sm mb-8">
            Fill in the details below to get started
          </p>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-lg mb-5">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-5">
            {/* Full Name */}
            <div>
              <label className="text-[#0D1A2E] text-sm font-semibold mb-1.5 block">
                Full Name
              </label>
              <div className="flex items-center border border-[#EEF0F6] rounded-lg px-4 py-3 focus-within:border-[#1A3A6E] transition-colors bg-[#EEF0F6]/40">
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="flex-1 bg-transparent text-sm text-[#0D1A2E] outline-none placeholder-gray-400"
                />
                <span className="text-gray-400 text-sm">👤</span>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-[#0D1A2E] text-sm font-semibold mb-1.5 block">
                Email
              </label>
              <div className="flex items-center border border-[#EEF0F6] rounded-lg px-4 py-3 focus-within:border-[#1A3A6E] transition-colors bg-[#EEF0F6]/40">
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent text-sm text-[#0D1A2E] outline-none placeholder-gray-400"
                />
                <span className="text-gray-400 text-sm">✉️</span>
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-[#0D1A2E] text-sm font-semibold mb-1.5 block">
                Password
              </label>
              <div className="flex items-center border border-[#EEF0F6] rounded-lg px-4 py-3 focus-within:border-[#1A3A6E] transition-colors bg-[#EEF0F6]/40">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex-1 bg-transparent text-sm text-[#0D1A2E] outline-none placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 text-sm"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
              <p
                className={`text-xs mt-1 ${isValidPassword ? "text-green-500" : "text-red-400"}`}
              >
                {isValidPassword
                  ? "Strong password ✅"
                  : "Must be at least 8 characters, include a capital letter and a number"}
              </p>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-[#0D1A2E] text-sm font-semibold mb-1.5 block">
                Confirm Password
              </label>
              <div className="flex items-center border border-[#EEF0F6] rounded-lg px-4 py-3 focus-within:border-[#1A3A6E] transition-colors bg-[#EEF0F6]/40">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="flex-1 bg-transparent text-sm text-[#0D1A2E] outline-none placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="text-gray-400 text-sm"
                >
                  {showConfirm ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Sign Up Button */}
            <button
              onClick={handleSignUp}
              disabled={loading}
              className="bg-[#1A3A6E] text-white font-semibold py-3 rounded-lg hover:bg-[#C89030] transition-colors duration-300 disabled:opacity-60"
            >
              {loading ? "Creating Account..." : "Sign Up →"}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-[#EEF0F6]" />
              <span className="text-gray-400 text-sm">Or sign up with</span>
              <div className="flex-1 h-px bg-[#EEF0F6]" />
            </div>

            {/* Social Buttons */}
            <div className="flex gap-3">
              <a
                href="https://accounts.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 border border-[#EEF0F6] rounded-lg py-3 text-sm font-medium text-[#0D1A2E] hover:bg-[#EEF0F6] transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </a>
              <a
                href="https://www.facebook.com/reg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 border border-[#EEF0F6] rounded-lg py-3 text-sm font-medium text-[#0D1A2E] hover:bg-[#EEF0F6] transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
            </div>

            {/* Login Link */}
            <p className="text-center text-sm text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#1A3A6E] font-semibold hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
