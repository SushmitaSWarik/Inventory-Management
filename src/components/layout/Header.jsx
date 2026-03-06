// import { Input } from "@/components/ui/input"
// import { Search, LogOut } from "lucide-react"

// export default function Header2() {
//   return (
//     <div className="flex items-center justify-between bg-white border-b px-3 sm:px-4 py-3 gap-2">

//       {/* Search */}
//       <div className="relative flex-1 min-w-0 max-w-[130px] sm:max-w-[220px] md:max-w-md">

//         <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />

//         <Input
//           placeholder="Search..."
//           className="pl-10 w-full text-xs sm:text-sm"
//         />

//       </div>

//       {/* Right Section */}
//       <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">

//         {/* Username */}
//         <div className="text-right max-w-[70px] sm:max-w-[140px] overflow-hidden">
//           <p className="font-medium text-xs sm:text-sm truncate">
//             Rakshith
//           </p>
//           <p className="text-[10px] sm:text-xs text-gray-500 truncate">
//             Super Admin
//           </p>
//         </div>

//         {/* Avatar */}
//         <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-500 text-white flex items-center justify-center rounded-full text-xs sm:text-sm">
//           R
//         </div>

//         {/* Logout */}
//         <LogOut className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-red-500 cursor-pointer flex-shrink-0" />

//       </div>

//     </div>
//   )
// }


import { Input } from "@/components/ui/input"
import { Search, LogOut } from "lucide-react"

export default function Header() {
  return (
    <div className="flex items-center justify-between bg-white border-b px-3 sm:px-4 py-3 gap-2">

      {/* Search */}
      <div className="relative flex-1 min-w-0 max-w-[200px] sm:max-w-[220px] md:max-w-md">

        <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 w-3 h-3 sm:w-4 sm:h-4" />

        <Input
          placeholder="Search..."
          className="pl-8 h-8 sm:h-10 w-full text-xs sm:text-sm ocus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none"
        />

      </div>


      {/* Right Section */}
      <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">

        {/* Username */}
        <div className="text-right max-w-[140px] overflow-hidden hidden sm:block">
          <p className="font-medium text-sm truncate">
            Rakshith
          </p>
          <p className="text-xs text-gray-500 truncate">
            Super Admin
          </p>
        </div>

        {/* Avatar */}
        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-500 text-white flex items-center justify-center rounded-full text-xs sm:text-sm">
          R
        </div>

        {/* Logout */}
        <LogOut className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-red-500 cursor-pointer flex-shrink-0" />

      </div>

    </div>
  )
}