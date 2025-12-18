import React from "react";
import { useAuthStore } from "../../store/useAuthStore";

const SidebarItem = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex w-full items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
      active
        ? "bg-[#f9f506]/20 text-slate-900 font-semibold"
        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
    }`}
  >
    <span
      className={`material-symbols-outlined ${
        !active && "group-hover:scale-110"
      } transition-transform`}
    >
      {icon}
    </span>
    <span className="text-sm font-medium">{label}</span>
  </button>
);

export default function Sidebar({ isOpen, toggleMobile }) {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 lg:hidden backdrop-blur-sm"
          onClick={toggleMobile}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-white border-r border-slate-200 flex flex-col z-40 transform transition-transform duration-300 lg:translate-x-0 lg:static ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Brand */}
        <div className="h-16 flex items-center px-6 border-b border-slate-100 justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-[#f9f506] rounded-lg flex items-center justify-center text-slate-900">
              <span className="material-symbols-outlined font-bold">
                directions_car
              </span>
            </div>
            <div>
              <h1 className="text-slate-900 font-bold text-lg leading-tight">
                Suna Motors
              </h1>
              <p className="text-slate-500 text-xs font-medium">Admin Panel</p>
            </div>
          </div>
          <button onClick={toggleMobile} className="lg:hidden text-slate-400">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-1">
          <SidebarItem icon="dashboard" label="Dashboard" />
          <SidebarItem icon="garage_home" label="Car Listings" active />
          <SidebarItem icon="group" label="User Management" />
          <SidebarItem icon="analytics" label="Reports" />
          <SidebarItem icon="settings" label="Settings" />
        </nav>

        {/* User Profile Footer */}
        <div className="p-4 border-t border-slate-100">
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors">
            <div
              className="size-9 rounded-full bg-slate-200 bg-cover"
              style={{
                backgroundImage: `url(${
                  user?.avatar || "https://ui-avatars.com/api/?name=Admin"
                })`,
              }}
            ></div>
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-sm font-semibold text-slate-900 truncate">
                {user?.name || "Admin"}
              </span>
              <span className="text-xs text-slate-500 truncate">
                {user?.email}
              </span>
            </div>
            <button
              onClick={logout}
              className="material-symbols-outlined text-slate-400 hover:text-red-500"
            >
              logout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
