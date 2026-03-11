import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

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
  Filter,
  Plus,
  Pencil,
  Trash2
} from "lucide-react"
import AddProductModal from "../components/AddProductModal"
import AddCategoryModal from "../components/AddCategoryModal"

// reusbkle table comp
import DataTable from "@/components/common/DataTable"

export default function ManageProducts() {

  const products = [
    {
      id: 1,
      name: "MS PIPE 100* 50 *2.00 MM",
      category: "MS PIPE 100*50 * 2.00 mm",
      stock: "100 kg",
      price: "₹72 / kg",
      status: "In Stock"
    },
    {
      id: 2,
      name: "JSW SHEET 0.45 Pragathi +",
      category: "SHEETS",
      stock: "100 pcs",
      price: "₹120 / pcs",
      status: "In Stock"
    },
    {
      id: 3,
      name: "APL (146) 2.00MM 4*4",
      category: "APL (146) 2.00mm",
      stock: "100 pcs",
      price: "₹90 / pcs",
      status: "In Stock"
    }
  ]

  return (

    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

        <div>

          <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
            Manage Products
          </h1>

          <p className="text-gray-500 text-xs sm:text-sm">
            Manage your product inventory
          </p>

        </div>


              {/* <div className="flex gap-2 w-full sm:w-auto"> */}
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
        {/* <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto sm:justify-end"> */}

          {/* <Button
            variant="outline"
            className="flex items-center gap-2 w-full sm:w-auto"
          >
            <Plus size={16} />
            Add Category
          </Button>

          <Button className="flex items-center gap-2 w-full sm:w-auto">
            <Plus size={16} />
            Add Product
          </Button> */}
                  {/*-------------------  */}
                  {/* <Button
  variant="outline"
  className="flex items-center gap-2 w-full sm:w-auto text-xs sm:text-sm"
>
  <Plus size={16} />
  Add Category
</Button> */}
          <AddCategoryModal />

{/* <Button
  className="flex items-center gap-2 w-full sm:w-auto text-xs sm:text-sm"
>
  <Plus size={16} />
  Add Product
</Button> */}
          <AddProductModal />

        </div>

      </div>



      {/* Main Card */}

      <div className="bg-white border rounded-xl p-4 sm:p-5 md:p-6 space-y-4 shadow-sm">


        {/* Filters */}

        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">

          {/* Search */}

          <div className="relative w-full sm:flex-1">

            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />

            <Input
              placeholder="Search products..."
              className="pl-9 text-xs sm:text-sm"
            />

          </div>


          {/* Filter */}

          <Button
            variant="outline"
            className="flex items-center gap-2 w-full sm:w-auto"
          >
            <Filter size={16} />
            All Categories
          </Button>

        </div>



        {/* Table */}

        {/* <div className="overflow-x-auto">

          <Table className="min-w-[800px]"> */}
        <DataTable width="min-w-[800px]">

            <TableHeader>

              <TableRow>

                <TableHead className="text-xs sm:text-sm">
                  Name
                </TableHead>

                <TableHead className="text-xs sm:text-sm">
                  Category
                </TableHead>

                <TableHead className="text-xs sm:text-sm">
                  Stock
                </TableHead>

                <TableHead className="text-xs sm:text-sm">
                  Price
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

              {products.map((product) => (

                <TableRow key={product.id}>

                  <TableCell className="font-medium text-xs sm:text-sm">
                    {product.name}
                  </TableCell>

                  <TableCell className="text-xs sm:text-sm">
                    {product.category}
                  </TableCell>

                  <TableCell className="text-xs sm:text-sm">
                    {product.stock}
                  </TableCell>

                  <TableCell className="text-xs sm:text-sm">
                    {product.price}
                  </TableCell>


                  {/* Status */}

                  <TableCell>

                    <span className="bg-blue-100 text-blue-600 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs">
                      {product.status}
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