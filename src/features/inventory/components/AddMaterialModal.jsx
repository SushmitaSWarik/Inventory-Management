import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

import { Plus, X } from "lucide-react"

export default function AddMaterialModal() {

  return (

    <Dialog>

      {/* Trigger Button */}

      <DialogTrigger asChild>

        <Button className="flex items-center gap-2 w-full sm:w-auto text-xs sm:text-sm">
          <Plus size={16} />
          Add Material
        </Button>

      </DialogTrigger>


      {/* Modal */}

      <DialogContent className="w-[95vw] sm:max-w-[650px] max-h-[90vh] overflow-y-auto">

        <DialogHeader>

          <div className="flex items-center justify-between">

            <DialogTitle className="text-base sm:text-lg">
              Add New Raw Materials
            </DialogTitle>

          </div>

        </DialogHeader>



        {/* FORM */}

        <div className="space-y-4 pt-2">


          {/* Material Category */}

          <div className="space-y-1">

            <Label>Material Category</Label>

            <Input placeholder="e.g. Metals, Plastics, Chemicals" />

          </div>


          {/* Name + Unit */}

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



          {/* Quantity */}

          <div className="space-y-1">

            <Label>Initial Stock Quantity</Label>

            <Input type="number" placeholder="0" />

          </div>



          {/* Specifications */}

          <div className="flex items-center justify-between">

            <Label>Other Specifications (Optional)</Label>

            <Button
              variant="outline"
              size="sm"
              className="text-xs"
            >
              + Add Specification
            </Button>

          </div>



          {/* Save Button */}

          <Button className="w-full mt-2">

            Save Materials

          </Button>


        </div>

      </DialogContent>

    </Dialog>
  )
}