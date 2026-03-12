import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Search, Download, Filter } from "lucide-react";

// Reusable table wrapper component
import DataTable from "@/components/common/DataTable";
import { ProductCatalogTable } from "@/components/ProductCatalogTable";

export default function ProductCatalog() {
  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
            Product Catalog
          </h1>

          <p className="text-gray-500 text-xs sm:text-sm">
            View your product catalog
          </p>
        </div>

        <Button
          variant="outline"
          className="flex items-center gap-2 w-full sm:w-auto"
        >
          <Download size={16} />
          Export
        </Button>
      </div>

      {/* Main Card */}

      <div className="bg-white border rounded-xl p-4 sm:p-5 md:p-6 space-y-4 shadow-sm">
        {/* Filters */}

        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          {/* Search */}

          <div className="relative w-full sm:flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />

            <Input placeholder="Search products..." className="pl-9 text-sm" />
          </div>

          {/* Category Filter */}

          <Button
            variant="outline"
            className="flex items-center gap-2 w-full sm:w-auto"
          >
            <Filter size={16} />
            All Categories
          </Button>
        </div>

        {/* Table - ProductCatalogTable component*/}
        <ProductCatalogTable />
      </div>
    </div>
  );
}
