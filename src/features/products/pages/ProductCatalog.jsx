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

import { Search, Download, Filter } from "lucide-react"

// added reusble table wrapper comp
import DataTable from "@/components/common/DataTable"

export default function ProductCatalog() {

  const products = [
    {
      id: 1,
      name: "MS PIPE 100* 50 *2.00 MM",
      category: "MS PIPE 100*50 * 2.00 mm",
      price: "₹72 / kg"
    },
    {
      id: 2,
      name: "JSW SHEET 0.45 Pragathi +",
      category: "SHEETS",
      price: "₹120 / pcs"
    },
    {
      id: 3,
      name: "APL (146) 2.00MM 4*4",
      category: "APL (146) 2.00mm",
      price: "₹90 / pcs"
    }
  ]

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

        <div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
            Product Catalog
          </h1>

          <p className="text-gray-500 text-xs sm:text-sm">
            View your product catalog
          </p>
        </div>

        <Button
          variant="outline"
          className="flex items-center gap-2 w-full sm:w-auto"
        >
          <Download size={16} />
          Export
        </Button>

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
              className="pl-9 text-sm"
            />

          </div>

          {/* Category Filter */}

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

          <Table className="min-w-[600px]"> */}
        <DataTable width="min-w-[600px]">

            <TableHeader>

              <TableRow>

                <TableHead className="text-xs sm:text-sm">
                  Sl No.
                </TableHead>

                <TableHead className="text-xs sm:text-sm">
                  Product Name
                </TableHead>

                <TableHead className="text-xs sm:text-sm">
                  Category
                </TableHead>

                <TableHead className="text-xs sm:text-sm">
                  Price
                </TableHead>

              </TableRow>

            </TableHeader>


            <TableBody>

              {products.map((product) => (

                <TableRow key={product.id}>

                  <TableCell className="text-xs sm:text-sm">
                    {product.id}
                  </TableCell>

                  <TableCell className="font-medium text-xs sm:text-sm">
                    {product.name}
                  </TableCell>

                  <TableCell className="text-xs sm:text-sm">
                    {product.category}
                  </TableCell>

                  <TableCell className="text-xs sm:text-sm">
                    {product.price}
                  </TableCell>

                </TableRow>

              ))}

            </TableBody>

          {/* </Table>

        </div> */}
          </DataTable>


        {/* <DataTable width="min-w-[600px]">

  <TableHeader>
    <TableRow>

      <TableHead className="text-xs sm:text-sm">
        Sl No.
      </TableHead>

      <TableHead className="text-xs sm:text-sm">
        Product Name
      </TableHead>

      <TableHead className="text-xs sm:text-sm">
        Category
      </TableHead>

      <TableHead className="text-xs sm:text-sm">
        Price
      </TableHead>

    </TableRow>
  </TableHeader>


  <TableBody>

    {products.map((product) => (

      <TableRow key={product.id}>

        <TableCell className="text-xs sm:text-sm">
          {product.id}
        </TableCell>

        <TableCell className="font-medium text-xs sm:text-sm">
          {product.name}
        </TableCell>

        <TableCell className="text-xs sm:text-sm">
          {product.category}
        </TableCell>

        <TableCell className="text-xs sm:text-sm">
          {product.price}
        </TableCell>

      </TableRow>

    ))}

  </TableBody>

</DataTable> */}

      </div>

    </div>
  )
}