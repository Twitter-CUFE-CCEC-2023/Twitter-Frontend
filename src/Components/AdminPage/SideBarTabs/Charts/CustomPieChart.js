// import React, { useEffect, useState } from "react";
// import classes from "./Chart.module.css";
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

// const renderActiveShape = (props) => {
//   const RADIAN = Math.PI / 180;
//   const {
//     cx,
//     cy,
//     midAngle,
//     innerRadius,
//     outerRadius,
//     startAngle,
//     endAngle,
//     fill,
//     payload,
//     percent,
//     value,
//   } = props;
//   const sin = Math.sin(-RADIAN * midAngle);
//   const cos = Math.cos(-RADIAN * midAngle);
//   const sx = cx + (outerRadius + 10) * cos;
//   const sy = cy + (outerRadius + 10) * sin;
//   const mx = cx + (outerRadius + 30) * cos;
//   const my = cy + (outerRadius + 30) * sin;
//   const ex = mx + (cos >= 0 ? 1 : -1) * 22;
//   const ey = my;
//   const textAnchor = cos >= 0 ? "start" : "end";

//   return (
//     <g>
//       <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
//         {payload.name}
//       </text>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//       />
//       <Sector
//         cx={cx}
//         cy={cy}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         innerRadius={outerRadius + 6}
//         outerRadius={outerRadius + 10}
//         fill={fill}
//       />
//       <path
//         d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
//         stroke={fill}
//         fill="none"
//       />
//       <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 12}
//         y={ey}
//         textAnchor={textAnchor}
//         fill="#333"
//       >{`Value = ${value}`}</text>
//     </g>
//   );
// };

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// const RADIAN = Math.PI / 180;

// const renderCustomizedLabel = ({
//   cx,
//   cy,
//   midAngle,
//   innerRadius,
//   outerRadius,
//   percent,
//   index,
// }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text
//       x={x}
//       y={y}
//       fill="white"
//       textAnchor={x > cx ? "start" : "end"}
//       dominantBaseline="central"
//     >
//       {/* {`${(percent * 100).toFixed(0)}%`} */}
//     </text>
//   );
// };

// const CustomPieChart = (props) => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const onPieEnter = (_, index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div className={classes.chartContainerPie}>
//       <ResponsiveContainer width="100%" height="100%">
//         <PieChart width={200} height={200}>
//           <Pie
//             activeIndex={activeIndex}
//             activeShape={renderActiveShape}
//             data={props.data}
//             cx="50%"
//             cy="50%"
//             labelLine={false}
//             label={renderCustomizedLabel}
//             innerRadius="50%"
//             outerRadius="60%"
//             fill="#8884d8"
//             dataKey="value"
//             onMouseEnter={onPieEnter}
//           >
//             {props.data.map((entry, index) => (
//               <Cell
//                 key={`cell-${index}`}
//                 fill={COLORS[index % COLORS.length]}
//               />
//             ))}
//           </Pie>
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default CustomPieChart;

import React, { useEffect, useState } from "react";
import classes from "./Chart.module.css";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.4;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomPieChart = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const inData = props.data;
    const result = inData.filter((data) => data.value !== 0);
    setData(result);
    // console.log(result);
    // console.log(result.length);
  }, [props.data]);

  return (
    <>
      {data.length === 0 && (
        <p
          style={{
            color: "rgba(0, 0, 0, 0.54)",
            fontSize: "150%",
            position: "absolute",
            top: "200px",
          }}
        >
          No data to show
        </p>
      )}
      {data.length !== 0 && (
        <div className={classes.chartContainerPie}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius="100%"
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
};

export default CustomPieChart;
