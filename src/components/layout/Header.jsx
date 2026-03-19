import { Input } from "@/components/ui/input";
import { Search, LogOut, Menu } from "lucide-react";

export default function Header({ setMobileOpen }) {
  return (
    <div className="flex items-center justify-between bg-white border-b px-3 sm:px-4 py-3 gap-2">
      {/* LEFT */}
      <div className="flex items-center gap-2 flex-1">
        {/* Hamburger Menu Icon */}
        <Menu
          className="w-5 h-5 text-gray-700 cursor-pointer lg:hidden"
          onClick={() => setMobileOpen(true)}
        />

        {/* Search */}
        <div className="relative flex-1 max-w-[220px] md:max-w-md">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />

          <Input
            placeholder="Search..."
            className="pl-8 h-9 text-sm focus:outline-none focus:ring-0"
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        <div className="hidden sm:block text-right">
          <p className="text-sm font-medium">Rakshith</p>
          <p className="text-xs text-gray-500">Super Admin</p>
        </div>

        <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full">
          R
        </div>

        <LogOut className="w-5 h-5 text-gray-600 hover:text-red-500 cursor-pointer" />
      </div>
    </div>
  );
}
