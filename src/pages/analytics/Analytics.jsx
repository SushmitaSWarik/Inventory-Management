// import { Button } from "@/components/ui/button";
// import {
//   Calendar,
//   Download,
//   IndianRupee,
//   ShoppingCart,
//   Box,
//   Users,
// } from "lucide-react";
// import StatCard from "@/components/common/StatCard";

// export default function Analytics() {
//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
//         <div>
//           <h2 className="text-sm sm:text-base font-semibold">Analytics</h2>
//           <p className="text-xs text-gray-500">
//             Track performance metrics and business insights
//           </p>
//         </div>

//         {/* Right Controls */}
//         <div className="flex gap-2">
//           <Button variant="outline" className="text-xs sm:text-sm flex gap-2">
//             <Calendar size={14} />
//             This Year
//           </Button>

//           <Button className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm flex gap-2">
//             <Download size={14} />
//             Export
//           </Button>
//         </div>
//       </div>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         <StatCard
//           title="Total Revenue"
//           value="₹532.00"
//           icon={IndianRupee}
//           color="bg-blue-100 text-blue-600"
//           growth="+100%"
//         />

//         <StatCard
//           title="Total Orders"
//           value="2"
//           icon={ShoppingCart}
//           color="bg-purple-100 text-purple-600"
//           growth="+100%"
//         />

//         <StatCard
//           title="Products Sold"
//           value="5"
//           icon={Box}
//           color="bg-orange-100 text-orange-600"
//           growth="+100%"
//         />

//         <StatCard
//           title="New Customers"
//           value="1"
//           icon={Users}
//           color="bg-green-100 text-green-600"
//           growth="+100%"
//         />
//       </div>
//     </div>
//   );
// }
