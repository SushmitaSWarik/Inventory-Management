// import RecentOrders from "@/components/dashboard/RecentOrders"
import StatCard from "@/components/common/StatCard";
// import RecentOrders from "../components/RecentOrders";
import RecentOrdersTable from "@/components/RecentOrdersTable";

import {
  Package,
  ShoppingCart,
  IndianRupee,
  Activity,
  Users,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl min-[426px]:text-2xl font-bold m-0">
          Dashboard
        </h1>

        <p className="text-xs min-[426px]:text-base text-gray-500 m-0">
          Welcome back! Here's what's happening with your inventory.
        </p>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <StatCard
          title="Total Products"
          value="3"
          icon={Package}
          color="bg-blue-100 text-blue-600"
        />

        <StatCard
          title="Total Orders"
          value="2"
          icon={ShoppingCart}
          color="bg-green-100 text-green-600"
        />

        <StatCard
          title="Revenue"
          value="₹532.00"
          icon={IndianRupee}
          color="bg-yellow-100 text-yellow-600"
        />

        <StatCard
          title="Active Orders"
          value="0"
          icon={Activity}
          color="bg-purple-100 text-purple-600"
        />

        <StatCard
          title="Active Customers"
          value="1"
          icon={Users}
          color="bg-cyan-100 text-cyan-600"
        />
      </div>

      <RecentOrdersTable />
    </div>
  );
}
