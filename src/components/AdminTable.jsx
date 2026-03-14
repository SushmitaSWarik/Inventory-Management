import {
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import DataTable from "@/components/common/DataTable";

import { Crown, Mail } from "lucide-react";

export default function AdminTable({ admins = [] }) {
  return (
    <DataTable width="min-w-[700px]">
      <TableHeader className="bg-gray-50">
        <TableRow>
          <TableHead className="px-4 py-3 text-xs sm:text-sm text-gray-500">
            Admin
          </TableHead>

          <TableHead className="px-4 py-3 text-xs sm:text-sm text-gray-500">
            Email
          </TableHead>

          <TableHead className="px-4 py-3 text-xs sm:text-sm text-gray-500">
            Role
          </TableHead>

          <TableHead className="px-4 py-3 text-xs sm:text-sm text-gray-500">
            Joined
          </TableHead>

          <TableHead className="px-4 py-3 text-right text-xs sm:text-sm text-gray-500">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {!admins.length && (
          <TableRow>
            <TableCell
              colSpan={5}
              className="text-center py-8 text-xs sm:text-sm text-gray-500"
            >
              No admins found
            </TableCell>
          </TableRow>
        )}

        {admins.map(admin => (
          <TableRow key={admin.id} className="border-t">
            {/* Admin */}

            <TableCell className="px-4 py-3 flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-semibold text-blue-600">
                {admin.name?.[0]}
              </div>

              <span className="text-xs sm:text-sm font-medium">
                {admin.name}
              </span>
            </TableCell>

            {/* Email */}

            <TableCell className="px-4 py-3 text-xs sm:text-sm text-gray-600">
              <span className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <Mail size={14} className="text-gray-500" />
                {admin.email}
              </span>
            </TableCell>

            {/* Role */}

            <TableCell className="px-4 py-3">
              <span className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <Crown size={14} className="text-yellow-500" />

                {admin.role}
              </span>
            </TableCell>

            {/* Joined */}

            <TableCell className="px-4 py-3 text-xs sm:text-sm text-gray-600">
              {admin.joined}
            </TableCell>

            {/* Actions */}

            <TableCell className="px-4 py-3 text-right text-xs sm:text-sm text-gray-500">
              —
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </DataTable>
  );
}
