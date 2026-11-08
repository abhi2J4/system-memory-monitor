
import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export function ResourceChart({ data }) {

  return (
    <div className="chart-card">

      <h2>Memory Usage History</h2>

      <p>RAM utilization over time</p>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis domain={[0, 100]} />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="usage"
            stroke="#38bdf8"
            strokeWidth={3}
            dot={false}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

