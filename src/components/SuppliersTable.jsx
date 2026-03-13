import {
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import DataTable from "./common/DataTable";
import { Pencil, Trash2 } from "lucide-react";

export default function SuppliersTable({ suppliers = [] }) {
  return (
    <DataTable width="min-w-[1000px]">
      <TableHeader className="bg-gray-50">
        <TableRow>
          <TableHead className="px-4 py-3 text-xs sm:text-sm text-gray-500">
            Supplier ID
          </TableHead>

          <TableHead className="px-4 py-3 text-xs sm:text-sm text-gray-500">
            Company Name
          </TableHead>

          <TableHead className="px-4 py-3 text-xs sm:text-sm text-gray-500">
            Contact Person
          </TableHead>

          <TableHead className="px-4 py-3 text-xs sm:text-sm text-gray-500">
            Contact Info
          </TableHead>

          <TableHead className="px-4 py-3 text-xs sm:text-sm text-gray-500">
            Location
          </TableHead>

          <TableHead className="px-4 py-3 text-xs sm:text-sm text-gray-500">
            Products
          </TableHead>

          <TableHead className="px-4 py-3 text-right text-xs sm:text-sm text-gray-500">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {!suppliers.length && (
          <TableRow>
            <TableCell
              colSpan={7}
              className="text-center py-8 text-xs sm:text-sm text-gray-500"
            >
              No suppliers found
            </TableCell>
          </TableRow>
        )}

        {suppliers.map(supplier => (
          <TableRow key={supplier.id} className="border-t">
            <TableCell className="px-4 py-3 text-xs sm:text-sm font-medium">
              {supplier.id}
            </TableCell>

            <TableCell className="px-4 py-3 text-xs sm:text-sm">
              {supplier.company}
            </TableCell>

            <TableCell className="px-4 py-3 text-xs sm:text-sm">
              {supplier.contactPerson}
            </TableCell>

            <TableCell className="px-4 py-3 text-xs sm:text-sm text-gray-600">
              <div>{supplier.email}</div>

              <div className="text-xs text-gray-500">{supplier.phone}</div>
            </TableCell>

            <TableCell className="px-4 py-3 text-xs sm:text-sm">
              {supplier.location}
            </TableCell>

            <TableCell className="px-4 py-3 text-xs sm:text-sm">
              {supplier.products}
            </TableCell>

            <TableCell className="px-4 py-3">
              <div className="flex justify-end gap-3">
                {/* Edit */}
                <Pencil
                  size={16}
                  className="text-blue-600 cursor-pointer hover:text-blue-800"
                />

                {/* Delete */}
                <Trash2
                  size={16}
                  className="text-red-600 cursor-pointer hover:text-red-800"
                />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </DataTable>
  );
}
