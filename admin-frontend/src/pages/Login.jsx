import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { userService } from "../api/userService";
import { loginAdmin } from "../api/authService";
import { AuthInput, BrandHeader } from "../components/auth/AuthComponents";

const Login = () => {
  const navigate = useNavigate();
  const setAuth = useAuthStore((s) => s.setAuth);

  const [view, setView] = useState("login");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const [form, setForm] = useState({ email: "", password: "" });
  const [resetData, setResetData] = useState({ otp: "", newPassword: "" });

  useEffect(() => {
    if (view === "login") setResetData({ otp: "", newPassword: "" });
    if (view === "forgot") setForm({ ...form, password: "" });
  }, [view]);

  // --- LOGIN HANDLER WITH ERROR LOGIC ---
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await loginAdmin(form);
      const { token, ...user } = data;

      setAuth(user, token);
      toast.success("Welcome back!");
      navigate("/listings");
    } catch (err) {
      // 1. Check if the server is down
      if (!err.response) {
        toast.error("Server is unreachable. Check your connection.");
      }
      // 2. Handle specific 401/400 errors from backend
      else if (err.response.status === 401 || err.response.status === 400) {
        toast.error(err.response.data?.message || "Invalid email or password");
        // Optional: Clear password field on failure so user can try again
        setForm((prev) => ({ ...prev, password: "" }));
      }
      // 3. Generic fallback
      else {
        toast.error("An unexpected error occurred. Please try later.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRequestOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await userService.forgotPassword(form.email);
      toast.success("Code sent! Please check your email.");
      setView("otp");
    } catch (err) {
      // Error handling for forgot password
      const msg = err.response?.data?.message || "Could not process request";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await userService.resetPassword({
        email: form.email,
        otp: resetData.otp,
        newPassword: resetData.newPassword,
      });
      toast.success("Password updated! You can now login.");
      setView("login");
    } catch (err) {
      // Error handling for OTP/Reset
      const msg =
        err.response?.data?.message || "Invalid code or expired session";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f6f8] flex flex-col justify-center items-center p-4 font-sans antialiased">
      <div className="w-full max-w-[480px] bg-white rounded-xl shadow-lg border border-[#dbdfe6] overflow-hidden">
        <BrandHeader />

        <div className="px-8 py-4 text-center">
          <h3 className="text-[#111318] text-2xl font-bold tracking-tight">
            {view === "login" && "Welcome back"}
            {view === "forgot" && "Reset Password"}
            {view === "otp" && "Verify Code"}
          </h3>
          <p className="text-[#616f89] text-base pt-2">
            {view === "login" &&
              "Please enter your details to access the dashboard."}
            {view === "forgot" &&
              "Enter your email and we'll send you a 6-digit OTP."}
            {view === "otp" && "Check your inbox for the reset code."}
          </p>
        </div>

        {/* --- LOGIN VIEW --- */}
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
              value={form.email || ""}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <AuthInput
              label="Password"
              id="password"
              type={showPass ? "text" : "password"}
              placeholder="••••••••••••"
              value={form.password || ""}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              icon={showPass ? "visibility_off" : "visibility"}
              onIconClick={() => setShowPass(!showPass)}
              required
            />
            <div className="flex justify-end -mt-3">
              <button
                type="button"
                onClick={() => setView("forgot")}
                className="text-[#135bec] text-sm font-medium hover:text-blue-700 transition-colors"
              >
                Forgot password?
              </button>
            </div>
            <button
              disabled={loading}
              className={`h-12 bg-[#135bec] text-white font-bold rounded-lg transition-all flex items-center justify-center ${
                loading
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-blue-700 shadow-md active:scale-95"
              }`}
              type="submit"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Signing In...
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        )}

        {/* --- FORGOT PASSWORD VIEW --- */}
        {view === "forgot" && (
          <form
            className="px-8 pb-8 flex flex-col gap-5"
            onSubmit={handleRequestOtp}
          >
            <AuthInput
              label="Email Address"
              type="email"
              placeholder="Enter your registered email"
              value={form.email || ""}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <button
              disabled={loading}
              className="h-12 bg-black text-white font-bold rounded-lg hover:bg-zinc-800 transition-all disabled:opacity-50"
              type="submit"
            >
              {loading ? "Sending Code..." : "Send Reset Code"}
            </button>
            <button
              type="button"
              onClick={() => setView("login")}
              className="text-[#616f89] text-sm font-medium hover:text-black transition-colors"
            >
              Back to Login
            </button>
          </form>
        )}

        {/* --- OTP & NEW PASSWORD VIEW --- */}
        {view === "otp" && (
          <form
            className="px-8 pb-8 flex flex-col gap-5"
            onSubmit={handleResetSubmit}
          >
            <AuthInput
              label="6-Digit OTP"
              placeholder="000000"
              value={resetData.otp || ""}
              onChange={(e) =>
                setResetData({ ...resetData, otp: e.target.value })
              }
              required
            />
            <AuthInput
              label="New Password"
              type="password"
              placeholder="••••••••••••"
              value={resetData.newPassword || ""}
              onChange={(e) =>
                setResetData({ ...resetData, newPassword: e.target.value })
              }
              required
            />
            <button
              disabled={loading}
              className="h-12 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-all shadow-lg"
              type="submit"
            >
              {loading ? "Resetting..." : "Update Password"}
            </button>
            <button
              type="button"
              onClick={() => setView("forgot")}
              className="text-[#616f89] text-sm font-medium hover:text-black"
            >
              Didn't get a code? Resend
            </button>
          </form>
        )}
      </div>

      <div className="mt-8">
        <p className="text-[#616f89] text-sm italic">
          © 2025 Suna Motors Internal Systems
        </p>
      </div>
    </div>
  );
};

export default Login;
