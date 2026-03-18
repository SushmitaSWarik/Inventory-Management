export default function TopProducts() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-3">
          {/* Rank */}
          <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 text-xs font-semibold text-gray-700">
            1
          </span>

          {/* Product Info */}
          <div>
            <p className="text-sm font-medium text-gray-800">
              APL (14g) 2.00mm 4*4
            </p>
            <p className="text-xs text-gray-500">5 units sold | ₹450.00</p>
          </div>
        </div>

        {/* Right badge */}
        <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded-md">
          Top Seller
        </span>
      </div>
    </div>
  );
}
