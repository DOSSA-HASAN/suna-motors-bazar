import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { loginAdmin } from "../api/authService";
import {
  AuthInput,
  BrandHeader,
  GoogleButton,
} from "../components/auth/AuthComponents";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const setAuth = useAuthStore((s) => s.setAuth);
  const navigate = useNavigate();

  // Handle Standard Email/Password Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await loginAdmin(form);
      setAuth(data.user, data.token);
      toast.success("Welcome back, Admin");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // Uses the environment variable
    window.location.href = import.meta.env.VITE_GOOGLE_AUTH_URL;
  };

  return (
    <div className="min-h-screen bg-[#f6f6f8] flex flex-col justify-center items-center p-4 font-sans antialiased">
      <div className="w-full max-w-[480px] bg-white rounded-xl shadow-lg border border-[#dbdfe6] overflow-hidden">
        <BrandHeader />

        <div className="px-8 py-4 text-center">
          <h3 className="text-[#111318] text-2xl font-bold tracking-tight">
            Welcome back
          </h3>
          <p className="text-[#616f89] text-base pt-2">
            Please enter your details to access the dashboard.
          </p>
        </div>

        <form className="px-8 pb-8 flex flex-col gap-5" onSubmit={handleLogin}>
          {/* Email Input */}
          <AuthInput
            label="Email Address"
            id="email"
            type="email"
            placeholder="name@sunamotors.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          {/* Password Input */}
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
            <a
              className="text-[#135bec] text-sm font-medium hover:text-blue-700 transition-colors"
              href="/forgot-password"
            >
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            disabled={loading}
            className={`h-12 bg-[#135bec] text-white font-bold rounded-lg transition-colors shadow-sm ${
              loading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-700"
            }`}
            type="submit"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          {/* Divider */}
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-[#dbdfe6]"></div>
            <span className="flex-shrink mx-4 text-[#616f89] text-xs font-medium uppercase tracking-wider">
              OR
            </span>
            <div className="flex-grow border-t border-[#dbdfe6]"></div>
          </div>

          {/* Google Button */}
          <GoogleButton onClick={handleGoogleLogin} />
        </form>
      </div>

      {/* Footer */}
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
