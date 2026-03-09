import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

import { Plus } from "lucide-react"

export default function AddProductModal() {

  return (

    <Dialog>

      <DialogTrigger asChild>

        <Button className="flex items-center gap-2 w-full sm:w-auto text-xs sm:text-sm">
          <Plus size={16} />
          Add Product
        </Button>

      </DialogTrigger>


          <DialogContent className="w-[95vw] sm:max-w-[650px]">
          {/* <DialogContent className="w-[95vw] sm:max-w-[650px] max-h-[90vh] overflow-y-auto"> */}

        <DialogHeader>

          <DialogTitle>Add Product</DialogTitle>

          <DialogDescription>
            Add a new product to your inventory.
          </DialogDescription>

        </DialogHeader>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">


          {/* LEFT COLUMN */}

          <div className="space-y-4">

            <h3 className="text-sm font-semibold text-gray-600">
              Basic Details
            </h3>

            <div className="space-y-1">
              <Label>Name</Label>
              <Input placeholder="Product name" />
            </div>

            <div className="space-y-1">
              <Label>Category</Label>
              <select className="w-full border rounded-md p-2 text-sm">
                <option>Select Category</option>
                <option>Pipes</option>
                <option>Sheets</option>
              </select>
            </div>

            <div className="space-y-1">
              <Label>Unit of Measurement</Label>
              <select className="w-full border rounded-md p-2 text-sm">
                <option>Pieces (pcs)</option>
                <option>Kilograms (kg)</option>
              </select>
            </div>


            <div className="grid grid-cols-2 gap-4">

              <div className="space-y-1">
                <Label>Stock</Label>
                <Input type="number" />
              </div>

              <div className="space-y-1">
                <Label>Price (per unit)</Label>
                <Input type="number" />
              </div>

            </div>

          </div>


          {/* RIGHT COLUMN */}

          <div className="space-y-4">

            <h3 className="text-sm font-semibold text-gray-600">
              Category Specific Fields
            </h3>

            <p className="text-xs text-gray-500">
              Please select a category first
            </p>

          </div>

        </div>


        <DialogFooter className="pt-6">

          <Button className="ml-auto">
            Save changes
          </Button>

        </DialogFooter>

      </DialogContent>

    </Dialog>

  )
}




