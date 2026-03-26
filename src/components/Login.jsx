import { useState } from "react";
import authIllustration from "../assets/auth-illustration.svg";
import logo from "../assets/learnhub-logo.png";

function Login({ onNavigate }) {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

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
          <h2 className="text-white text-3xl font-bold mb-3">Welcome Back!</h2>
          <p className="text-[#EEF0F6]/70 text-base max-w-xs">
            Sign in to continue your learning journey and access all your
            courses.
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
            <button
              onClick={() => onNavigate("home")}
              className="text-[#1A3A6E] text-sm font-medium hover:underline"
            >
              ← Back to Home
            </button>
          </div>

          <h1 className="text-[#0D1A2E] text-3xl font-bold mb-2">
            Sign into Your Account
          </h1>
          <p className="text-gray-400 text-sm mb-8">
            Enter your credentials to continue
          </p>

          <div className="flex flex-col gap-5">
            {/* Email */}
            <div>
              <label className="text-[#0D1A2E] text-sm font-semibold mb-1.5 block">
                Email <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center border border-[#EEF0F6] rounded-lg px-4 py-3 focus-within:border-[#1A3A6E] transition-colors bg-[#EEF0F6]/40">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="flex-1 bg-transparent text-sm text-[#0D1A2E] outline-none placeholder-gray-400"
                />
                <span className="text-gray-400 text-sm">✉️</span>
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-[#0D1A2E] text-sm font-semibold mb-1.5 block">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center border border-[#EEF0F6] rounded-lg px-4 py-3 focus-within:border-[#1A3A6E] transition-colors bg-[#EEF0F6]/40">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="flex-1 bg-transparent text-sm text-[#0D1A2E] outline-none placeholder-gray-400"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 text-sm"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Remember Me + Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <div
                  onClick={() => setRememberMe(!rememberMe)}
                  className={`w-4 h-4 rounded flex items-center justify-center cursor-pointer transition-colors ${rememberMe ? "bg-[#C89030]" : "border-2 border-gray-300"}`}
                >
                  {rememberMe && <span className="text-white text-xs">✓</span>}
                </div>
                <span className="text-[#0D1A2E] text-sm">Remember Me</span>
              </label>
              <button
                onClick={() => onNavigate("forgot")}
                className="text-[#C89030] text-sm font-medium hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button — navigates to dashboard */}
            <button
              onClick={() => onNavigate("dashboard")}
              className="bg-[#1A3A6E] text-white font-semibold py-3 rounded-lg hover:bg-[#C89030] transition-colors duration-300"
            >
              Login →
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-[#EEF0F6]" />
              <span className="text-gray-400 text-sm">Or sign in with</span>
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
                href="https://www.facebook.com/login"
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

            {/* Sign Up Link */}
            <p className="text-center text-sm text-gray-400">
              Don't have an account?{" "}
              <button
                onClick={() => onNavigate("signup")}
                className="text-[#1A3A6E] font-semibold hover:underline"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
