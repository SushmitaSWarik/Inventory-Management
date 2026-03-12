import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export default function OrderItems({ items }) {
  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm sm:text-base font-semibold">Order Items</h3>

        <Button size="sm">+ Add Product</Button>
      </div>

      {/* Table Container */}
      <div className="border rounded-lg overflow-x-auto">
        <Table className="min-w-[600px]">
          {/* <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="text-left">Product</TableHead>
              <TableHead className="text-center">Price</TableHead>
              <TableHead className="text-center">Qty</TableHead>
              <TableHead className="text-center">Total</TableHead>
            </TableRow>
          </TableHeader> */}

          <TableBody>
            {items.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="text-center py-8 text-gray-500 text-sm"
                >
                  No items added. Click "Add Product" to begin.
                </TableCell>
              </TableRow>
            ) : (
              items.map(item => (
                <TableRow key={item.id}>
                  <TableCell>{item.product}</TableCell>
                  <TableCell className="text-center">₹ {item.price}</TableCell>
                  <TableCell className="text-center">{item.qty}</TableCell>
                  <TableCell className="text-center">₹ {item.total}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
