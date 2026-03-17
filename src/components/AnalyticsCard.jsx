import { Card, CardContent } from "@/components/ui/card";

export default function AnalyticsCard({
  title,
  value,
  icon: Icon,
  growth,
}) {
  return (
    <Card className="border rounded-xl shadow-sm">
      <CardContent className="p-4 flex flex-col gap-3">
        {/* Top Section */}
        <div className="flex items-center justify-between">
          {/* Icon */}
          <div className="p-2 rounded-lg bg-gray-100">
            {Icon && <Icon className="w-4 h-4 bg-blue-100 text-blue-600" />}
          </div>

          {/* Growth Badge */}
          {growth && (
            <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded-md">
              {growth}
            </span>
          )}
        </div>

        {/* Value */}
        <h2 className="text-lg sm:text-xl font-bold">{value}</h2>

        {/* Title */}
        <p className="text-xs sm:text-sm text-gray-500">{title}</p>
      </CardContent>
    </Card>
  );
}
