import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import {
  Search,
  Plus,
  Pencil,
  Trash2
} from "lucide-react"

const materials = [
  {
    name: "BLK RHS 100 * 50 * 2.00 MM 6.000",
    category: "BLK RHS 100 * 50 * 2.00MM 6.000",
    stock: 1040,
    status: "In Stock"
  },
  {
    name: "BLK RHS 60 * 40 * 2.00MM 6.000",
    category: "BLK RHS 60 * 40 * 2.00MM 6.000",
    stock: 101,
    status: "In Stock"
  }
]

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

        <Button className="flex items-center gap-2 w-full sm:w-auto">
          <Plus size={16} />
          Add Material
        </Button>

      </div>


      {/* Stats */}

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

        <div className="bg-white border rounded-lg p-4">
          <p className="text-xs text-gray-500">Total Materials</p>
          <p className="text-xl font-bold">2</p>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <p className="text-xs text-gray-500">Low Stock Items</p>
          <p className="text-xl font-bold text-orange-500">0</p>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <p className="text-xs text-gray-500">Out of Stock Items</p>
          <p className="text-xl font-bold text-red-500">0</p>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <p className="text-xs text-gray-500">Total Units in Stock</p>
          <p className="text-xl font-bold text-green-600">1,141</p>
        </div>

      </div>


      {/* Search */}

      <div className="relative max-w-sm">

        <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

        <Input
          placeholder="Search materials..."
          className="pl-8"
        />

      </div>


      {/* Stock Overview Table */}

      <div className="bg-white border rounded-xl shadow-sm">

        <div className="px-4 sm:px-6 py-4 border-b">

          <h2 className="font-semibold text-sm sm:text-base">
            Stock Overview
          </h2>

        </div>

        <div className="overflow-x-auto">

          <table className="min-w-[700px] w-full text-sm">

            <thead className="bg-gray-50">

              <tr className="text-left text-gray-500">

                <th className="px-4 py-3">Material Name</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Current Stock</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-center">Actions</th>

              </tr>

            </thead>

            <tbody>

              {materials.map((item, index) => (

                <tr key={index} className="border-t">

                  <td className="px-4 py-3 font-medium">
                    {item.name}
                  </td>

                  <td className="px-4 py-3 text-gray-600">
                    {item.category}
                  </td>

                  <td className="px-4 py-3">

                    <div className="flex items-center gap-2">

                      <span className="font-medium">
                        {item.stock}
                      </span>

                      <span className="text-xs text-blue-500">
                        PIECES
                      </span>

                    </div>

                  </td>

                  <td className="px-4 py-3">

                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">
                      {item.status}
                    </span>

                  </td>

                  <td className="px-4 py-3">

                    <div className="flex items-center justify-center gap-3">

                      <Pencil className="w-4 h-4 cursor-pointer text-gray-600 hover:text-blue-500" />

                      <Trash2 className="w-4 h-4 cursor-pointer text-gray-600 hover:text-red-500" />

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
}