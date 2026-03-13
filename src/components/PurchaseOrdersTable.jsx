import {
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import DataTable from "@/components/common/DataTable";
import { Eye } from "lucide-react";

export default function PurchaseOrdersTable({ purchaseOrders = [] }) {  //purchaseOrders = [] -->default value
  return (
    <DataTable width="min-w-[900px]">
      <TableHeader className="bg-gray-50">
        <TableRow>
          <TableHead className="px-4 py-3 text-xs sm:text-sm text-gray-500">
            PO Number
          </TableHead>

          <TableHead className="px-4 py-3 text-xs sm:text-sm text-gray-500">
            Supplier
          </TableHead>

          <TableHead className="px-4 py-3 text-xs sm:text-sm text-gray-500">
            Order Date
          </TableHead>

          <TableHead className="px-4 py-3 text-xs sm:text-sm text-gray-500">
            Delivery Date
          </TableHead>

          <TableHead className="px-4 py-3 text-xs sm:text-sm text-gray-500">
            Total
          </TableHead>

          <TableHead className="px-4 py-3 text-right text-xs sm:text-sm text-gray-500">
            Status
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {!purchaseOrders.length && (
          <TableRow>
            <TableCell
              colSpan={6}
              className="text-center py-8 text-xs sm:text-sm text-gray-500"
            >
              No purchase orders found
            </TableCell>
          </TableRow>
        )}

        {purchaseOrders.length > 0 &&
          purchaseOrders.map(order => (
            <TableRow key={order.id} className="border-t">
              <TableCell className="px-4 py-3 text-xs sm:text-sm font-medium">
                {order.id}
              </TableCell>

              <TableCell className="px-4 py-3 text-xs sm:text-sm">
                {order.supplier}
              </TableCell>

              <TableCell className="px-4 py-3 text-xs sm:text-sm">
                {order.orderDate}
              </TableCell>

              <TableCell className="px-4 py-3 text-xs sm:text-sm">
                {order.deliveryDate}
              </TableCell>

              <TableCell className="px-4 py-3 text-xs sm:text-sm font-medium text-blue-600">
                {order.total}
              </TableCell>

              <TableCell className="px-4 py-3">
                <div className="flex justify-end items-center gap-2 text-blue-600 cursor-pointer hover:underline text-xs sm:text-sm">
                  <Eye size={16} />
                  View Items
                </div>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </DataTable>
  );
}
