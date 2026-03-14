import { useState } from "react";

import AppModal from "./common/AppModal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { User, Mail, Lock, Plus } from "lucide-react";
import { DialogClose } from "@/components/ui/dialog";

export default function AddAdminModal({ onAddAdmin }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email) return;

    onAddAdmin?.(form);

    setForm({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <AppModal
      title="Add New Admin"
      description="Create a new admin user. They will be able to log in with these credentials."
      trigger={
        <button className="flex items-center justify-center sm:w-auto gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-xs sm:text-sm hover:bg-blue-700">
          <Plus size={16} />
          Add Admin
        </button>
      }
    >
      <div className="space-y-4">
        {/* Full Name */}

        <div className="space-y-1">
          <Label>Full Name</Label>

          <div className="relative">
            <User
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <Input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="pl-9"
            />
          </div>
        </div>

        {/* Email */}

        <div className="space-y-1">
          <Label>Email Address</Label>

          <div className="relative">
            <Mail
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <Input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="pl-9"
            />
          </div>
        </div>

        {/* Password */}

        <div className="space-y-1">
          <Label>Password</Label>

          <div className="relative">
            <Lock
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <Input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="pl-9"
            />
          </div>
        </div>

        {/* Button */}

        <div className="flex justify-end pt-2">
          <DialogClose asChild>
            <Button onClick={handleSubmit}>Create Admin</Button>
          </DialogClose>
        </div>
      </div>
    </AppModal>
  );
}
