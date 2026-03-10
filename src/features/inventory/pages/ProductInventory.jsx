import StatCard from "@/components/dashboard/StatCard"

import {
  Package,
  CheckCircle,
  AlertTriangle,
  TrendingDown
} from "lucide-react"

export default function ProductInventory() {

  return (
    <div className="space-y-6">

      {/* Page Title */}

      <div>
        <h1 className="text-xl min-[426px]:text-2xl font-bold m-0">
          Inventory
        </h1>

        <p className="text-xs min-[426px]:text-base text-gray-500 m-0">
          Monitor and manage your stock levels
        </p>
      </div>


      {/* Stat Cards */}

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

        <StatCard
          title="Total Products"
          value="3"
          icon={Package}
          color="bg-blue-100 text-blue-600"
        />

        <StatCard
          title="In Stock"
          value="3"
          icon={CheckCircle}
          color="bg-green-100 text-green-600"
        />

        <StatCard
          title="Low Stock Items"
          value="0"
          icon={AlertTriangle}
          color="bg-yellow-100 text-yellow-600"
        />

        <StatCard
          title="Out of Stock"
          value="0"
          icon={TrendingDown}
          color="bg-red-100 text-red-600"
        />

      </div>


      {/* Alerts Section */}

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">

        {/* Low Stock Alerts */}

        <div className="bg-white border rounded-xl shadow-sm p-4 sm:p-6">

          <div className="flex items-center gap-2 mb-3">

            <AlertTriangle className="text-yellow-500 w-4 h-4 sm:w-5 sm:h-5" />

            <h2 className="text-sm sm:text-base font-semibold">
              Low Stock Alerts
            </h2>

          </div>

          <p className="text-xs sm:text-sm text-gray-500">
            No low stock items
          </p>

        </div>


        {/* Out of Stock Alerts */}

        <div className="bg-white border rounded-xl shadow-sm p-4 sm:p-6">

          <div className="flex items-center gap-2 mb-3">

            <TrendingDown className="text-red-500 w-4 h-4 sm:w-5 sm:h-5" />

            <h2 className="text-sm sm:text-base font-semibold">
              Out of Stock Alerts
            </h2>

          </div>

          <p className="text-xs sm:text-sm text-gray-500">
            No out of stock items
          </p>

        </div>

      </div>

    </div>
  )
}