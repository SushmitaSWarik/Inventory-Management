import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";
// reusable table comp
import DataTable from "@/components/common/DataTable";
import { Pencil, Trash2 } from "lucide-react";


export function ManageProductTable() {
    const products = [
    {
      id: 1,
      name: "MS PIPE 100* 50 *2.00 MM",
      category: "MS PIPE 100*50 * 2.00 mm",
      stock: "100 kg",
      price: "₹72 / kg",
      status: "In Stock",
    },
    {
      id: 2,
      name: "JSW SHEET 0.45 Pragathi +",
      category: "SHEETS",
      stock: "100 pcs",
      price: "₹120 / pcs",
      status: "In Stock",
    },
    {
      id: 3,
      name: "APL (146) 2.00MM 4*4",
      category: "APL (146) 2.00mm",
      stock: "100 pcs",
      price: "₹90 / pcs",
      status: "In Stock",
    },
  ];

    return (
      <DataTable width="min-w-[800px]">
        {/* Table */}
        <TableHeader>
          <TableRow>
            <TableHead className="text-xs sm:text-sm">Name</TableHead>

            <TableHead className="text-xs sm:text-sm">Category</TableHead>

            <TableHead className="text-xs sm:text-sm">Stock</TableHead>

            <TableHead className="text-xs sm:text-sm">Price</TableHead>

            <TableHead className="text-xs sm:text-sm">Status</TableHead>

            <TableHead className="text-xs sm:text-sm text-right">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.map(product => (
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
      </DataTable>
    );
}