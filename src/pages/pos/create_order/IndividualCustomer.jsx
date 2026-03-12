import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import DeliveryCredentials from "@/components/DeliveryCredentials";
import OrderItems from "@/components/OrderItems";
import BillingSummary from "@/components/BillingSummary";

export default function IndividualCustomer({
  items,
  includeGST,
  setIncludeGST,
  subtotal,
  discount,
  setDiscount,
  grandTotal,
}) {
  return (
    <div className="space-y-6">
      {/* Customer Details */}

      <div className="space-y-4">
        <h2 className="text-sm font-semibold border-b pb-2">
          Customer Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1">
            <Label>Customer Name *</Label>
            <Input placeholder="Enter name" />
          </div>

          <div className="space-y-1">
            <Label>Contact</Label>
            <Input placeholder="10-digit phone number" />
          </div>

          <div className="space-y-1">
            <Label>Address *</Label>
            <Input placeholder="Full address" />
          </div>
        </div>
      </div>

      {/* Delivery Credentials */}

      <DeliveryCredentials />

      {/* Order Items */}

      <OrderItems items={items} />

      {/* Billing */}

      <BillingSummary
        includeGST={includeGST}
        setIncludeGST={setIncludeGST}
        subtotal={subtotal}
        discount={discount}
        setDiscount={setDiscount}
        grandTotal={grandTotal}
      />
    </div>
  );
}
