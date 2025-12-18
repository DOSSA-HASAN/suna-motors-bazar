import React, { useState } from "react";
import Sidebar from "./Sidebar";

export default function AdminLayout({ children }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-[#f8f8f5] overflow-hidden">
      <Sidebar
        isOpen={isMobileOpen}
        toggleMobile={() => setIsMobileOpen(!isMobileOpen)}
      />

      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-4 lg:px-8 flex-shrink-0 z-10">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden p-2 text-slate-600"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="hidden sm:flex items-center gap-2 text-sm">
              <span className="text-slate-400">Admin</span>
              <span className="text-slate-300">/</span>
              <span className="font-semibold text-slate-900">
                Listings Management
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
                search
              </span>
              <input
                className="w-64 pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-[#f9f506]/50"
                placeholder="Search..."
                type="text"
              />
            </div>
            <button className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
