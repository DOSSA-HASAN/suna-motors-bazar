import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import AdminLayout from "../../components/layout/AdminLayout";
import axios from "axios"; // Or your authService

const AddUser = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (formData.password !== formData.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    if (formData.password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }

    setIsSubmitting(true);
    try {
      // Adjust the URL to your actual API register endpoint
      await axios.post("/api/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      toast.success("New user registered successfully!");
      navigate("/users"); // Redirect to a users list page if you have one
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AdminLayout>
      <div className="flex flex-col gap-6 max-w-2xl">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-slate-900">Add New User</h2>
          <button
            onClick={() => navigate(-1)}
            className="text-slate-500 hover:text-slate-800 font-medium flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-sm">
              arrow_back
            </span>{" "}
            Back
          </button>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm"
        >
          <div className="space-y-5">
            <h3 className="font-semibold text-slate-700 border-b pb-2 text-sm uppercase">
              User Credentials
            </h3>

            {/* Name */}
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase">
                Full Name
              </label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full mt-1 px-4 py-3 bg-[#f8f8f5] rounded-lg border-none focus:ring-2 focus:ring-[#f9f506]"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full mt-1 px-4 py-3 bg-[#f8f8f5] rounded-lg border-none focus:ring-2 focus:ring-[#f9f506]"
                required
              />
            </div>

            {/* Password Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-3 bg-[#f8f8f5] rounded-lg border-none"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase">
                  Confirm Password
                </label>
                <input
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-3 bg-[#f8f8f5] rounded-lg border-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 pt-6 border-t border-slate-100 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-2.5 rounded-lg font-bold text-slate-600 hover:bg-slate-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-[#f9f506] text-slate-900 px-10 py-2.5 rounded-lg font-extrabold shadow-sm transition-all flex items-center gap-2 ${
                isSubmitting
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:shadow-md active:scale-95"
              }`}
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin h-4 w-4 border-2 border-slate-900 border-t-transparent rounded-full"></span>
                  CREATING...
                </>
              ) : (
                "CREATE USER"
              )}
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AddUser;
