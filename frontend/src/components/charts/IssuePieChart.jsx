import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from "recharts";

function IssuePieChart({
  bugs,
  security,
  performance,
  bestPractices
}) {

  const data = [
    {
      name: "Bugs",
      value: bugs.length
    },
    {
      name: "Security",
      value: security.length
    },
    {
      name: "Performance",
      value: performance.length
    },
    {
      name: "Best Practices",
      value: bestPractices.length
    }
  ];

  const COLORS = [
    "#ef4444",
    "#3b82f6",
    "#f59e0b",
    "#10b981"
  ];

  return (

    <PieChart width={450} height={300}>

      <Pie
        data={data}
        dataKey="value"
        outerRadius={100}
        label
      >

        {data.map((entry, index) => (

          <Cell
            key={index}
            fill={
              COLORS[index]
            }
          />

        ))}

      </Pie>

      <Tooltip />

      <Legend />

    </PieChart>

  );

}

export default IssuePieChart;