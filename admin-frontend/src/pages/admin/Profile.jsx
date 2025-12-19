import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import AdminLayout from "../../components/layout/AdminLayout";
import { userService } from "../../api/userService";
import { useAuthStore } from "../../store/useAuthStore";

const Profile = () => {
  // Pull state and setters from Zustand
  const { user, setAuth, token } = useAuthStore();

  const fileInputRef = useRef(null);
  const [isUpdating, setIsUpdating] = useState(false);

  // Form States
  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    avatar: user?.avatar || "",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [emailData, setEmailData] = useState({
    newEmail: user?.email || "",
  });

  // Keep local form state in sync if store updates (e.g., after initial login)
  useEffect(() => {
    if (user) {
      setProfileData({ name: user.name, avatar: user.avatar });
      setEmailData({ newEmail: user.email });
    }
  }, [user]);

  // Handle Gallery Selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (2MB limit for Base64 storage)
      if (file.size > 2 * 1024 * 1024) {
        return toast.error("File is too large. Max 2MB.");
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData((prev) => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // 1. Update Profile (Name & Avatar)
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    try {
      const { data } = await userService.updateProfile(profileData);
      setAuth(data, token); // Update Zustand Store
      toast.success("Profile updated successfully!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Update failed");
    } finally {
      setIsUpdating(false);
    }
  };

  // 2. Update Email
  const handleUpdateEmail = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    try {
      const { data } = await userService.changeEmail({
        newEmail: emailData.newEmail,
      });
      // Update the user object in Zustand with the new email returned
      setAuth({ ...user, email: data.email }, token);
      toast.success("Email updated!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Email update failed");
    } finally {
      setIsUpdating(false);
    }
  };

  // 3. Change Password
  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      return toast.error("Passwords do not match");
    }
    setIsUpdating(true);
    try {
      await userService.changePassword({
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword,
      });
      toast.success("Password updated successfully!");
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to change password");
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-5xl mx-auto space-y-8 pb-10">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Account Settings
          </h2>
          <p className="text-slate-500">
            Manage your digital identity and security.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* General Info Card */}
            <form
              onSubmit={handleUpdateProfile}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6"
            >
              <h3 className="font-bold text-slate-800 flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-[#f9f506] filled">
                  account_circle
                </span>
                General Information
              </h3>

              {/* Profile Picture Upload UI */}
              <div className="flex flex-col sm:flex-row items-center gap-6 bg-[#f8f8f5] p-6 rounded-2xl">
                <div className="relative group">
                  <img
                    src={
                      profileData.avatar ||
                      `https://ui-avatars.com/api/?name=${profileData.name}`
                    }
                    className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover bg-white"
                    alt="Profile"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                    className="absolute bottom-0 right-0 bg-slate-900 text-[#f9f506] w-8 h-8 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center border-2 border-white"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      edit
                    </span>
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                  />
                </div>
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="font-bold text-slate-900">Your Avatar</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    JPG, PNG or GIF. Best at 400x400px. <br />
                    Maximum size of 2MB.
                  </p>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#f8f8f5] rounded-xl border-none focus:ring-2 focus:ring-[#f9f506] font-medium"
                  value={profileData.name}
                  onChange={(e) =>
                    setProfileData({ ...profileData, name: e.target.value })
                  }
                  required
                />
              </div>

              <button
                disabled={isUpdating}
                className="bg-[#f9f506] text-slate-900 font-extrabold px-8 py-3 rounded-xl hover:shadow-lg active:scale-95 transition-all disabled:opacity-50"
              >
                {isUpdating ? "SAVING..." : "SAVE CHANGES"}
              </button>
            </form>

            {/* Email Form Card */}
            <form
              onSubmit={handleUpdateEmail}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4"
            >
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#f9f506]">
                  mail
                </span>
                Email Address
              </h3>
              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                  Current Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-[#f8f8f5] rounded-xl border-none focus:ring-2 focus:ring-[#f9f506] font-medium"
                  value={emailData.newEmail}
                  onChange={(e) => setEmailData({ newEmail: e.target.value })}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isUpdating}
                className="text-slate-900 font-bold text-sm underline hover:text-slate-600 transition-colors disabled:opacity-50"
              >
                Update Email
              </button>
            </form>
          </div>

          {/* Security Side Column */}
          <div className="space-y-6">
            <form
              onSubmit={handleChangePassword}
              className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl space-y-6"
            >
              <h3 className="font-bold flex items-center gap-2 text-[#f9f506]">
                <span className="material-symbols-outlined filled">lock</span>{" "}
                Security
              </h3>

              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                    Current Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 bg-slate-800 rounded-xl border-none text-sm placeholder:text-slate-600 focus:ring-1 focus:ring-[#f9f506]"
                    value={passwordData.currentPassword}
                    onChange={(e) =>
                      setPasswordData({
                        ...passwordData,
                        currentPassword: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 bg-slate-800 rounded-xl border-none text-sm placeholder:text-slate-600 focus:ring-1 focus:ring-[#f9f506]"
                    value={passwordData.newPassword}
                    onChange={(e) =>
                      setPasswordData({
                        ...passwordData,
                        newPassword: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 bg-slate-800 rounded-xl border-none text-sm placeholder:text-slate-600 focus:ring-1 focus:ring-[#f9f506]"
                    value={passwordData.confirmPassword}
                    onChange={(e) =>
                      setPasswordData({
                        ...passwordData,
                        confirmPassword: e.target.value,
                      })
                    }
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isUpdating}
                className="w-full bg-[#f9f506] text-slate-900 font-extrabold py-3.5 rounded-xl hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
              >
                UPDATE PASSWORD
              </button>
            </form>

            <div className="bg-[#f9f506] p-6 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 text-slate-900 mb-2">
                <span className="material-symbols-outlined font-black">
                  verified_user
                </span>
                <h4 className="font-black text-sm uppercase tracking-tight">
                  Pro Tip
                </h4>
              </div>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                Use a combination of letters, numbers, and symbols to keep your
                account safe from unauthorized access.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Profile;
