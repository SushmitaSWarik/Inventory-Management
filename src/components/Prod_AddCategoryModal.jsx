import AppModal from "@/components/common/AppModal";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { Plus } from "lucide-react";

export default function Prod_AddCategoryModal() {
  const categories = [
    { name: "APL (14g) 2.0", hsn: "730661" },
    { name: "SHEETS", hsn: "72107000" },
    { name: "MS PIPE 100*50", hsn: "73061910" },
  ];

  return (
    <AppModal
      title="Category Management"
      description="Add, edit or remove product categories."
      width="sm:max-w-[750px]"
      trigger={
        <Button
          variant="outline"
          className="flex items-center gap-2 w-full sm:w-auto text-xs sm:text-sm"
        >
          <Plus size={16} />
          Add Category
        </Button>
      }
    >
      {/* CONTENT */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {/* LEFT SIDE */}

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-blue-600">NEW CATEGORY</h3>

          <div className="space-y-1">
            <Label>Category Name</Label>
            <Input placeholder="e.g. Metal Sheet, Bolt" />
          </div>

          <div className="space-y-1">
            <Label>HSN Number</Label>
            <Input placeholder="e.g. 7208" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Fields & Units</Label>

              <Button size="sm" variant="outline" className="text-xs">
                + Add
              </Button>
            </div>

            <div className="border rounded-md p-6 text-center text-xs text-gray-400">
              NO CUSTOM FIELDS
            </div>
          </div>

          <Button className="w-full">Add Category</Button>
        </div>

        {/* RIGHT SIDE */}

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-blue-600">
            EXISTING CATEGORIES
          </h3>

          <div className="space-y-3">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="border rounded-lg p-3 flex justify-between items-center"
              >
                <div>
                  <p className="text-sm font-medium">{cat.name}</p>

                  <p className="text-xs text-gray-500">HSN: {cat.hsn}</p>
                </div>

                <span className="text-xs text-gray-400">3 fields defined</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppModal>
  );
}
