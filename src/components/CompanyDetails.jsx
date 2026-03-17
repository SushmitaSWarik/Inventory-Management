import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Building2, Landmark } from "lucide-react";

export default function CompanyDetails() {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-base font-semibold">Company Configuration</h2>

          <p className="text-xs text-gray-500">
            Business details and payment information
          </p>
        </div>

        {!isEditing ? (
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white"
            size="sm"
            onClick={() => setIsEditing(true)}
          >
            Edit Details
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </Button>

            <Button
              size="sm"
              onClick={handleSave}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Save Changes
            </Button>
          </div>
        )}
      </div>

      {/* Basic Info Card */}

      <div className="bg-gray-50 border rounded-xl p-5 space-y-5">
        {/* Title */}

        <div className="flex items-center gap-2">
          <Building2 size={16} className="text-gray-500" />
          <p className="text-sm font-semibold">Basic Information</p>
        </div>

        {/* Form */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs">Company Name</label>

            <Input
              placeholder="Metal Industry"
              disabled={!isEditing}
              className="h-9 text-sm"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs">GSTIN</label>

            <Input
              placeholder="29AAAAA0000A1Z5"
              disabled={!isEditing}
              className="h-9 text-sm"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs">Business Email</label>

            <Input disabled={!isEditing} className="h-9 text-sm" />
          </div>

          <div className="space-y-1">
            <label className="text-xs">Phone Number</label>

            <Input disabled={!isEditing} className="h-9 text-sm" />
          </div>

          <div className="space-y-1">
            <label className="text-xs">Default HSN Code</label>

            <Input
              placeholder="e.g. 7210"
              disabled={!isEditing}
              className="h-9 text-sm"
            />
          </div>

          <div className="space-y-1 md:col-span-2">
            <label className="text-xs">Address</label>

            <Input disabled={!isEditing} className="h-9 text-sm" />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-gray-500">State</label>

            <Input
              placeholder="Enter state"
              disabled={!isEditing}
              className="h-9 text-sm"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-gray-500">State Code</label>

            <Input
              placeholder="Enter state code"
              disabled={!isEditing}
              className="h-9 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Bank Details Card */}

      <div className="bg-gray-50 border rounded-xl p-5 space-y-5">
        {/* Title */}

        <div className="flex items-center gap-2">
          <Landmark size={16} className="text-gray-500" />
          <p className="text-sm font-semibold">Bank Details</p>
        </div>

        {/* Form */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Bank Name */}

          <div className="space-y-1">
            <label className="text-xs">Bank Name</label>

            <Input
              placeholder="Enter bank name"
              disabled={!isEditing}
              className="h-9 text-sm"
            />
          </div>

          {/* Account Holder */}

          <div className="space-y-1">
            <label className="text-xs">Account Holder Name</label>

            <Input
              placeholder="Enter account holder name"
              disabled={!isEditing}
              className="h-9 text-sm"
            />
          </div>

          {/* Account Number */}

          <div className="space-y-1">
            <label className="text-xs">Account Number</label>

            <Input
              placeholder="Enter account number"
              disabled={!isEditing}
              className="h-9 text-sm"
            />
          </div>

          {/* IFSC */}

          <div className="space-y-1">
            <label className="text-xs">IFSC Code</label>

            <Input
              placeholder="Enter IFSC code"
              disabled={!isEditing}
              className="h-9 text-sm"
            />
          </div>

          {/* Branch */}

          <div className="space-y-1 md:col-span-2">
            <label className="text-xs">Branch Name</label>

            <Input
              placeholder="Enter branch name"
              disabled={!isEditing}
              className="h-9 text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}



