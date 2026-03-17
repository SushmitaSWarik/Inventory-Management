// "use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "APL (14g) 2.00mm",
    value: 450,
  },
];

const COLORS = ["#3b82f6"]; // blue

export default function CategoryChart() {
  return (
    <div className="w-full h-[260px] flex flex-col items-center justify-center">
      {/* Chart */}
          <ResponsiveContainer width="100%" height="80%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={60}
            outerRadius={80}
            startAngle={90}
            endAngle={-270}
            paddingAngle={2}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Bottom Info (Legend + Value) */}
      <div className="w-full flex items-center justify-between px-2 mt-2">
        {/* Left (label) */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          <p className="text-xs text-gray-600 truncate">APL (14g) 2.00mm</p>
        </div>

        {/* Right (value) */}
        <p className="text-xs font-semibold text-gray-800">₹450.00</p>
      </div>
    </div>
  );
}
