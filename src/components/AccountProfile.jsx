import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

export default function AccountProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-sm sm:text-base font-semibold">
            Account Profile
          </h2>

          <p className="text-xs text-gray-500">
            Update your personal information and password
          </p>
        </div>

        {!isEditing && (
          <Button
            variant="outline"
            className="text-xs sm:text-sm"
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </Button>
        )}

        {isEditing && (
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="text-xs sm:text-sm"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </Button>

            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm"
              onClick={handleSave}
            >
              Save Changes
            </Button>
          </div>
        )}
      </div>

      {/* Form */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-xs text-gray-500">Full Name</label>

          <div className="relative">
            <User
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <Input
              defaultValue="Rakshit"
              disabled={!isEditing}
              className="pl-8 text-xs sm:text-sm"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs text-gray-500">Account Role</label>

          <Input
            defaultValue="Super Admin"
            disabled
            className="text-xs sm:text-sm"
          />
        </div>
      </div>

      {/* Password Section */}

      {isEditing && (
        <div className="border-t pt-6 space-y-4">
          <p className="text-sm font-medium">Change Password</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs text-gray-500">New Password</label>

              <Input
                type="password"
                placeholder="Leave blank to keep current"
                className="text-xs sm:text-sm"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-gray-500">Confirm Password</label>

              <Input
                type="password"
                placeholder="Confirm password"
                className="text-xs sm:text-sm"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
