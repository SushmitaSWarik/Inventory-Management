import {
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import DataTable from "./common/DataTable";

import { Phone, User } from "lucide-react";

export default function CustomersTable({ customers = [] }) {
  return (
    <DataTable width="min-w-[700px]">
      <TableHeader className="bg-gray-50">
        <TableRow>
          <TableHead className="px-4 py-3 text-xs sm:text-sm text-gray-500">
            Customer
          </TableHead>

          <TableHead className="px-4 py-3 text-xs sm:text-sm text-gray-500">
            Type
          </TableHead>

          <TableHead className="px-4 py-3 text-xs sm:text-sm text-gray-500">
            Contact Info
          </TableHead>

          <TableHead className="px-4 py-3 text-xs sm:text-sm text-gray-500">
            Orders
          </TableHead>

          <TableHead className="px-4 py-3 text-right text-xs sm:text-sm text-gray-500">
            Total Business
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {!customers.length && (
          <TableRow>
            <TableCell
              colSpan={5}
              className="text-center py-8 text-xs sm:text-sm text-gray-500"
            >
              No customers found
            </TableCell>
          </TableRow>
        )}

        {customers.map(customer => (
          <TableRow key={customer.id} className="border-t">
            {/* Customer */}

            <TableCell className="px-4 py-3 flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-semibold text-blue-600">
                {customer.name[0]}
              </div>

              <span className="text-xs sm:text-sm font-medium">
                {customer.name}
              </span>
            </TableCell>

            {/* Type */}

            <TableCell className="px-4 py-3 text-xs sm:text-sm">
              <span className="flex items-center gap-2 text-gray-600">
                {/* <span className="text-orange-500">◆</span> */}
                <User size={14} className="text-orange-500" />

                {customer.type}
              </span>
            </TableCell>

            {/* Contact */}

            <TableCell className="px-4 py-3 text-xs sm:text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Phone size={14} />

                {customer.phone}
              </div>
            </TableCell>

            {/* Orders */}

            <TableCell className="px-4 py-3 text-xs sm:text-sm">
              {customer.orders}
            </TableCell>

            {/* Total Business */}

            <TableCell className="px-4 py-3 text-right text-xs sm:text-sm font-medium text-blue-600">
              {customer.business}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </DataTable>
  );
}
