// "use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", orders: 0 },
  { month: "Feb", orders: 0 },
  { month: "Mar", orders: 2 },
];

export default function OrderTrendsChart() {
  return (
    <div className="w-full h-[220px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid stroke="#f1f5f9" strokeDasharray="3 3" />

          <XAxis
            dataKey="month"
            tick={{ fontSize: 10, fill: "#94a3b8" }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            width={40}
            tick={{ fontSize: 10, fill: "#94a3b8" }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip />

          <Bar
            dataKey="orders"
            fill="#3b82f6"
            radius={[6, 6, 0, 0]} // rounded top
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
