import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

import AdminTable from "@/components/AdminTable";
import AddAdminModal from "@/components/AddAdminModal";

export default function CreateAdmin() {
  const [admins, setAdmins] = useState([
    {
      id: 1,
      name: "Rakshit",
      email: "admin@metalindustries.com",
      role: "Super Admin",
      joined: "2/5/2026",
    },
  ]);

  // Add admin from modal
  const handleAddAdmin = admin => {
    const newAdmin = {
      id: Date.now(),
      name: admin.name,
      email: admin.email,
      role: "Admin",
      joined: new Date().toLocaleDateString(),
    };

    setAdmins(prev => [...prev, newAdmin]);
  };

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Admin Management</h1>

          <p className="text-xs sm:text-sm text-gray-500">
            Manage administrative access to the system
          </p>
        </div>

        {/* Add Admin Button - Modal */}
        <AddAdminModal onAddAdmin={handleAddAdmin} />
      </div>

      {/* Card */}

      <div className="bg-white border rounded-xl shadow-sm p-4 sm:p-6 space-y-4">
        {/* Search */}

        <div className="relative w-full sm:max-w-sm">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <Input
            placeholder="Search admins..."
            className="pl-9 text-xs sm:text-sm"
          />
        </div>

        {/* Table - Admin Table component*/}

        <AdminTable admins={admins} />
      </div>
    </div>
  );
}
