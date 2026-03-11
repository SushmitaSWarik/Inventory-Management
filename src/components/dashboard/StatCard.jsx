// import { Card, CardContent } from "@/components/ui/card"

// export default function StatCard2({ title, value, icon: Icon, color }) {

//   return (
//     <Card>

//       <CardContent className="flex items-center justify-between p-4">

//         <div>
//           <p className="text-sm text-gray-500">{title}</p>
//           <h2 className="text-xl font-bold">{value}</h2>
//         </div>

//         <div className={`p-3 rounded-lg ${color}`}>
//           <Icon className="w-5 h-5" />
//         </div>

//       </CardContent>

//     </Card>
//   )
// }

import { Card, CardContent } from "@/components/ui/card"

export default function StatCard({ title, value, icon: Icon, color }) {

  return (
    <Card>

      <CardContent className="flex items-center justify-between p-3 sm:p-4">

        {/* Text Section */}
        <div className="min-w-0">
          <p className="text-xs sm:text-sm text-gray-500 truncate">
            {title}
          </p>

          {/* <h2 className="text-lg sm:text-xl font-bold">
            {value}
          </h2> */}
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
  )
}