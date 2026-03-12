import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DeliveryCredentials() {
  return (
    <>
      <div className="space-y-4">
        <h2 className="text-sm font-semibold border-b pb-2">
          Delivery Credentials
          <span className="text-gray-400 text-xs ml-2">(Optional)</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* <Label>Delivery Note</Label> */}
          <Input placeholder="Delivery Note" />

          {/* <Label>Date</Label> */}
          <Input type="date" />

          {/* <Label>Dispatched through</Label> */}
          <Input placeholder="Dispatched through" />

          {/* <Label>Destination</Label> */}
          <Input placeholder="Destination" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* <Label>Motor Vehicle No</Label> */}
          <Input placeholder="Motor Vehicle No." />
        </div>
      </div>

      {/* Terms */}
      <div>
        <Label>Terms of Delivery</Label>

        <Input className="text-xs sm:text-sm" />
      </div>
    </>
  );
}
