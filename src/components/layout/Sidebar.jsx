import { useState } from "react"
import { NavLink } from "react-router-dom"

import {
  LayoutDashboard,
  Package,
  Boxes,
  ShoppingCart,
  Users,
  BarChart,
  FileText,
  Settings,
  ChevronDown,
  ChevronUp
} from "lucide-react"

export default function Sidebar({ collapsed }) {

  // const [productOpen, setProductOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)

  const menu = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },

    {
      name: "Products",
      icon: Package,
      key: "products",
      submenu: [
        { name: "Product Catalog", icon: Package, path: "/product-catalog" },
        { name: "Manage Products", icon: Boxes, path: "/manage-products" }
      ]
    },

    {
      name: "Inventory",
      icon: Boxes,
      key: "inventory",
      submenu: [
        { name: "Product Inventory", icon: Package, path: "/product-inventory" },
        { name: "Raw Inventory", icon: Boxes, path: "/raw-inventory" }
      ]
      // path: "/inventory"
    },
    { name: "POS", icon: ShoppingCart, path: "/pos" },
    { name: "Users", icon: Users, path: "/users" },
    { name: "Stock Management", icon: Boxes, path: "/stock" },
    { name: "Analytics", icon: BarChart, path: "/analytics" },
    { name: "Reports", icon: FileText, path: "/reports" },
    { name: "Settings", icon: Settings, path: "/settings" }
  ]

  return (
    <div
      className={`
      bg-[#0B1B2B]
      text-white
      flex
      flex-col
      h-screen
      fixed lg:relative
      z-40
      transition-all
      duration-300
      ease-in-out
      ${collapsed ? "w-14 md:w-16" : "w-52 lg:w-56 xl:w-64"}
      `}
    >

      {/* Logo */}

      <div
        className={`flex items-center border-b border-slate-700 p-6
        ${collapsed ? "justify-center" : "gap-3"}
        `}
      >
        <div className="text-yellow-400 font-bold text-lg lg:text-xl">
          VM
        </div>

        {!collapsed && (
          <div className="text-xs lg:text-sm font-semibold">
            Vasanth Metal Industry
          </div>
        )}
      </div>


      {/* Menu */}

      <div className="mt-4 flex flex-col gap-1">

        {menu.map((item, index) => {

          const Icon = item.icon

          /* PRODUCTS DROPDOWN */

          if (item.submenu) {

            return (

              <div key={index}>

                {/* Parent menu */}

                <div
                  // onClick={() => setProductOpen(!productOpen)}
                  onClick={() =>
  setOpenMenu(openMenu === item.key ? null : item.key)
}
                  className={`
                  flex items-center
                  px-3 lg:px-4
                  py-2 lg:py-3
                  cursor-pointer
                  hover:bg-[#13283f]
                  rounded-lg
                  mx-2
                  ${collapsed ? "justify-center" : "justify-between"}
                  `}
                >

                  <div className="flex items-center gap-3">

                    <Icon size={18} />

                    {!collapsed && (
                      <span className="text-xs lg:text-sm">
                        {item.name}
                      </span>
                    )}

                  </div>

                  {!collapsed && (
                    // productOpen
                    //   ? <ChevronUp size={16} />
                    //   : <ChevronDown size={16} />
                    openMenu === item.key
  ? <ChevronUp size={16} />
  : <ChevronDown size={16} />
                  )}

                </div>


                {/* Submenu */}
                {openMenu === item.key && (

                  <div
                    className={`
                    flex flex-col gap-1
                    ${collapsed ? "items-center mt-1" : "ml-8 mt-1"}
                    `}
                  >

                    {item.submenu.map((sub, i) => {

                      const SubIcon = sub.icon

                      return (

                        <NavLink
                          key={i}
                          to={sub.path}
                          className={({ isActive }) =>
                            `
                            flex items-center
                            ${collapsed ? "justify-center p-2" : "gap-2 px-3 py-2"}
                            rounded-lg
                            text-xs lg:text-sm
                            transition
                            ${
                              isActive
                                ? "bg-[#13283f] text-blue-400"
                                : "text-gray-300 hover:bg-[#13283f]"
                            }
                            `
                          }
                        >

                          <SubIcon size={16} />

                          {!collapsed && sub.name}

                        </NavLink>

                      )

                    })}

                  </div>

                )}

              </div>

            )

          }


          /* NORMAL MENU ITEMS */

          return (

            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `
                flex items-center
                px-3 lg:px-4
                py-2 lg:py-3
                rounded-lg
                mx-2
                transition
                ${collapsed ? "justify-center" : "gap-3"}
                ${
                  isActive
                    ? "bg-[#13283f] text-blue-400"
                    : "text-gray-300 hover:bg-[#13283f]"
                }
                `
              }
            >

              <Icon size={18} />

              {!collapsed && (
                <span className="text-xs lg:text-sm">
                  {item.name}
                </span>
              )}

            </NavLink>

          )

        })}

      </div>


      {/* Footer */}

      {!collapsed && (
        <div className="mt-auto p-6 text-xs text-gray-400 border-t border-slate-700">
          © 2020 Vasantha Metal Industry
        </div>
      )}

    </div>
  )
}