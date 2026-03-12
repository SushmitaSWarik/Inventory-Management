import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Search, Filter, Plus } from "lucide-react";
// import AddProductModal from "../components/AddProductModal"; -->import
// import AddCategoryModal from "../components/AddCategoryModal"; --->import
import Prod_AddCategoryModal from "@/components/Prod_AddCategoryModal";
import Prod_AddProductModal from "@/components/Prod_AddProductModal";
// import AddCategoryModal from "@/features/products/components/AddCategoryModal"; delete
// import AddProductModal from "@/features/products/components/AddProductModal"; delete
import { ManageProductTable } from "@/components/ManageProductTable";


export default function ManageProducts() {

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
            Manage Products
          </h1>

          <p className="text-gray-500 text-xs sm:text-sm">
            Manage your product inventory
          </p>
        </div>

        {/* <div className="flex gap-2 w-full sm:w-auto"> */}
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          {/* <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto sm:justify-end"> */}

          {/* <Button
            variant="outline"
            className="flex items-center gap-2 w-full sm:w-auto"
          >
            <Plus size={16} />
            Add Category
          </Button>

          <Button className="flex items-center gap-2 w-full sm:w-auto">
            <Plus size={16} />
            Add Product
          </Button> */}
          {/*-------------------  */}
          {/* <Button
  variant="outline"
  className="flex items-center gap-2 w-full sm:w-auto text-xs sm:text-sm"
>
  <Plus size={16} />
  Add Category
</Button> */}
                  {/* <AddCategoryModal /> */}
                  <Prod_AddCategoryModal/>
          

          {/* <Button
  className="flex items-center gap-2 w-full sm:w-auto text-xs sm:text-sm"
>
  <Plus size={16} />
  Add Product
</Button> */}
                  {/* <AddProductModal /> */}
                  <Prod_AddProductModal/>
        </div>
      </div>

      {/* Main Card */}

      <div className="bg-white border rounded-xl p-4 sm:p-5 md:p-6 space-y-4 shadow-sm">
        {/* Filters */}

        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          {/* Search */}

          <div className="relative w-full sm:flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />

            <Input
              placeholder="Search products..."
              className="pl-9 text-xs sm:text-sm"
            />
          </div>

          {/* Filter */}

          <Button
            variant="outline"
            className="flex items-center gap-2 w-full sm:w-auto"
          >
            <Filter size={16} />
            All Categories
          </Button>
        </div>

        {/* Table  - ManageProductTable component*/}
        <ManageProductTable />
              

      </div>
    </div>
  );
}
