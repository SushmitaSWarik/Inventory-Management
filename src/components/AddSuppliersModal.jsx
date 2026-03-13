import { useState} from "react";

import AppModal from "./common/AppModal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";
// for closing modal
import { DialogClose } from "@/components/ui/dialog";

export default function AddSuppliersModal({ onAddSupplier }) {
  const [form, setForm] = useState({
    id: "",
    company: "",
    contactPerson: "",
    email: "",
    phone: "",
    location: "",
    products: 0,
  });

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    };

  const handleSubmit = () => {
    if (!form.company) return;

    onAddSupplier(form);

    setForm({
      id: "",
      company: "",
      contactPerson: "",
      email: "",
      phone: "",
      location: "",
      products: 0,
    });
  };

  return (
    <AppModal
      title="Add Supplier"
      trigger={
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-xs sm:text-sm hover:bg-blue-700">
          <Plus size={16} />
          Add Supplier
        </button>
      }
    >
      <div className="space-y-4">
        <div className="space-y-1">
          <Label>Supplier ID</Label>
          <Input name="id" value={form.id} onChange={handleChange} />
        </div>

        <div className="space-y-1">
          <Label>Company Name</Label>
          <Input name="company" value={form.company} onChange={handleChange} />
        </div>

        <div className="space-y-1">
          <Label>Contact Person</Label>
          <Input
            name="contactPerson"
            value={form.contactPerson}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-1">
            <Label>Email</Label>
            <Input name="email" value={form.email} onChange={handleChange} />
          </div>

          <div className="space-y-1">
            <Label>Phone</Label>
            <Input name="phone" value={form.phone} onChange={handleChange} />
          </div>
        </div>

        <div className="space-y-1">
          <Label>Location</Label>
          <Input
            name="location"
            value={form.location}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-end pt-3">
          {/* <Button onClick={handleSubmit}>Save Supplier</Button> */}
          <DialogClose asChild>
            <Button onClick={handleSubmit}>Save Supplier</Button>
          </DialogClose>
        </div>
      </div>
    </AppModal>
  );
}


