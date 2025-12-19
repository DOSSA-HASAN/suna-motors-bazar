import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import AdminLayout from "../../components/layout/AdminLayout";
import axiosInstance from "../../api/axiosInstance";

const AddUser = () => {
  const navigate = useNavigate();

  // State for loading and validation
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear red error highlight when user types
    if (passwordError) setPasswordError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Client-side Validations
    if (formData.password !== formData.confirmPassword) {
      setPasswordError(true);
      return toast.error("Passwords do not match");
    }

    if (formData.password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }

    // 2. Start Loading State
    setIsSubmitting(true);

    try {
      // PATH FIX: This now points to /api/auth/register via your axiosInstance
      const response = await axiosInstance.post("/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      toast.success("New staff account created!");
      navigate("/listings");
    } catch (err) {
      // 3. Error Handling for 500 or 400 errors
      const errorMessage =
        err.response?.data?.message || "Server error occurred";
      toast.error(errorMessage);
      console.error("Submission Error:", err);
    } finally {
      // 4. Stop Loading State (even if it fails)
      setIsSubmitting(false);
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-2xl mx-auto py-4 lg:py-8 px-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Page Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              ADD NEW USER
            </h2>
            <p className="text-slate-500 font-medium">
              Create internal credentials for Suna Motors
            </p>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors font-bold text-sm"
          >
            <span className="material-symbols-outlined text-lg">
              arrow_back
            </span>
            BACK
          </button>
        </div>

        {/* Main Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
        >
          <div className="p-8 space-y-6">
            {/* Full Name Input */}
            <div>
              <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2">
                Full Name
              </label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className="w-full px-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#f9f506] focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2">
                Email Address
              </label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@sunamotors.com"
                className="w-full px-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#f9f506] focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Password Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2">
                  Password
                </label>
                <input
                  required
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-3.5 bg-slate-50 border rounded-xl outline-none transition-all ${
                    passwordError
                      ? "border-red-500 bg-red-50"
                      : "border-slate-100 focus:bg-white focus:ring-2 focus:ring-[#f9f506]"
                  }`}
                />
              </div>
              <div>
                <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2">
                  Confirm Password
                </label>
                <input
                  required
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-4 py-3.5 bg-slate-50 border rounded-xl outline-none transition-all ${
                    passwordError
                      ? "border-red-500 bg-red-50"
                      : "border-slate-100 focus:bg-white focus:ring-2 focus:ring-[#f9f506]"
                  }`}
                />
              </div>
            </div>
            {passwordError && (
              <p className="text-red-500 text-xs font-bold italic">
                Passwords do not match.
              </p>
            )}
          </div>

          {/* Form Footer / Action Buttons */}
          <div className="bg-slate-50/50 p-6 border-t border-slate-100 flex justify-end gap-3">
            <button
              type="button"
              disabled={isSubmitting}
              onClick={() => navigate(-1)}
              className="px-6 py-3 text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors disabled:opacity-50"
            >
              CANCEL
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`min-w-[160px] flex items-center justify-center gap-2 bg-[#f9f506] text-slate-900 px-8 py-3 rounded-xl font-black text-sm shadow-sm transition-all ${
                isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:shadow-md hover:-translate-y-0.5 active:scale-95"
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                  <span>CREATING...</span>
                </>
              ) : (
                "CREATE ACCOUNT"
              )}
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AddUser;
