import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import { Download } from "lucide-react";
import DataTable from "./common/DataTable";

export default function DeliveredOrdersTable({ orders }) {
  return (
    <DataTable width="min-w-[700px]"> 
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
            Items
          </TableHead>

          <TableHead className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-gray-500">
            Total
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
        {orders.map(order => (
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

            <TableCell className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-gray-600">
              {order.items}
            </TableCell>

            <TableCell className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium">
              {order.total}
            </TableCell>

            <TableCell className="px-4 sm:px-6 py-2 sm:py-3 text-center">
              <span className="bg-blue-100 text-blue-600 px-2 sm:px-3 py-1 rounded-md text-[10px] sm:text-xs font-medium">
                {order.status}
              </span>
            </TableCell>

            {/* <TableCell className="px-4 sm:px-6 py-2 sm:py-3 text-right">
                      <Download
                        size={16}
                        className="text-gray-500 hover:text-black cursor-pointer"
                      />
                    </TableCell> */}
            <TableCell className="px-4 sm:px-6 py-2 sm:py-3">
              <div className="flex justify-end">
                <Download
                  size={16}
                  className="text-gray-500 hover:text-black cursor-pointer"
                />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </DataTable>
  );
}
