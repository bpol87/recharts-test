import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";

function BeetCharts() {
  const beetData = useSelector((store) => store.beets);
  console.log("beetData is:", beetData);

  beetData.map((beet) => {
    console.log("beet temperature is:", typeof beet.temperature);
  });

  // Update the color assignment based on specified ranges
  const getColor = (temperature) => {
    const temp = parseFloat(temperature); // Convert to number
    console.log("temp is:", typeof temp);
    if (temp < 40) {
      return "#ADD8E6"; // Light Blue for temperatures below 40
    } else if (temp >= 40 && temp < 43) {
      return "#FFFF00"; // Yellow for temperatures 40 to 42.99
    } else {
      return "#FF0000"; // Red for temperatures 43 and above
    }
  };

  const CustomDot = ({ cx, cy, fill, value }) => (
    <circle cx={cx} cy={cy} r={5} fill={fill} />
  );

  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart>
          <CartesianGrid />

          {/* X-axis for longitude with specific range */}
          <XAxis
            type="number"
            dataKey="longitude"
            name="Longitude"
            domain={[-118.02, -117.1]} // Set longitude range
          />

          {/* Y-axis for latitude with specific range */}
          <YAxis
            type="number"
            dataKey="latitude"
            name="Latitude"
            domain={[44.2, 44.4]} // Set latitude range
          />

          <Tooltip
            cursor={{ strokeDasharray: "3 3" }}
            formatter={(value, name) => [value, name]}
          />

          {/* Single Scatter component for all data points */}
          <Scatter
            name="Temperature Data"
            data={beetData}
            shape={CustomDot} // Use the custom dot shape
            isAnimationActive={false}
          >
            {beetData.map((entry) => (
              <CustomDot
                key={entry.id}
                cx={entry.longitude} // X position
                cy={entry.latitude} // Y position
                fill="#80ABF5" // Color based on temperature
                value={entry.temperature} // Additional data
              />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>

      <table>
        <thead>
          <tr>
            <th>Ticket Number</th>
            <th>Longitude</th>
            <th>Latitude</th>
          </tr>
        </thead>
        <tbody>
          {beetData.map((beet) => (
            <tr key={beet.id}>
              <td>{beet.ticket_number}</td>
              <td>{beet.longitude}</td>
              <td>{beet.latitude}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BeetCharts;
