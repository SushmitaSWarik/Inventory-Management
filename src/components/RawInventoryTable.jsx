import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import {
  Pencil,
  Trash2,
} from "lucide-react";

import DataTable from "@/components/common/DataTable";

const materials = [
  {
    id: 1,
    name: "BLK RHS 100 * 50 * 2.00 MM 6.000",
    category: "BLK RHS 100 * 50 * 2.00MM 6.000",
    stock: 1040,
    status: "In Stock",
  },
  {
    id: 2,
    name: "BLK RHS 60 * 40 * 2.00MM 6.000",
    category: "BLK RHS 60 * 40 * 2.00MM 6.000",
    stock: 101,
    status: "In Stock",
  },
];

export function RawInventoryTable() {
  return (
    <DataTable width="min-w-[700px]">
      {/* Table */}
      <TableHeader className="bg-gray-50">
        <TableRow>
          <TableHead className="text-xs sm:text-sm">Material Name</TableHead>

          <TableHead className="text-xs sm:text-sm">Category</TableHead>

          <TableHead className="text-xs sm:text-sm">Current Stock</TableHead>

          <TableHead className="text-xs sm:text-sm">Status</TableHead>

          <TableHead className="text-xs sm:text-sm text-right">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {materials.map(item => (
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
                <span className="font-medium">{item.stock}</span>

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
  );
}
