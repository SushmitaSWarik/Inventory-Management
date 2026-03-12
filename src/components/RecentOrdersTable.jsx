import { useState } from "react";

import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";

const orders = [
  {
    id: "#13D06A",
    customer: "Anup",
    items: "1 item",
    amount: "₹107",
    status: "Completed",
  },
  {
    id: "#13CFEF",
    customer: "Anup",
    items: "1 item",
    amount: "₹425",
    status: "Completed",
  },
];
// reubale tab;le wrapper
// import DataTable from "@/components/common/DataTable";
import DataTable from "./common/DataTable";

export default function RecentOrdersTable() {
  const [showTable, setShowTable] = useState(false);

  return (
    <div className="bg-white rounded-xl border shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 border-b">
        <div>
          <h2 className="text-base sm:text-lg font-semibold">Recent Orders</h2>

          <p className="text-xs sm:text-sm text-gray-500">
            Latest customer transactions
          </p>
        </div>

        <button
          onClick={() => setShowTable(!showTable)}
          className="text-blue-600 text-xs sm:text-sm font-medium hover:underline"
        >
          {showTable ? "Close" : "View All"}
        </button>
      </div>

      {showTable && (
        /* Scroll container for mobile */
        // <div className="overflow-x-auto">

        //   <Table className="min-w-[500px]">
        <DataTable width="min-w-[500px]">
          {/* Header row */}
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-gray-500">
                Order ID
              </TableHead>

              <TableHead className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-gray-500">
                Customer
              </TableHead>

              <TableHead className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-gray-500">
                Items
              </TableHead>

              <TableHead className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-gray-500">
                Amount
              </TableHead>

              <TableHead className="px-4 sm:px-6 py-2 sm:py-3 text-center text-xs sm:text-sm text-gray-500">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>

          {/* Body */}
          <TableBody>
            {orders.map(order => (
              <TableRow key={order.id} className="border-t">
                <TableCell className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium">
                  {order.id}
                </TableCell>

                <TableCell className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm">
                  {order.customer}
                </TableCell>

                <TableCell className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-gray-600">
                  {order.items}
                </TableCell>

                <TableCell className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium">
                  {order.amount}
                </TableCell>

                <TableCell className="px-4 sm:px-6 py-2 sm:py-3 text-center">
                  <span className="bg-blue-100 text-blue-600 px-2 sm:px-3 py-1 rounded-md text-[10px] sm:text-xs font-medium">
                    {order.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

          {/* </Table>

        </div> */}
        </DataTable>
      )}
    </div>
  );
}
