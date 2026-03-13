import AppModal from "@/components/common/AppModal";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";

export default function PurchaseOrderModal() {
  return (
    <AppModal
      title="New Purchase Order"
      trigger={
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-xs sm:text-sm hover:bg-blue-700">
          <Plus size={16} />
          Create PO
        </button>
      }
    >
      {/* Modal Content */}

      <div className="space-y-5">
        {/* Supplier + Delivery Date */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label>Supplier</Label>
            <select className="w-full border rounded-md px-3 py-2 text-sm">
              <option>Select Supplier</option>
            </select>
          </div>

          <div className="space-y-1">
            <Label>Delivery Date</Label>
            <Input type="date" />
          </div>
        </div>

        {/* Order Items */}

        <div className="space-y-3">
          <h3 className="text-sm font-semibold">Order Items</h3>

          <div className="space-y-1">
            <Label>Material</Label>
            <Input placeholder="Search Material..." />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-1">
              <Label>Quantity</Label>
              <Input type="number" placeholder="0" />
            </div>

            <div className="space-y-1">
              <Label>Unit</Label>
              <select className="w-full border rounded-md px-3 py-2 text-sm">
                <option>pcs</option>
                <option>kg</option>
              </select>
            </div>

            <div className="space-y-1">
              <Label>Total Amount (₹)</Label>
              <Input type="number" placeholder="0" />
            </div>
          </div>
        </div>

        {/* Notes */}

        <div className="space-y-1">
          <Label>Notes</Label>
          <Input placeholder="Any specific instructions..." />
        </div>

        {/* Footer */}

        <div className="flex items-center justify-between pt-4">
          <p className="text-sm font-semibold">Grand Total: ₹0</p>

          <Button>Confirm Order</Button>
        </div>
      </div>
    </AppModal>
  );
}