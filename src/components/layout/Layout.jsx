// import { useState } from "react"
// import Sidebar2 from "./Sidebar2"
// import Header2 from "./Header2"

// export default function Layout2({ children }) {

//   const [collapsed, setCollapsed] = useState(false)

//   const toggleSidebar = () => {
//     setCollapsed(!collapsed)
//   }

//   return (
//     <div className="flex h-screen bg-gray-100">

//       <Sidebar2 collapsed={collapsed} />

//       <div className="flex flex-col flex-1">

//         <Header2 />

//         <main className="p-6 overflow-y-auto flex-1">
//           {children}
//         </main>

//       </div>

//       {/* Collapse Button */}
//       <button
//         onClick={toggleSidebar}
//         className="
//         absolute
//         left-[16rem]
//         lg:left-[14rem]
//         top-6
//         z-50
//         bg-blue-500
//         text-white
//         rounded-full
//         w-6
//         h-6
//         flex
//         items-center
//         justify-center
//         shadow
//         "
//       >
//         {collapsed ? ">" : "<"}
//       </button>

//     </div>
//   )
// }


// ----------2nd
// import { useState } from "react"
// import Sidebar2 from "./Sidebar2"
// import Header2 from "./Header2"
// import { ChevronLeft, ChevronRight } from "lucide-react"

// export default function Layout2({ children }) {

//   const [collapsed, setCollapsed] = useState(false)

//   const toggleSidebar = () => {
//     setCollapsed(!collapsed)
//   }

//   return (
//     <div className="flex h-screen bg-gray-100 relative">

//       {/* Sidebar */}
//       <Sidebar2 collapsed={collapsed} />

//       {/* Toggle Button */}
//       <button
//         onClick={toggleSidebar}
//         className={`
//           absolute
//           top-6
//           z-50
//           bg-blue-500
//           hover:bg-blue-600
//           text-white
//           rounded-full
//           w-6
//           h-6
//           flex
//           items-center
//           justify-center
//           shadow-md
//           transition-all
//           duration-300

//           ${collapsed ? "left-20" : "left-64"}
//         `}
//       >
//         {collapsed ? <ChevronRight size={14}/> : <ChevronLeft size={14}/>}
//       </button>

//       {/* Main Content */}
//       <div className="flex flex-col flex-1">

//         <Header2 />

//         <main className="p-6 overflow-y-auto flex-1">
//           {children}
//         </main>

//       </div>

//     </div>
//   )
// }



// ------shrink on allscreen
import { useState, useEffect } from "react"
import Sidebar from "./Sidebar"
import Header from "./Header"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Outlet } from "react-router-dom"


// export default function Layout2({ children }) {
export default function Layout() {

  const [collapsed, setCollapsed] = useState(window.innerWidth < 1024)

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setCollapsed(true)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    // <div className="flex h-screen bg-gray-100 relative">
    <div className="flex h-screen bg-gray-100 relative overflow-hidden">

      {/* Sidebar */}
      <Sidebar collapsed={collapsed} />
      {/* <Sidebar collapsed={collapsed} /> */}

      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`
          absolute
          top-6
          z-50
          bg-blue-500
          hover:bg-blue-600
          text-white
          rounded-full
          w-6
          h-6
          flex
          items-center
          justify-center
          shadow-md
          transition-all
          duration-300
          ${collapsed ? "left-12 sm:left-14 md:left-16" : "left-52 sm:left-56 lg:left-56 xl:left-64"}
        `}
      >
         {/* ${collapsed ? "left-16 sm:left-20" : "left-64 lg:left-56"} */}
        {collapsed ? <ChevronRight size={14}/> : <ChevronLeft size={14}/>}
      </button>

      {/* Main Content */}
      {/* <div className="flex flex-col flex-1"> */}
        {/* <div className="flex flex-col flex-1 ml-12 sm:ml-14 md:ml-16 lg:ml-0"> */}
        {/* <div className="flex flex-col flex-1 min-w-0"> */}
        <div className="flex flex-col flex-1 min-w-0 ml-14 md:ml-16 lg:ml-0">

        <Header />

        {/* <main className="p-4 lg:p-6 overflow-y-auto flex-1"> */}
        <main className="p-4 lg:p-6 flex-1 overflow-y-auto">
          {/* {children} */}
          <Outlet />
        </main>

      </div>

    </div>
  )
}


