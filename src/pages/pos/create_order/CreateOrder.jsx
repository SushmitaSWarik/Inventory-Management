import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import IndividualCustomer from "./IndividualCustomer";
import BusinessAndCustomer from "./BussinessAndCustomer";

export default function CreateOrder({
  title = "Create Order",
  description = "Enter order details below."
}) {
  const [customerType, setCustomerType] = useState("individual");

  const [items, setItems] = useState([]); //This stores all products added to the order.

  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");

  const [discount, setDiscount] = useState(0);
  const [includeGST, setIncludeGST] = useState(false);

  const addProduct = () => {
    if (!product || !price || !qty) return;

    const newItem = {
      id: Date.now(),
      product,
      price: Number(price),
      qty: Number(qty),
      total: Number(price) * Number(qty),
    };

    setItems([...items, newItem]);

    setProduct("");
    setPrice("");
    setQty("");
  };

  const subtotal = items.reduce((acc, item) => acc + item.total, 0);

  const gstAmount = includeGST ? subtotal * 0.18 : 0;

  const grandTotal = subtotal + gstAmount - Number(discount || 0);

  return (
    <div className="space-y-6">
      {/* Header */}

      <div>
        <h1 className="text-xl sm:text-2xl font-bold">{title}</h1>

        <p className="text-xs sm:text-sm text-gray-500">
          {description}
        </p>
      </div>

      {/* Main Card */}

      <div className="bg-white border rounded-xl shadow-sm p-4 sm:p-6 space-y-6">
        {/* Customer Type */}

        <div className="space-y-2">
          <Label className="text-sm font-medium">Customer Type</Label>

          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="customerType"
                value="individual"
                checked={customerType === "individual"}
                onChange={e => setCustomerType(e.target.value)}
              />
              Individual
            </label>

            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="customerType"
                value="business"
                checked={customerType === "business"}
                onChange={e => setCustomerType(e.target.value)}
              />
              Business
            </label>
          </div>
        </div>

        {/* ------------------ INDIVIDUAL ------------------ */}

        {customerType === "individual" && (
          <IndividualCustomer
            items={items}
            includeGST={includeGST}
            setIncludeGST={setIncludeGST}
            subtotal={subtotal}
            discount={discount}
            setDiscount={setDiscount}
            grandTotal={grandTotal}
          />
        )}

        {/* ================= BUSINESS ================= */}

        {customerType === "business" && (
          <BusinessAndCustomer
            items={items}
            includeGST={includeGST}
            setIncludeGST={setIncludeGST}
            subtotal={subtotal}
            discount={discount}
            setDiscount={setDiscount}
            grandTotal={grandTotal}
          />
        )}
      </div>
    </div>
  );
}
