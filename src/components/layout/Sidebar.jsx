import { useState } from "react";
import { NavLink } from "react-router-dom";
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
  ChevronUp,
  X,
} from "lucide-react";

export default function Sidebar({ collapsed, mobileOpen, setMobileOpen, setCollapsed }) {
  const [openMenu, setOpenMenu] = useState(null);

  const isMobileView = mobileOpen;
  const isCollapsed = isMobileView ? false : collapsed;

  const menu = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },

    {
      name: "Products",
      icon: Package,
      key: "products",
      submenu: [
        { name: "Product Catalog", icon: Package, path: "/product-catalog" },
        { name: "Manage Products", icon: Boxes, path: "/manage-products" },
      ],
    },

    {
      name: "Inventory",
      icon: Boxes,
      key: "inventory",
      submenu: [
        {
          name: "Product Inventory",
          icon: Package,
          path: "/product-inventory",
        },
        { name: "Raw Inventory", icon: Boxes, path: "/raw-inventory" },
      ],
    },

    {
      name: "POS",
      icon: ShoppingCart,
      key: "pos",
      submenu: [
        { name: "Create Order", icon: Package, path: "/create-order" },
        {
          name: "Create Advance Order",
          icon: Boxes,
          path: "/create-advance-order",
        },
        { name: "Orders", icon: Boxes, path: "/orders" },
        { name: "Pending Orders", icon: Boxes, path: "/pending-orders" },
        { name: "Purchase Orders", icon: Boxes, path: "/purchase-orders" },
      ],
    },

    {
      name: "Users",
      icon: Users,
      key: "users",
      submenu: [
        { name: "Suppliers", icon: Package, path: "/suppliers" },
        { name: "Customers", icon: Package, path: "/customers" },
        { name: "Create Admin", icon: Package, path: "/create-admin" },
      ],
    },

    { name: "Stock Management", icon: Boxes, path: "/stock" },
    { name: "Analytics", icon: BarChart, path: "/analytics" },
    // { name: "Reports", icon: FileText, path: "/reports" }, 
    { name: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <>
      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div
        className={`
        bg-[#0B1B2B] text-white flex flex-col h-screen z-40
        transition-all duration-300 ease-in-out

        ${isCollapsed ? "w-16" : "w-56 xl:w-64"}

        fixed top-0 left-0
        transform ${mobileOpen ? "translate-x-0" : "-translate-x-full"}

        lg:translate-x-0 lg:relative
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-700 p-4">
          <div className="flex items-center gap-2">
            <div className="text-yellow-400 font-bold">VM</div>

            {!isCollapsed && (
              <span className="text-sm font-semibold">
                Vasanth Metal Industry
              </span>
            )}
          </div>

          {/* Close (mobile only) */}
          <X
            className="w-5 h-5 cursor-pointer lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        </div>

        {/* Menu */}
        <div className="mt-4 flex flex-col gap-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent hover:scrollbar-thumb-slate-500">
          {menu.map((item, index) => {
            const Icon = item.icon;

            if (item.submenu) {
              return (
                <div key={index}>
                  {/* Parent */}
                  <div
                    // onClick={() =>
                    //   setOpenMenu(openMenu === item.key ? null : item.key)
                    // }

                    //added- when collapsed(icons visibile)and clicked on submenu icon-->sidebar expands
                    onClick={() => {
                      if (isCollapsed) {
                        //  expand sidebar first
                        setCollapsed(false);

                        // then open submenu
                        setOpenMenu(item.key);
                      } else {
                        // normal toggle
                        setOpenMenu(openMenu === item.key ? null : item.key);
                      }
                    }}
                    className={`flex items-center px-3 py-3 mx-2 rounded-lg cursor-pointer hover:bg-[#13283f] ${
                      isCollapsed ? "justify-center" : "justify-between"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={18} />
                      {!isCollapsed && (
                        <span className="text-xs lg:text-sm">{item.name}</span> //added text-xs lg:text-sm
                      )}
                    </div>

                    {!isCollapsed &&
                      (openMenu === item.key ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      ))}
                  </div>

                  {/* Submenu */}
                  {openMenu === item.key && !isCollapsed && (
                    <div className="ml-8 mt-1 flex flex-col gap-1">
                      {item.submenu.map((sub, i) => {
                        const SubIcon = sub.icon;

                        return (
                          <NavLink
                            key={i}
                            to={sub.path}
                            onClick={() => setMobileOpen(false)}
                            className={({ isActive }) =>
                              `flex items-center gap-2 px-3 py-2 rounded-lg text-xs lg:text-sm ${
                                isActive
                                  ? "bg-[#13283f] text-blue-400"
                                  : "text-gray-300 hover:bg-[#13283f]"
                              }`
                            }
                          >
                            <SubIcon size={16} />
                            {sub.name}
                          </NavLink>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={index}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center px-3 py-3 mx-2 rounded-lg ${
                    isCollapsed ? "justify-center" : "gap-3"
                  } ${
                    isActive
                      ? "bg-[#13283f] text-blue-400"
                      : "text-gray-300 hover:bg-[#13283f]"
                  }`
                }
              >
                <Icon size={18} />
                {!isCollapsed && (
                  <span className="text-xs lg:text-sm">{item.name}</span>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* Footer */}
        {!isCollapsed && (
          <div className="mt-auto p-4 text-xs text-gray-400 border-t border-slate-700">
            © 2020 Vasantha Metal Industry
          </div>
        )}
      </div>
    </>
  );
}
