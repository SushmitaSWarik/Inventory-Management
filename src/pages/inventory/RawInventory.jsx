import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import StatCard from "@/components/common/StatCard";

import {
  Search,
  Plus,
  Boxes,
  AlertTriangle,
  TrendingDown,
  Package,
} from "lucide-react";

import Inventory_AddMaterialModal from "@/components/Inventory_AddMaterialModal";
import { RawInventoryTable } from "@/components/RawInventoryTable";

export default function RawInventory() {
  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-xl min-[426px]:text-2xl font-bold">
            Raw Inventory
          </h1>

          <p className="text-xs sm:text-sm text-gray-500">
            Manage raw materials and stock levels
          </p>
        </div>

        {/* <Button className="flex items-center gap-2 w-full sm:w-auto">
          <Plus size={16} />
          Add Material
        </Button> */}
              <Inventory_AddMaterialModal/>
      </div>

      {/* Stats Cards (Reusable Component) */}

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Materials"
          value="2"
          // icon={Boxes}
          color="bg-blue-100 text-blue-600"
        />

        <StatCard
          title="Low Stock Items"
          value="0"
          // icon={AlertTriangle}
          color="bg-orange-100 text-orange-600"
        />

        <StatCard
          title="Out of Stock Items"
          value="0"
          // icon={TrendingDown}
          color="bg-red-100 text-red-600"
        />

        <StatCard
          title="Total Units in Stock"
          value="1,141"
          // icon={Package}
          color="bg-green-100 text-green-600"
        />
      </div>

      {/* Main Card */}

      <div className="bg-white border rounded-xl p-4 sm:p-5 md:p-6 space-y-4 shadow-sm">
        {/* Search */}

        <div className="relative w-full sm:max-w-sm">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />

          <Input
            placeholder="Search materials..."
            className="pl-9 text-xs sm:text-sm"
          />
        </div>

        {/* Table */}
        <RawInventoryTable />
              
      </div>
    </div>
  );
}
