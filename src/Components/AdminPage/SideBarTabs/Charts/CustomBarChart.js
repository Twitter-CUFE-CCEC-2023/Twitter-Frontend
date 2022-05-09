import React from "react";
import classes from "./Chart.module.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { Tooltip, Legend, LabelList, ResponsiveContainer } from "recharts";

const renderCustomizedLabel = (props) => {
  const { x, y, width, height, value } = props;
  const radius = 10;

  return (
    <g>
      <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
      <text
        x={x + width / 2}
        y={y - radius}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value.split(" ")[1]}
      </text>
    </g>
  );
};

export default function CustomBarChart(props) {
  return (
    <div className={classes.chartContainer}>
      <ResponsiveContainer width="70%" height="90%">
        <BarChart
          width={500}
          height={500}
          data={props.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="AveragePerDay" fill="#8884d8" minPointSize={5}>
            <LabelList dataKey="name" content={renderCustomizedLabel} />
          </Bar>
          <Bar dataKey="TotalNumber" fill="#82ca9d" minPointSize={10} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
