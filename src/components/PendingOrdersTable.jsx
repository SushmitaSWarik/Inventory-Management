import {
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import DataTable from "./common/DataTable";

import { Pencil, Trash2 } from "lucide-react";

export default function PendingOrdersTable({ orders }) {
  return (
    <DataTable width="min-w-[750px]">
      <TableHeader className="bg-gray-50">
        <TableRow>
          <TableHead className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-gray-500">
            Order ID
          </TableHead>

          <TableHead className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-gray-500">
            Customer
          </TableHead>

          <TableHead className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-gray-500">
            Date
          </TableHead>

          <TableHead className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-gray-500">
            Total
          </TableHead>

          <TableHead className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-gray-500">
            Due
          </TableHead>

          <TableHead className="px-4 sm:px-6 py-2 sm:py-3 text-center text-xs sm:text-sm text-gray-500">
            Status
          </TableHead>

          <TableHead className="px-4 sm:px-6 py-2 sm:py-3 text-right text-xs sm:text-sm text-gray-500">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {/* Empty State */}

        {!orders.length && (
          <TableRow>
            <TableCell
              colSpan={7}
              className="text-center py-8 text-xs sm:text-sm text-gray-500"
            >
              No pending orders found
            </TableCell>
          </TableRow>
        )}

        {/* Orders Data */}

        {orders.length > 0 &&
          orders.map(order => (
            <TableRow key={order.id} className="border-t">
              <TableCell className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium">
                {order.id}
              </TableCell>

              <TableCell className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm">
                {order.customer}
              </TableCell>

              <TableCell className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm">
                {order.date}
              </TableCell>

              <TableCell className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium">
                {order.total}
              </TableCell>

              <TableCell className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm">
                {order.due}
              </TableCell>

              <TableCell className="px-4 sm:px-6 py-2 sm:py-3 text-center">
                <span className="bg-yellow-100 text-yellow-700 px-2 sm:px-3 py-1 rounded-md text-[10px] sm:text-xs font-medium">
                  {order.status}
                </span>
              </TableCell>

              <TableCell className="px-4 sm:px-6 py-2 sm:py-3 text-right">
                {/* Actions */}
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
