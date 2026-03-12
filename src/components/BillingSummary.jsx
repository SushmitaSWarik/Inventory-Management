import { Input } from "@/components/ui/input";

export default function BillingSummary({
  includeGST,
  setIncludeGST,
  subtotal,
  discount,
  setDiscount,
  grandTotal,
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Billing From */}

      <div className="border rounded-lg p-4 bg-blue-50">
        <p className="text-xs text-gray-500">Billing From:</p>
        <p className="text-sm font-semibold">Metal Industry</p>
      </div>

      {/* Totals */}

      <div className="border rounded-lg p-4 space-y-4">
        {/* GST */}

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Include GST (18%)</p>
            <p className="text-xs text-gray-400">SGST + CGST</p>
          </div>

          <input
            type="checkbox"
            checked={includeGST}
            onChange={e => setIncludeGST(e.target.checked)}
          />
        </div>

        {/* Subtotal */}

        <div className="flex justify-between text-sm">
          <p className="text-gray-500">Subtotal:</p>
          <p>₹ {subtotal.toFixed(2)}</p>
        </div>

        {/* Discount */}

        <div>
          <p className="text-sm text-gray-500">Discount</p>

          <Input
            type="number"
            value={discount}
            onChange={e => setDiscount(e.target.value)}
          />
        </div>

        {/* Grand Total */}

        <div className="flex justify-between font-semibold border-t pt-3">
          <p>Grand Total:</p>
          <p>₹ {grandTotal.toFixed(2)}</p>
        </div>

        {/* Payment Method */}

        <div className="space-y-2">
          <p className="text-sm font-medium">Payment Method</p>

          <div className="flex gap-4 text-sm">
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" defaultChecked />
              Cash
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="payment" />
              Online
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="payment" />
              Card
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
