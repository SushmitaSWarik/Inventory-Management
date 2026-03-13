import { Input } from "@/components/ui/input";

import { Search, Filter } from "lucide-react";
import PendingOrdersTable from "@/components/PendingOrdersTable";

export default function PendingOrders() {
  // Example data
  const orders = [
    // {
    //   id: "#12001",
    //   customer: "Rahul",
    //   date: "Mar 05, 2026",
    //   total: "₹450",
    //   due: "₹150",
    //   status: "Pending",
    // }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}

      <div>
        <h1 className="text-xl sm:text-2xl font-bold">Pending Orders List</h1>

        <p className="text-xs sm:text-sm text-gray-500">
          Manage active and undelivered orders
        </p>
      </div>

      {/* Card */}

      <div className="bg-white border rounded-xl shadow-sm p-4 sm:p-6 space-y-4">
        {/* Search + Filter */}

        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          {/* Search */}

          <div className="relative w-full sm:max-w-sm">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <Input
              placeholder="Search orders..."
              className="pl-9 text-xs sm:text-sm"
            />
          </div>

          {/* Filter */}

          <button className="flex items-center gap-2 border rounded-md px-3 py-2 text-xs sm:text-sm text-gray-600 hover:bg-gray-50">
            <Filter size={14} />
            All Types
          </button>
        </div>

        {/* Table - PendingOrder Table component */}
        <PendingOrdersTable orders={orders} />
      </div>
    </div>
  );
}
