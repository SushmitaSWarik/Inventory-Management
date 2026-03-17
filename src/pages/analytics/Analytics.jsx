import AnalyticsCard from "@/components/AnalyticsCard";
import RevenueCharts from "@/components/RevenueCharts";
import CategoryChart from "@/components/CategoryChart";

import ErrorBoundary from "@/components/common/ErrorBoundary";

import { IndianRupee, ShoppingCart, Package, Users } from "lucide-react";

export default function Analytics() {
  return (
    <div className="space-y-6">
      {/* Header + Cards */}
      <div className="space-y-6">
        {/* Header */}
        
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">Analytics</h1>
            <p className="text-xs sm:text-sm text-gray-500">
              Track performance metrics and business insights
            </p>
          </div>

          <div className="flex gap-2">
            <button className="border px-3 py-1.5 rounded-md text-sm">
              This Year
            </button>
            <button className="bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm">
              Export
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <AnalyticsCard
            title="Total Revenue"
            value="₹532.00"
            icon={IndianRupee}
            growth="+100%"
          />
          <AnalyticsCard
            title="Total Orders"
            value="2"
            icon={ShoppingCart}
            growth="+100%"
          />
          <AnalyticsCard
            title="Products Sold"
            value="5"
            icon={Package}
            growth="+100%"
          />
          <AnalyticsCard
            title="New Customers"
            value="1"
            icon={Users}
            growth="+100%"
          />
        </div>
      </div>

      {/* Charts Section*/}
      <ErrorBoundary>
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-2 bg-white border rounded-xl p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-gray-800">
              Revenue Trend
            </h2>
            <p className="text-xs text-gray-500 mb-4">
              Sales growth performance over time
            </p>

            {/* Revenue Chart component - Line chart */}
            <RevenueCharts />
          </div>

          <div className="bg-white border rounded-xl p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-gray-800">
              Sales by Category
            </h2>
            <p className="text-xs text-gray-500 mb-4">
              Product category distribution
            </p>
            {/* Category Chart component - Donut chart */}
            <CategoryChart />
          </div>
        </div>
      </ErrorBoundary>

    </div>
  );
}
