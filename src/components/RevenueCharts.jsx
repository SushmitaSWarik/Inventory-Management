// "use client";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", revenue: 0 },
  { month: "Feb", revenue: 0 },
  { month: "Mar", revenue: 532 },
];

// Tooltip
function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 rounded-md shadow-sm px-3 py-2">
        <p className="text-xs text-gray-700">{label}</p>
        <p className="text-xs text-blue-600">
          Revenue : ₹{payload[0].value.toFixed(2)}
        </p>
      </div>
    );
  }
  return null;
}

export default function RevenueCharts() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <LineChart
        data={data}
        margin={{ top: 10, right: 30, left: -20, bottom: 0 }}
      >
        {/* Softer grid */}
        <CartesianGrid stroke="#f1f5f9" strokeDasharray="3 3" />

        {/* X Axis */}
        <XAxis
          dataKey="month"
          tick={{ fontSize: 12, fill: "#94a3b8" }}
          axisLine={false}
          tickLine={false}
        />

        {/* Y Axis */}
        <YAxis
          tick={{ fontSize: 12, fill: "#94a3b8" }}
          axisLine={false}
          tickLine={false}
          tickFormatter={v => `₹${v}`}
        />

        {/* Tooltip + subtle cursor line */}
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ stroke: "#e2e8f0", strokeWidth: 1 }}
        />

        {/* Line */}
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#3b82f6"
          strokeWidth={2}
          dot={false} //removes all dots
          activeDot={{
            r: 4,
            fill: "#3b82f6",
            stroke: "#fff",
            strokeWidth: 2,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}




