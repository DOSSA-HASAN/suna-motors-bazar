import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
// Corrected import path as per your requirement
import { userService } from "../../api/userService";
import { loginAdmin } from "../../api/authService";
import {
  AuthInput,
  BrandHeader,
  GoogleButton,
} from "../../components/auth/AuthComponents";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [resetData, setResetData] = useState({ otp: "", newPassword: "" });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  // View states: 'login' | 'forgot' | 'otp'
  const [view, setView] = useState("login");

  const setAuth = useAuthStore((s) => s.setAuth);
  const navigate = useNavigate();

  // 1. Standard Login (authService)
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await loginAdmin(form);
      const { token, ...user } = data;
      setAuth(user, token);
      toast.success("Login successful!");
      navigate("/listings");
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  // 2. Request OTP (userService)
  const handleRequestOtp = async (e) => {
    e.preventDefault();
    if (!form.email) return toast.error("Please enter your email");
    setLoading(true);
    try {
      await userService.forgotPassword({ email: form.email });
      toast.success("6-digit code sent to your email!");
      setView("otp");
    } catch (err) {
      toast.error(err.response?.data?.message || "User not found");
    } finally {
      setLoading(false);
    }
  };

  // 3. Submit OTP and New Password (userService)
  const handleResetSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Sending 'otp' to match your updated backend controller
      await userService.resetPassword({
        otp: resetData.otp,
        newPassword: resetData.newPassword,
      });
      toast.success("Password updated! You can now login.");
      setView("login");
      setResetData({ otp: "", newPassword: "" }); // Clear reset form
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid or expired code");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = import.meta.env.VITE_GOOGLE_AUTH_URL;
  };

  return (
    <div className="min-h-screen bg-[#f6f6f8] flex flex-col justify-center items-center p-4 font-sans antialiased">
      <div className="w-full max-w-[480px] bg-white rounded-xl shadow-lg border border-[#dbdfe6] overflow-hidden">
        <BrandHeader />

        <div className="px-8 py-4 text-center">
          <h3 className="text-[#111318] text-2xl font-bold tracking-tight">
            {view === "login" && "Welcome back"}
            {view === "forgot" && "Reset Password"}
            {view === "otp" && "Verify OTP Code"}
          </h3>
          <p className="text-[#616f89] text-base pt-2">
            {view === "login" &&
              "Please enter your details to access the dashboard."}
            {view === "forgot" &&
              "Enter your email to receive a secure 6-digit reset code."}
            {view === "otp" &&
              "Enter the code sent to your email to set a new password."}
          </p>
        </div>

        {/* LOGIN FORM */}
        {view === "login" && (
          <form
            className="px-8 pb-8 flex flex-col gap-5"
            onSubmit={handleLogin}
          >
            <AuthInput
              label="Email Address"
              id="email"
              type="email"
              placeholder="name@sunamotors.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <AuthInput
              label="Password"
              id="password"
              type={showPass ? "text" : "password"}
              placeholder="••••••••••••"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              icon={showPass ? "visibility_off" : "visibility"}
              onIconClick={() => setShowPass(!showPass)}
            />
            <div className="flex justify-end -mt-3">
              <button
                type="button"
                onClick={() => setView("forgot")}
                className="text-[#135bec] text-sm font-medium hover:underline"
              >
                Forgot password?
              </button>
            </div>
            <button
              disabled={loading}
              className={`h-12 bg-[#135bec] text-white font-bold rounded-lg transition-all ${
                loading ? "opacity-70" : "hover:bg-blue-700 active:scale-[0.98]"
              }`}
              type="submit"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-[#dbdfe6]"></div>
              <span className="flex-shrink mx-4 text-[#616f89] text-xs font-medium uppercase tracking-wider">
                OR
              </span>
              <div className="flex-grow border-t border-[#dbdfe6]"></div>
            </div>
            <GoogleButton onClick={handleGoogleLogin} />
          </form>
        )}

        {/* FORGOT PASSWORD FORM */}
        {view === "forgot" && (
          <form
            className="px-8 pb-8 flex flex-col gap-5"
            onSubmit={handleRequestOtp}
          >
            <AuthInput
              label="Email Address"
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <button
              disabled={loading}
              className="h-12 bg-black text-white font-bold rounded-lg hover:bg-zinc-800 transition-all active:scale-[0.98]"
              type="submit"
            >
              {loading ? "Sending..." : "Request Reset Code"}
            </button>
            <button
              type="button"
              onClick={() => setView("login")}
              className="text-[#616f89] text-sm font-medium hover:text-black"
            >
              Return to Login
            </button>
          </form>
        )}

        {/* OTP VERIFICATION FORM */}
        {view === "otp" && (
          <form
            className="px-8 pb-8 flex flex-col gap-5"
            onSubmit={handleResetSubmit}
          >
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#616f89] uppercase tracking-wider ml-1">
                6-Digit OTP
              </label>
              <input
                type="text"
                maxLength="6"
                placeholder="000000"
                className="w-full px-4 py-3 bg-[#f8f8f5] rounded-xl border border-[#dbdfe6] focus:ring-2 focus:ring-[#f9f506] text-center text-2xl font-black tracking-[8px] outline-none"
                value={resetData.otp}
                onChange={(e) =>
                  setResetData({ ...resetData, otp: e.target.value })
                }
                required
              />
            </div>
            <AuthInput
              label="New Password"
              type="password"
              placeholder="••••••••••••"
              value={resetData.newPassword}
              onChange={(e) =>
                setResetData({ ...resetData, newPassword: e.target.value })
              }
            />
            <button
              disabled={loading}
              className="h-12 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-all active:scale-[0.98]"
              type="submit"
            >
              {loading ? "Updating..." : "Reset Password"}
            </button>
            <button
              type="button"
              onClick={() => setView("forgot")}
              className="text-[#616f89] text-sm font-medium"
            >
              Wrong email or no code? Try again
            </button>
          </form>
        )}
      </div>

      <div className="mt-8 flex flex-col items-center gap-3">
        <p className="text-[#616f89] text-sm">
          © 2025 Suna Motors Internal Systems
        </p>
        <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 rounded-full border border-gray-200">
          <span className="material-symbols-outlined text-green-600 text-[14px]">
            lock
          </span>
          <span className="text-xs font-medium text-[#616f89]">
            Secure 256-bit SSL Encrypted
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
