import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export default function StockUpdatePanel({ selectedItem }) {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-4 sm:p-6 space-y-6">
      <h2 className="text-sm sm:text-base font-semibold">Update Stock Level</h2>

      {!selectedItem && (
        <div className="border border-dashed rounded-lg h-[200px] sm:h-[240px] flex flex-col items-center justify-center text-gray-400 text-center px-4">
          <ArrowRight size={22} className="mb-2" />

          <p className="text-xs sm:text-sm">
            Please select an item from the list to update its stock
          </p>
        </div>
      )}

      {selectedItem && (
        <div className="space-y-6">
          {/* Item Card */}

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border rounded-lg p-4 bg-gray-50">
            <div>
              <p className="text-sm sm:text-base font-semibold">
                {selectedItem.name}
              </p>

              <p className="text-xs text-gray-500">{selectedItem.name}</p>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-[10px] text-gray-400 uppercase">
                Current Stock
              </p>

              <p className="text-lg sm:text-xl font-bold text-blue-600">
                {selectedItem.stock}
              </p>
            </div>
          </div>

          {/* Update Stock */}

          <div className="space-y-2">
            <label className="text-xs sm:text-sm text-gray-500">
              New Stock Quantity (Add-on)
            </label>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  +
                </span>

                <Input
                  type="number"
                  placeholder="Enter quantity to add..."
                  className="pl-7 text-xs sm:text-sm"
                />
              </div>

              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-xs sm:text-sm hover:bg-blue-700 w-full sm:w-auto flex items-center justify-center">
                Update Stock
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
