import React from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { useLocation, useNavigate } from "react-router-dom";

const SidebarItem = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex w-full items-center gap-3 px-3 py-2.5 rounded-lg transition-all group ${
      active
        ? "bg-[#f9f506] text-slate-900 font-bold shadow-sm"
        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
    }`}
  >
    <span className="material-symbols-outlined transition-transform group-hover:scale-110">
      {icon}
    </span>
    <span className="text-sm font-medium">{label}</span>
  </button>
);

export default function Sidebar({ isOpen, toggleMobile }) {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const location = useLocation();
  const navigate = useNavigate();

  // Helper to handle navigation and close mobile menu
  const goTo = (path) => {
    navigate(path);
    if (window.innerWidth < 1024) toggleMobile();
  };

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
        {/* Brand Header */}
        <div className="h-16 flex items-center px-6 border-b border-slate-100 justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-[#f9f506] rounded-lg flex items-center justify-center text-slate-900">
              <span className="material-symbols-outlined font-bold">
                directions_car
              </span>
            </div>
            <h1 className="text-slate-900 font-bold text-lg">Suna Motors</h1>
          </div>
          <button onClick={toggleMobile} className="lg:hidden text-slate-400">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2">
          <SidebarItem
            icon="add_box"
            label="Add New Car"
            active={location.pathname === "/add-listing"}
            onClick={() => goTo("/add-listing")}
          />
          <SidebarItem
            icon="garage_home"
            label="Car Listings"
            active={location.pathname === "/listings"}
            onClick={() => goTo("/listings")}
          />

          {/* Moved Profile here as a primary link */}
          <SidebarItem
            icon="account_circle"
            label="My Profile"
            active={location.pathname === "/profile"}
            onClick={() => goTo("/profile")}
          />

          <SidebarItem
            icon="person_add"
            label="Add User"
            active={location.pathname === "/add-user"}
            onClick={() => goTo("/add-user")}
          />
        </nav>

        {/* User Footer / Logout */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div
              className="size-10 rounded-full border-2 border-white shadow-sm bg-cover bg-center"
              style={{
                backgroundImage: `url(${
                  user?.avatar || "https://ui-avatars.com/api/?name=Admin"
                })`,
              }}
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-slate-900 truncate">
                {user?.name}
              </p>
              <button
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
                className="text-xs font-semibold text-red-500 hover:text-red-700 flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-xs">
                  logout
                </span>
                Logout
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
