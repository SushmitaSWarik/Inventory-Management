import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import StatCard from "@/components/common/StatCard"

import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell
} from "@/components/ui/table"

import {
  Search,
  Plus,
  Pencil,
  Trash2,
  Boxes,
  AlertTriangle,
  TrendingDown,
  Package
} from "lucide-react"
import AddMaterialModal from "../components/AddMaterialModal"
// reusable table wrapper
import DataTable from "@/components/common/DataTable"


const materials = [
  {
    id: 1,
    name: "BLK RHS 100 * 50 * 2.00 MM 6.000",
    category: "BLK RHS 100 * 50 * 2.00MM 6.000",
    stock: 1040,
    status: "In Stock"
  },
  {
    id: 2,
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

        {/* <Button className="flex items-center gap-2 w-full sm:w-auto">
          <Plus size={16} />
          Add Material
        </Button> */}
        <AddMaterialModal />  

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

        {/* <div className="overflow-x-auto">

          <Table className="min-w-[700px]"> */}
        <DataTable width="min-w-[700px]">

            <TableHeader className="bg-gray-50">

              <TableRow>

                <TableHead className="text-xs sm:text-sm">
                  Material Name
                </TableHead>

                <TableHead className="text-xs sm:text-sm">
                  Category
                </TableHead>

                <TableHead className="text-xs sm:text-sm">
                  Current Stock
                </TableHead>

                <TableHead className="text-xs sm:text-sm">
                  Status
                </TableHead>

                <TableHead className="text-xs sm:text-sm text-right">
                  Actions
                </TableHead>

              </TableRow>

            </TableHeader>



            <TableBody>

              {materials.map((item) => (

                <TableRow key={item.id}>

                  <TableCell className="font-medium text-xs sm:text-sm">
                    {item.name}
                  </TableCell>

                  <TableCell className="text-xs sm:text-sm">
                    {item.category}
                  </TableCell>


                  {/* Stock */}

                  <TableCell className="text-xs sm:text-sm">

                    <div className="flex items-center gap-2">

                      <span className="font-medium">
                        {item.stock}
                      </span>

                      <span className="text-[10px] sm:text-xs text-blue-500">
                        PIECES
                      </span>

                    </div>

                  </TableCell>


                  {/* Status */}

                  <TableCell>

                    <span className="bg-green-100 text-green-600 px-2 sm:px-3 py-1 rounded-md text-[10px] sm:text-xs font-medium">
                      {item.status}
                    </span>

                  </TableCell>


                  {/* Actions */}

                  <TableCell>

                    <div className="flex justify-end gap-3">

                      <Pencil
                        size={16}
                        className="text-gray-500 hover:text-blue-600 cursor-pointer"
                      />

                      <Trash2
                        size={16}
                        className="text-gray-500 hover:text-red-600 cursor-pointer"
                      />

                    </div>

                  </TableCell>

                </TableRow>

              ))}

            </TableBody>

          {/* </Table>

        </div> */}
          
          </DataTable>

      </div>

    </div>

  )
}