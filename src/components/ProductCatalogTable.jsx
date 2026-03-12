import { Search, Download, Filter } from "lucide-react";
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import DataTable from "@/components/common/DataTable";

export const ProductCatalogTable = () => {
  const products = [
    {
      id: 1,
      name: "MS PIPE 100* 50 *2.00 MM",
      category: "MS PIPE 100*50 * 2.00 mm",
      price: "₹72 / kg",
    },
    {
      id: 2,
      name: "JSW SHEET 0.45 Pragathi +",
      category: "SHEETS",
      price: "₹120 / pcs",
    },
    {
      id: 3,
      name: "APL (146) 2.00MM 4*4",
      category: "APL (146) 2.00mm",
      price: "₹90 / pcs",
    },
  ];

  return (
    <DataTable width="min-w-[600px]">
      <TableHeader>
        <TableRow>
          <TableHead className="text-xs sm:text-sm">Sl No.</TableHead>

          <TableHead className="text-xs sm:text-sm">Product Name</TableHead>

          <TableHead className="text-xs sm:text-sm">Category</TableHead>

          <TableHead className="text-xs sm:text-sm">Price</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {products.map(product => (
          <TableRow key={product.id}>
            <TableCell className="text-xs sm:text-sm">{product.id}</TableCell>

            <TableCell className="font-medium text-xs sm:text-sm">
              {product.name}
            </TableCell>

            <TableCell className="text-xs sm:text-sm">
              {product.category}
            </TableCell>

            <TableCell className="text-xs sm:text-sm">
              {product.price}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>

      {/* </Table>

        </div> */}
    </DataTable>
  );
};
