import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"

import AppModal from "@/components/common/AppModal"

export default function AddMaterialModal() {

  return (

    <AppModal
      title="Add New Raw Materials"
      width="sm:max-w-[650px]"

      trigger={
        <Button className="flex items-center gap-2 w-full sm:w-auto text-xs sm:text-sm">
          <Plus size={16} />
          Add Material
        </Button>
      }
    >

      {/* FORM */}

      <div className="space-y-4 pt-2">

        <div className="space-y-1">
          <Label>Material Category</Label>
          <Input placeholder="e.g. Metals, Plastics, Chemicals" />
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <div className="space-y-1">
            <Label>Material Name</Label>
            <Input placeholder="e.g. MS Rod 10mm" />
          </div>

          <div className="space-y-1">
            <Label>Unit</Label>

            <select className="w-full border rounded-md p-2 text-sm">
              <option>Pieces (pcs)</option>
              <option>Kilograms (kg)</option>
              <option>Litres (ltr)</option>
            </select>

          </div>

        </div>


        <div className="space-y-1">
          <Label>Initial Stock Quantity</Label>
          <Input type="number" placeholder="0" />
        </div>


        <div className="flex items-center justify-between">
          <Label>Other Specifications (Optional)</Label>

          <Button variant="outline" size="sm" className="text-xs">
            + Add Specification
          </Button>

        </div>


        <Button className="w-full mt-2">
          Save Materials
        </Button>

      </div>

    </AppModal>
  )
}