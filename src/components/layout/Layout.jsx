import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden relative">
      {/* Sidebar */}
      <Sidebar
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        setCollapsed={setCollapsed} //added
      />

      {/* Main Content */}
      <div className="flex flex-col flex-1 min-w-0">
        <Header setMobileOpen={setMobileOpen} />

        <main className="p-4 lg:p-6 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* Collapse Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className={`
          hidden lg:flex absolute top-6 z-50
          bg-blue-500 hover:bg-blue-600 text-white
          rounded-full w-6 h-6 items-center justify-center shadow-md
          transition-all duration-300

          ${collapsed ? "left-16" : "left-56 xl:left-64"}
        `}
      >
        {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>
    </div>
  );
}
