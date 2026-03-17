import { Card, CardContent } from "@/components/ui/card";

export default function StatCard({ title, value, icon: Icon, color }) {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-3 sm:p-4">
        {/* Text Section */}
        <div className="min-w-0">
          <p className="text-xs sm:text-sm text-gray-500 truncate">{title}</p>

          {/* <h2 className="text-lg sm:text-xl font-bold">{value}</h2> */}
          <h2 className="text-base min-[426px]:text-xl font-bold">{value}</h2>
        </div>

        {/* Icon Section */}
        {/* <div className={`p-2 sm:p-3 rounded-lg ${color} flex-shrink-0`}>
          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
        </div> */}

        {Icon && (
          <div className={`p-2 sm:p-3 rounded-lg ${color} flex-shrink-0`}>
            <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        )}
      </CardContent>
    </Card>
  );
}


// import { Card, CardContent } from "@/components/ui/card";

// export default function StatCard({
//   title,
//   value,
//   icon: Icon,
//   color,
//   growth,
// }) {
//   return (
//     <Card className="relative">
//       <CardContent className="p-4 sm:p-5 space-y-3">
//         {/* Top Row */}
//         <div className="flex items-center justify-between">
//           {Icon && (
//             <div className={`p-2 rounded-lg ${color}`}>
//               <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
//             </div>
//           )}

//           {growth && (
//             <span className="text-[10px] sm:text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
//               ↑ {growth}
//             </span>
//           )}
//         </div>

//         {/* Value */}
//         <h2 className="text-base sm:text-xl font-semibold">{value}</h2>

//         {/* Title */}
//         <p className="text-xs sm:text-sm text-gray-500">{title}</p>
//       </CardContent>
//     </Card>
//   );
// }
