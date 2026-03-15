import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function StockList({
  activeTab,
  data,
  selectedItem,
  setSelectedItem,
}) {
  return (
    <div className="space-y-3">
      {/* Search */}

      <div className="relative">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <Input
          placeholder={`Search ${activeTab}...`}
          className="pl-9 text-xs sm:text-sm"
        />
      </div>

      {/* List */}

      {data.length === 0 && (
        <div className="text-center text-xs sm:text-sm text-gray-500 py-6">
          {activeTab === "materials"
            ? "No materials available"
            : "No products available"}
        </div>
      )}

      {data.map(item => (
        <div
          key={item.id}
          onClick={() => setSelectedItem(item)}
          className={`border rounded-lg p-3 cursor-pointer flex justify-between items-center hover:bg-gray-50
          ${selectedItem?.id === item.id ? "border-blue-500 bg-blue-50" : ""}`}
        >
          <div>
            <p className="text-xs sm:text-sm font-medium">{item.name}</p>

            <p className="text-xs text-gray-500">{item.stock}</p>
          </div>

          <span className="text-xs text-gray-500">{item.stock}</span>
        </div>
      ))}
    </div>
  );
}
