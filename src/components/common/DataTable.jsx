import { Table } from "@/components/ui/table";

export default function DataTable({ children, width }) {
  return (
    <div className="overflow-x-auto">
      <Table className={width}>{children}</Table>
    </div>
  );
}
