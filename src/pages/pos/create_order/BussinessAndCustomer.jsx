import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import OrderItems from "@/components/OrderItems";
import DeliveryCredentials from "@/components/DeliveryCredentials";
import BillingSummary from "@/components/BillingSummary";

export default function BusinessAndCustomer({items,
  includeGST,
  setIncludeGST,
  subtotal,
  discount,
  setDiscount,
  grandTotal
}) {
  return (
    <div className="space-y-6">
      {/* Section Title */}

      <div>
        <h2 className="text-sm font-semibold border-b pb-2">
          Business & Customer Details
        </h2>
      </div>

      {/* Form */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Company Name */}

        <div className="space-y-1">
          <Label>Company Name *</Label>
          <Input placeholder="Enter company name" />
        </div>

        {/* Contact */}

        <div className="space-y-1">
          <Label>Contact</Label>
          <Input placeholder="10 digit phone number" />
        </div>

        {/* Address */}

        <div className="space-y-1">
          <Label>Address *</Label>
          <Input placeholder="Full address" />
        </div>

        {/* GSTIN */}

        <div className="space-y-1">
          <Label>GSTIN/UIN</Label>
          <Input placeholder="GST number" />
        </div>

        {/* Email */}

        <div className="space-y-1">
          <Label>Email</Label>
          <Input placeholder="Business email" />
        </div>

        {/* State Name */}

        <div className="space-y-1">
          <Label>State Name</Label>
          <Input placeholder="e.g. Karnataka" />
        </div>

        {/* State Code */}

        <div className="space-y-1">
          <Label>State Code</Label>
          <Input placeholder="e.g. 29" />
        </div>
      </div>

      {/* ------------Delivery Credentials------------ */}
      <DeliveryCredentials />

      {/* ------------Order Items--------------------- */}
      <OrderItems items={items} />

      {/* ------------Billing Summary----------------- */}
      {/* <BillingSummary/> */}

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
