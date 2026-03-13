import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search, Plus } from "lucide-react";

import SuppliersTable from "@/components/SuppliersTable";
import AddSuppliersModal from "@/components/AddSuppliersModal";

export default function Suppliers() {
  const [suppliers, setSuppliers] = useState([
    {
      id: "SUP-001",
      company: "Apl apollo tubes limited",
      contactPerson: "Sankar Build pro limited",
      email: "anuprajit@gmail.com",
      phone: "725211860",
      location: "BANGALORE",
      products: 0,
    },
  ]);

  // Adds suppliers to table when saved
  const handleAddSupplier = supplier => {
    // setSuppliers([...suppliers, supplier]);
    setSuppliers(prev => [...prev, supplier]);
  };


  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Suppliers</h1>

          <p className="text-xs sm:text-sm text-gray-500">
            Manage your supplier relationships and contacts
          </p>
        </div>

        {/* <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-xs sm:text-sm hover:bg-blue-700">
          <Plus size={16} />
          Add Supplier
        </button> */}

        <AddSuppliersModal onAddSupplier={handleAddSupplier} />
      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white border rounded-xl p-4">
          <p className="text-lg font-semibold">{suppliers.length}</p>

          <p className="text-xs text-gray-500">Total Suppliers</p>
        </div>

        <div className="bg-white border rounded-xl p-4">
          <p className="text-lg font-semibold">0</p>

          <p className="text-xs text-gray-500">Products Supplied</p>
        </div>
      </div>

      {/* Search */}

      <div className="relative w-full sm:max-w-sm">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <Input
          placeholder="Search suppliers..."
          className="pl-9 text-xs sm:text-sm"
        />
      </div>

      {/* Table */}

      <div className="bg-white border rounded-xl shadow-sm p-4 sm:p-6 space-y-4">
        <h2 className="text-sm sm:text-base font-semibold">All Suppliers</h2>

        {/* Table - Suppliers Table component */}
        <SuppliersTable
          suppliers={suppliers}
        />
      </div>

    </div>
  );
}
