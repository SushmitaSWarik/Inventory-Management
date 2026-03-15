import { useState } from "react";

import StockTabs from "@/components/StockTabs";
import StockList from "@/components/StockList";
import StockUpdatePanel from "@/components/StockUpdatePanel";

export default function StockManagement() {
  const [activeTab, setActiveTab] = useState("materials");
  const [selectedItem, setSelectedItem] = useState(null);

  const materials = [
    {
      id: 1,
      name: "BLK RHS 100 * 50 * 2.00 MM 6.000",
      stock: "1040 pieces",
    },
    {
      id: 2,
      name: "BLK RHS 60 * 40 * 2.00MM 6.000",
      stock: "101 pieces",
    },
  ];

  const products = [];

  const currentData = activeTab === "materials" ? materials : products;

  return (
    <div className="space-y-6">
      {/* Header */}

      <div>
        <h1 className="text-xl sm:text-2xl font-bold">Stock Management</h1>

        <p className="text-xs sm:text-sm text-gray-500">
          Quickly add new stock to materials or products
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT PANEL */}

        <div className="bg-white border rounded-xl shadow-sm p-4 sm:p-6 space-y-4">
          <StockTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setSelectedItem={setSelectedItem}
          />

          <StockList
            activeTab={activeTab}
            data={currentData}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        </div>

        {/* RIGHT PANEL */}

        <StockUpdatePanel selectedItem={selectedItem} />
      </div>
    </div>
  );
}


// stock management full code
// import { useState } from "react";

// import { Input } from "@/components/ui/input";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// import { Search, ArrowRight } from "lucide-react";

// export default function StockManagement() {

//   const [activeTab, setActiveTab] = useState("materials");
//   const [selectedItem, setSelectedItem] = useState(null);

//   const materials = [
//     {
//       id: 1,
//       name: "BLK RHS 100 * 50 * 2.00 MM 6.000",
//       stock: "1040 pieces",
//     },
//     {
//       id: 2,
//       name: "BLK RHS 60 * 40 * 2.00MM 6.000",
//       stock: "101 pieces",
//     },
//   ];

//   const products = [];

//   const currentData = activeTab === "materials" ? materials : products;

//   return (
//     <div className="space-y-6">
//       {/* Header */}

//       <div>
//         <h1 className="text-xl sm:text-2xl font-bold">Stock Management</h1>

//         <p className="text-xs sm:text-sm text-gray-500">
//           Quickly add new stock to materials or products
//         </p>
//       </div>

//       {/* Layout */}

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* LEFT PANEL */}

//         <div className="bg-white border rounded-xl shadow-sm p-4 sm:p-6 space-y-4">
//           {/* Tabs */}

//           <Tabs
//             value={activeTab}
//             onValueChange={value => {
//               setActiveTab(value);
//               setSelectedItem(null); // reset selection when tab changes
//             }}
//           >
//             <TabsList className="grid grid-cols-2 w-full">
//               <TabsTrigger value="materials">Raw Materials</TabsTrigger>

//               <TabsTrigger value="products">Products</TabsTrigger>
//             </TabsList>
//           </Tabs>

//           {/* Search */}

//           <div className="relative">
//             <Search
//               size={16}
//               className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//             />

//             <Input
//               placeholder={`Search ${activeTab}...`}
//               className="pl-9 text-xs sm:text-sm"
//             />
//           </div>

//           {/* List */}

//           <div className="space-y-3">
//             {currentData.length === 0 && (
//               <div className="text-center text-xs sm:text-sm text-gray-500 py-6">
//                 {activeTab === "materials"
//                   ? "No materials available"
//                   : "No products available"}
//               </div>
//             )}

//             {currentData.map(item => (
//               <div
//                 key={item.id}
//                 onClick={() => setSelectedItem(item)}
//                 className={`border rounded-lg p-3 cursor-pointer flex justify-between items-center hover:bg-gray-50 ${
//                   selectedItem?.id === item.id
//                     ? "border-blue-500 bg-blue-50"
//                     : ""
//                 }`}
//               >
//                 <div>
//                   <p className="text-xs sm:text-sm font-medium">{item.name}</p>

//                   <p className="text-xs text-gray-500">{item.stock}</p>
//                 </div>

//                 <span className="text-xs text-gray-500">{item.stock}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT PANEL */}

//         <div className="bg-white border rounded-xl shadow-sm p-4 sm:p-6 space-y-6">
//           <h2 className="text-sm sm:text-base font-semibold">
//             Update Stock Level
//           </h2>

//           {!selectedItem && (
//             <div className="border border-dashed rounded-lg h-[200px] sm:h-[240px] flex flex-col items-center justify-center text-gray-400 text-center px-4">
//               <ArrowRight size={22} className="mb-2" />

//               <p className="text-xs sm:text-sm">
//                 Please select an item from the list to update its stock
//               </p>
//             </div>
//           )}

//           {selectedItem && (
//             <div className="space-y-6">
//               {/* Item Card */}

//               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border rounded-lg p-4 bg-gray-50">
//                 {/* Left */}

//                 <div>
//                   <p className="text-sm sm:text-base font-semibold">
//                     {selectedItem.name}
//                   </p>

//                   <p className="text-xs text-gray-500">{selectedItem.name}</p>
//                 </div>

//                 {/* Right */}

//                 <div className="text-left sm:text-right">
//                   <p className="text-[10px] text-gray-400 uppercase">
//                     Current Stock
//                   </p>

//                   <p className="text-lg sm:text-xl font-bold text-blue-600">
//                     {selectedItem.stock}
//                   </p>
//                 </div>
//               </div>

//               {/* Add Stock */}

//               <div className="space-y-2">
//                 <label className="text-xs sm:text-sm text-gray-500">
//                   New Stock Quantity (Add-on)
//                 </label>

//                 <div className="flex flex-col sm:flex-row gap-3">
//                   {/* Input */}

//                   <div className="relative flex-1">
//                     <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//                       +
//                     </span>

//                     <Input
//                       type="number"
//                       placeholder="Enter quantity to add..."
//                       className="pl-7 text-xs sm:text-sm h"
//                     />
//                   </div>

//                   {/* Button */}

//                   <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-xs sm:text-sm hover:bg-blue-700 w-full sm:w-auto flex items-center justify-center">
//                     Update Stock
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }