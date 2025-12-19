import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { userService } from "../../api/userService";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data } = await userService.forgotPassword(email);

      // In a real production app, the token is sent via email.
      // For development, we can log it or show it in the toast.
      console.log("Reset Token:", data.resetToken);

      setIsSent(true);
      toast.success("Reset link generated successfully!");
    } catch (err) {
      toast.error(
        err.response?.data?.message || "User not found with this email."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f8f5] flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center mb-6">
          <div className="bg-[#f9f506] p-3 rounded-2xl shadow-sm">
            <span className="material-symbols-outlined text-3xl text-slate-900">
              lock_reset
            </span>
          </div>
        </div>
        <h2 className="text-center text-3xl font-black text-slate-900 tracking-tight">
          Forgot Password?
        </h2>
        <p className="mt-2 text-center text-sm text-slate-500">
          No worries, we'll send you reset instructions.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-10 shadow-xl rounded-3xl border border-slate-100">
          {!isSent ? (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest ml-1 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
                    mail
                  </span>
                  <input
                    type="email"
                    required
                    className="block w-full pl-10 pr-4 py-3 bg-slate-50 border-none rounded-xl text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#f9f506] transition-all"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-black text-slate-900 bg-[#f9f506] hover:bg-[#e6e205] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f9f506] transition-all disabled:opacity-50 active:scale-95"
              >
                {isLoading ? (
                  <span className="animate-spin h-5 w-5 border-2 border-slate-900 border-t-transparent rounded-full"></span>
                ) : (
                  "SEND RESET LINK"
                )}
              </button>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <div className="text-emerald-500">
                <span className="material-symbols-outlined text-5xl">
                  check_circle
                </span>
              </div>
              <p className="text-slate-600 font-medium">
                Instructions have been sent to <br />
                <span className="font-bold text-slate-900">{email}</span>
              </p>
              <button
                onClick={() => setIsSent(false)}
                className="text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors"
              >
                Didn't receive it? Try again.
              </button>
            </div>
          )}

          <div className="mt-6">
            <Link
              to="/login"
              className="flex items-center justify-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors"
            >
              <span className="material-symbols-outlined text-lg">
                arrow_back
              </span>
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
