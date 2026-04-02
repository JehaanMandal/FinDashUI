import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";

export default function Charts() {
  const tx = useSelector((state) => state.finance.transactions);

  const lineData = tx.map((t) => ({
    date: t.date,
    amount: t.amount,
  }));

  const map = {};
  tx.forEach((t) => {
    if (t.type === "expense") {
      map[t.category] = (map[t.category] || 0) + t.amount;
    }
  });

  const pieData = Object.keys(map).map((k) => ({
    name: k,
    value: map[k],
  }));

  const COLORS = ["#6366f1", "#22d3ee", "#a78bfa", "#34d399", "#f472b6"];

  const glassClass = `
    relative p-5 rounded-2xl
    backdrop-blur-xl
    border border-white/20
    shadow-[0_8px_32px_rgba(99,102,241,0.25)]
    overflow-hidden
    before:absolute before:inset-0
    before:rounded-2xl
    before:bg-gradient-to-r before:from-indigo-500/20 before:via-cyan-400/10 before:to-emerald-400/20
    before:opacity-30
    before:blur-xl
    before:-z-10
  `;

  return (
    <div className="grid md:grid-cols-2 gap-10 px-4">


      <div className={glassClass}>
        <h3 className="
          text-lg md:text-xl font-semibold mb-5 tracking-wide
          bg-linear-to-r from-indigo-400 via-cyan-400 to-emerald-400
          bg-clip-text text-transparent
        ">
          Financial Trend
        </h3>

        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={lineData}>
            <XAxis
              dataKey="date"
              stroke="#94a3b8"
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                background: "rgba(30,41,59,0.4)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                color: "#e2e8f0",
              }}
            />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="url(#lineGradient)"
              strokeWidth={3}
              dot={false}
              style={{ filter: "drop-shadow(0px 0px 10px rgba(99,102,241,0.4))" }}
            />
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="50%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </div>


      <div className={glassClass}>
        <h3 className="
          text-lg md:text-xl font-semibold mb-5 tracking-wide
          bg-linear-t-to-r from-pink-400 via-purple-400 to-cyan-400
          bg-clip-text text-transparent
        ">
          Expense Distribution
        </h3>

        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              innerRadius={65}
              outerRadius={95}
              paddingAngle={3}
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                  style={{ filter: "drop-shadow(0px 0px 8px rgba(167,139,250,0.35))" }}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: "rgba(30,41,59,0.4)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                color: "#e2e8f0",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}