import { useState } from "react";

import { User, Building2 } from "lucide-react";

import AccountProfile from "@/components/AccountProfile";
import CompanyDetails from "@/components/CompanyDetails";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="space-y-6">
      {/* Page Title */}

      <div>
        <h1 className="text-xl sm:text-2xl font-bold">Settings</h1>

        <p className="text-xs sm:text-sm text-gray-500">
          Manage your personal profile and business configurations
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6 items-start">
        {/* Sidebar */}

        <div className="bg-white border rounded-xl p-3 space-y-2 self-start">
          <button
            onClick={() => setActiveTab("profile")}
            className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm
            ${
              activeTab === "profile"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            <User size={16} />
            Account Profile
          </button>

          <button
            onClick={() => setActiveTab("company")}
            className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm
            ${
              activeTab === "company"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            <Building2 size={16} />
            Company Details
          </button>
        </div>

        {/* Right Content */}

        <div className="bg-white border rounded-xl shadow-sm p-4 sm:p-6">
          {activeTab === "profile" && <AccountProfile />}

          {activeTab === "company" && <CompanyDetails />}
        </div>
      </div>
    </div>
  );
}

// perfect - full code at one place
// import { useState } from "react";

// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// import { User, Building2 } from "lucide-react";

// export default function Settings() {
//   const [activeTab, setActiveTab] = useState("profile");
//   const [isEditing, setIsEditing] = useState(false);

//   const handleSave = () => {
//     setIsEditing(false);
//   };

//   return (
//     <div className="space-y-6">
//       {/* Page Title */}

//       <div>
//         <h1 className="text-xl sm:text-2xl font-bold">Settings</h1>

//         <p className="text-xs sm:text-sm text-gray-500">
//           Manage your personal profile and business configurations
//         </p>
//       </div>

//       {/* Layout */}

//       <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6 items-start">
//         {/* LEFT SIDEBAR */}

//         <div className="bg-white border rounded-xl p-3 space-y-2 self-start">
//           <button
//             onClick={() => setActiveTab("profile")}
//             className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm
//               ${
//                 activeTab === "profile"
//                   ? "bg-blue-600 text-white"
//                   : "hover:bg-gray-100 text-gray-700"
//               }`}
//           >
//             <User size={16} />
//             Account Profile
//           </button>

//           <button
//             onClick={() => setActiveTab("company")}
//             className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm
//               ${
//                 activeTab === "company"
//                   ? "bg-blue-600 text-white"
//                   : "hover:bg-gray-100 text-gray-700"
//               }`}
//           >
//             <Building2 size={16} />
//             Company Details
//           </button>
//         </div>

//         {/* RIGHT CONTENT */}

//         <div className="bg-white border rounded-xl shadow-sm p-4 sm:p-6 space-y-6">
//           {/* ACCOUNT PROFILE */}

//           {activeTab === "profile" && (
//             <div className="space-y-6">
//               {/* Header */}

//               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
//                 <div>
//                   <h2 className="text-sm sm:text-base font-semibold">
//                     Account Profile
//                   </h2>

//                   <p className="text-xs text-gray-500">
//                     Update your personal information and password
//                   </p>
//                 </div>

//                 {!isEditing && (
//                   <Button
//                     variant="outline"
//                     className="text-xs sm:text-sm"
//                     onClick={() => setIsEditing(true)}
//                   >
//                     Edit Profile
//                   </Button>
//                 )}

//                 {isEditing && (
//                   <div className="flex gap-2">
//                     <Button
//                       variant="outline"
//                       className="text-xs sm:text-sm"
//                       onClick={() => setIsEditing(false)}
//                     >
//                       Cancel
//                     </Button>

//                     <Button className="text-xs sm:text-sm" onClick={handleSave}>
//                       Save Changes
//                     </Button>
//                   </div>
//                 )}
//               </div>

//               {/* Form */}

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {/* Full Name */}

//                 <div className="space-y-1">
//                   <label className="text-xs text-gray-500">Full Name</label>

//                   <div className="relative">
//                     <User
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//                     />

//                     <Input
//                       defaultValue="Rakshit"
//                       disabled={!isEditing}
//                       className="pl-8 text-xs sm:text-sm"
//                     />
//                   </div>
//                 </div>

//                 {/* Role */}

//                 <div className="space-y-1">
//                   <label className="text-xs text-gray-500">Account Role</label>

//                   <Input
//                     defaultValue="Super Admin"
//                     className="pl-8 text-xs sm:text-sm"
//                     disabled
//                   />
//                 </div>
//               </div>

//               {/* PASSWORD SECTION */}

//               {isEditing && (
//                 <div className="border-t pt-6 space-y-4">
//                   <p className="text-sm font-medium">Change Password</p>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div className="space-y-1">
//                       <label className="text-xs text-gray-500">
//                         New Password
//                       </label>

//                       <Input
//                         type="password"
//                         placeholder="Leave blank to keep current"
//                         className="text-xs sm:text-sm"
//                       />
//                     </div>

//                     <div className="space-y-1">
//                       <label className="text-xs text-gray-500">
//                         Confirm Password
//                       </label>

//                       <Input
//                         type="password"
//                         placeholder="Confirm password"
//                         className="text-xs sm:text-sm"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* COMPANY DETAILS */}

//           {activeTab === "company" && (
//             <div className="space-y-6">
//               <h2 className="text-sm sm:text-base font-semibold">
//                 Company Details
//               </h2>

//               <p className="text-xs text-gray-500">
//                 Company information will appear here.
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
