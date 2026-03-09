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

export default function AddCategoryModal() {

  const categories = [
    {
      name: "APL (14g) 2.0",
      hsn: "730661"
    },
    {
      name: "SHEETS",
      hsn: "72107000"
    },
    {
      name: "MS PIPE 100*50",
      hsn: "73061910"
    }
  ]

  return (

    <Dialog>

      {/* Button */}

      <DialogTrigger asChild>

        <Button
          variant="outline"
          className="flex items-center gap-2 w-full sm:w-auto text-xs sm:text-sm"
        >
          <Plus size={16} />
          Add Category
        </Button>

      </DialogTrigger>


      {/* Modal */}

      <DialogContent className="w-[95vw] sm:max-w-[750px] max-h-[90vh] overflow-y-auto">

        <DialogHeader>

          <DialogTitle>
            Category Management
          </DialogTitle>

          <DialogDescription>
            Add, edit or remove product categories.
          </DialogDescription>

        </DialogHeader>


        {/* CONTENT */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">


          {/* LEFT SIDE */}

          <div className="space-y-4">

            <h3 className="text-sm font-semibold text-blue-600">
              NEW CATEGORY
            </h3>


            {/* CATEGORY NAME */}

            <div className="space-y-1">
              <Label>Category Name</Label>

              <Input placeholder="e.g. Metal Sheet, Bolt" />
            </div>


            {/* HSN */}

            <div className="space-y-1">

              <Label>HSN Number</Label>

              <Input placeholder="e.g. 7208" />

            </div>


            {/* FIELDS */}

            <div className="space-y-2">

              <div className="flex items-center justify-between">

                <Label>Fields & Units</Label>

                <Button
                  size="sm"
                  variant="outline"
                  className="text-xs"
                >
                  + Add
                </Button>

              </div>


              <div className="border rounded-md p-6 text-center text-xs text-gray-400">

                NO CUSTOM FIELDS

              </div>

            </div>


            <Button className="w-full">

              Add Category

            </Button>

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

                    <p className="text-sm font-medium">

                      {cat.name}

                    </p>

                    <p className="text-xs text-gray-500">

                      HSN: {cat.hsn}

                    </p>

                  </div>

                  <span className="text-xs text-gray-400">

                    3 fields defined

                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>


        {/* <DialogFooter className="pt-6">

          <Button variant="ghost">

            Close

          </Button>

        </DialogFooter> */}

      </DialogContent>

    </Dialog>

  )
}



// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
// DialogTrigger,
//   DialogClose
// } from "@/components/ui/dialog"

// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { Label } from "@/components/ui/label"

// import { Plus, X } from "lucide-react"


// export default function AddCategoryModal() {

//   const categories = [
//     {
//       name: "APL (14g) 2.0",
//       hsn: "730661"
//     },
//     {
//       name: "SHEETS",
//       hsn: "72107000"
//     },
//     {
//       name: "MS PIPE 100*50",
//       hsn: "73061910"
//     }
//   ]

//   return (

//     <Dialog>

//       {/* Trigger Button */}

//       <DialogTrigger asChild>

//         <Button
//           variant="outline"
//           className="flex items-center gap-2 w-full sm:w-auto text-xs sm:text-sm"
//         >
//           <Plus size={16} />
//           Add Category
//         </Button>

//       </DialogTrigger>


//       {/* Modal */}

//       <DialogContent className="w-[95vw] sm:max-w-[750px] max-h-[90vh] p-0 overflow-hidden">


//         {/* HEADER (STICKY) */}

//         <div className="sticky top-0 bg-white z-10 border-b p-4 sm:p-6">

//           <DialogHeader>

//             <DialogTitle className="text-lg sm:text-xl">
//               Category Management
//             </DialogTitle>

//             <DialogDescription className="text-xs sm:text-sm">
//               Add, edit or remove product categories.
//             </DialogDescription>

//           </DialogHeader>

//         </div>



//         {/* SCROLLABLE CONTENT */}

//         <div className="overflow-y-auto max-h-[75vh] p-4 sm:p-6">


//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


//             {/* LEFT SIDE */}

//             <div className="space-y-4">

//               <h3 className="text-sm font-semibold text-blue-600">
//                 NEW CATEGORY
//               </h3>


//               {/* CATEGORY NAME */}

//               <div className="space-y-1">

//                 <Label className="text-xs sm:text-sm">
//                   Category Name
//                 </Label>

//                 <Input
//                   placeholder="e.g. Metal Sheet, Bolt"
//                   className="text-xs sm:text-sm"
//                 />

//               </div>


//               {/* HSN */}

//               <div className="space-y-1">

//                 <Label className="text-xs sm:text-sm">
//                   HSN Number
//                 </Label>

//                 <Input
//                   placeholder="e.g. 7208"
//                   className="text-xs sm:text-sm"
//                 />

//               </div>


//               {/* FIELDS */}

//               <div className="space-y-2">

//                 <div className="flex items-center justify-between">

//                   <Label className="text-xs sm:text-sm">
//                     Fields & Units
//                   </Label>

//                   <Button
//                     size="sm"
//                     variant="outline"
//                     className="text-xs"
//                   >
//                     + Add
//                   </Button>

//                 </div>


//                 <div className="border rounded-md p-6 text-center text-xs text-gray-400">

//                   NO CUSTOM FIELDS

//                 </div>

//               </div>


//               <Button className="w-full text-xs sm:text-sm">

//                 Add Category

//               </Button>

//             </div>



//             {/* RIGHT SIDE */}

//             <div className="space-y-4">

//               <h3 className="text-sm font-semibold text-blue-600">
//                 EXISTING CATEGORIES
//               </h3>


//               <div className="space-y-3">

//                 {categories.map((cat, i) => (

//                   <div
//                     key={i}
//                     className="border rounded-lg p-3 flex justify-between items-center"
//                   >

//                     <div>

//                       <p className="text-xs sm:text-sm font-medium">
//                         {cat.name}
//                       </p>

//                       <p className="text-xs text-gray-500">
//                         HSN: {cat.hsn}
//                       </p>

//                     </div>

//                     <span className="text-xs text-gray-400">
//                       3 fields defined
//                     </span>

//                   </div>

//                 ))}

//               </div>

//             </div>


//           </div>

//         </div>

//       </DialogContent>

//     </Dialog>

//   )
// }