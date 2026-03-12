import DeliveredOrdersTable from "@/components/DeliveredOrdersTable";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import { Search, Filter, Download } from "lucide-react";

export default function Orders() {
  const orders = [
    {
      id: "#13006A",
      customer: "Anup",
      date: "Mar 01, 2026",
      items: "1 Items",
      total: "₹107",
      status: "Completed",
    },
    {
      id: "#13C3EF",
      customer: "Anup",
      date: "Mar 01, 2026",
      items: "1 Items",
      total: "₹475",
      status: "Completed",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}

      <div>
        <h1 className="text-xl sm:text-2xl font-bold">Delivered Orders</h1>

        <p className="text-sm text-gray-500">
          View all delivered and completed orders
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

            <Input placeholder="Search orders..." className="pl-9" />
          </div>

          {/* Filter */}

          <button className="flex items-center gap-2 border rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50">
            <Filter size={16} />
            All Types
          </button>
        </div>

        {/* Table  - component*/}
        <DeliveredOrdersTable orders={orders} />
      </div>
    </div>
  );
}
