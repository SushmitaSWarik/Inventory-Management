import { Input } from "@/components/ui/input";
import { Search, Plus } from "lucide-react";

import PurchaseOrdersTable from "@/components/PurchaseOrdersTable";
import PurchaseOrderModal from "@/components/PurchaseOrderModal";

export default function PurchaseOrders() {
  const purchaseOrders = [
    {
      id: "PO-2026-003",
      supplier: "Apl apollo tubes limited",
      orderDate: "03/03/2026",
      deliveryDate: "03/03/2026",
      total: "₹1,000",
    },
    {
      id: "PO-2026-002",
      supplier: "Apl apollo tubes limited",
      orderDate: "03/03/2026",
      deliveryDate: "03/03/2026",
      total: "₹10,000",
    },
    {
      id: "PO-2026-001",
      supplier: "Apl apollo tubes limited",
      orderDate: "03/03/2026",
      deliveryDate: "03/03/2026",
      total: "₹100",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Purchase Orders</h1>

          <p className="text-xs sm:text-sm text-gray-500">
            Manage raw material procurement
          </p>
        </div>

        {/* Create PO button - Modal */}
        <PurchaseOrderModal />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white border rounded-xl p-4">
          <p className="text-lg font-semibold">3</p>
          <p className="text-xs text-gray-500">Total Purchase Orders</p>
        </div>

        <div className="bg-white border rounded-xl p-4">
          <p className="text-lg font-semibold text-blue-600">₹11,100</p>
          <p className="text-xs text-gray-500">Total Procurement Value</p>
        </div>
      </div>

      {/* Search */}

      <div className="relative w-full sm:max-w-sm">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <Input
          placeholder="Search POs..."
          className="pl-9 text-xs sm:text-sm"
        />
      </div>

      {/* Table Card */}

      <div className="bg-white border rounded-xl shadow-sm p-4 sm:p-6 space-y-4">
        <h2 className="text-sm sm:text-base font-semibold">
          All Purchase Orders
        </h2>

        {/* Table - Purchase Order Table component */}
        <PurchaseOrdersTable purchaseOrders={purchaseOrders} />
      </div>
    </div>
  );
}
