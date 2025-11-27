import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts";

const LineRechart = () => {
  const data = [
    {
      name: "Page A",
      uv: 400,
      pv: 2400,
      amt: 2400,
      clicks: 920,
      sales: 120,
    },
    {
      name: "Page B",
      uv: 300,
      pv: 4567,
      amt: 2400,
      clicks: 980,
      sales: 90,
    },
    {
      name: "Page C",
      uv: 320,
      pv: 1398,
      amt: 2400,
      clicks: 1005,
      sales: 107,
    },
    {
      name: "Page D",
      uv: 200,
      pv: 9800,
      amt: 2400,
      clicks: 7600,
      sales: 800,
    },
    {
      name: "Page E",
      uv: 278,
      pv: 3908,
      amt: 2400,
      clicks: 889,
      sales: 780,
    },
    {
      name: "Page F",
      uv: 189,
      pv: 4800,
      amt: 2400,
      clicks: 6005,
      sales: 600,
    },
  ];

  return (
    <div className="my-10 py-6">
      <LineChart
        style={{ width: "100%", aspectRatio: 1.618, maxWidth: 600 }}
        responsive
        data={data}
      >
        <CartesianGrid />
        <Line dataKey="uv" stroke="#FF0000" strokeWidth={3} />
        <Line dataKey="pv" stroke="#008000" strokeWidth={3} />
        <Line dataKey="amt" stroke="#0000FF" strokeWidth={3} />
        <Line dataKey="clicks" stroke="#FFFF00" strokeWidth={3} />
        <Line dataKey="sales" stroke="#A020F0" strokeWidth={3} />
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
      </LineChart>
    </div>
  );
};

export default LineRechart;
