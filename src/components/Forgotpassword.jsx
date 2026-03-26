import { useState } from "react";
import authIllustration from "../assets/auth-illustration.svg";
import logo from "../assets/learnhub-logo.png";

function ForgotPassword({ onNavigate }) {
  const [submitted, setSubmitted] = useState(false);

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
            Reset Your Password
          </h2>
          <p className="text-[#EEF0F6]/70 text-base max-w-xs">
            No worries! Enter your email and we'll send you a reset link right
            away.
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
              onClick={() => onNavigate("login")}
              className="text-[#1A3A6E] text-sm font-medium hover:underline"
            >
              ← Back to Login
            </button>
          </div>

          {!submitted ? (
            <>
              <h1 className="text-[#0D1A2E] text-3xl font-bold mb-2">
                Forgot Password?
              </h1>
              <p className="text-gray-400 text-sm mb-8">
                Enter your email address and we'll send you a link to reset your
                password.
              </p>

              <div className="flex flex-col gap-5">
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

                <button
                  onClick={() => setSubmitted(true)}
                  className="bg-[#1A3A6E] text-white font-semibold py-3 rounded-lg hover:bg-[#C89030] transition-colors duration-300"
                >
                  Send Reset Link →
                </button>

                <p className="text-center text-sm text-gray-400">
                  Remember your password?{" "}
                  <button
                    onClick={() => onNavigate("login")}
                    className="text-[#1A3A6E] font-semibold hover:underline"
                  >
                    Sign In
                  </button>
                </p>
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className="w-20 h-20 bg-[#EEF0F6] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📬</span>
              </div>
              <h1 className="text-[#0D1A2E] text-3xl font-bold mb-3">
                Check Your Email!
              </h1>
              <p className="text-gray-400 text-sm mb-8 max-w-sm mx-auto">
                We've sent a password reset link to your email address. Please
                check your inbox and follow the instructions.
              </p>
              <button
                onClick={() => onNavigate("login")}
                className="bg-[#1A3A6E] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#C89030] transition-colors duration-300"
              >
                Back to Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
