import { useSelector } from "react-redux";

export default function Insights() {
  const tx = useSelector(state => state.finance.transactions);

  let total = 0;
  const categoryMap = {};

  tx.forEach(t => {
    if (t.type === "expense") {
      total += t.amount;
      categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const categories = Object.keys(categoryMap);
  const topCategory = categories.length
    ? categories.reduce((a, b) => (categoryMap[a] > categoryMap[b] ? a : b))
    : "No Data";

  const topValue = categoryMap[topCategory] || 0;
  const topPercent = total ? ((topValue / total) * 100).toFixed(1) : 0;

  return (
    <div className="
      relative p-6 rounded-2xl
      backdrop-blur-xl
      bg-white/5
      border border-white/20
      shadow-[0_8px_32px_rgba(99,102,241,0.25)]
      overflow-hidden
      before:absolute before:inset-0
      before:rounded-2xl
      before:bg-linear-to-r before:from-indigo-500/20 before:via-cyan-400/10 before:to-emerald-400/20
      before:opacity-40
      before:blur-xl
      before:-z-10
    ">

      <div className="relative space-y-6">

 
        <h3 className="
          text-lg font-semibold tracking-wide
          bg-linear-to-r from-indigo-400 via-cyan-400 to-emerald-400
          bg-clip-text text-transparent
        ">
          Financial Insights
        </h3>

      
        <div>
          <p className="text-xs uppercase tracking-wider text-gray-400">
            Highest Expense Category
          </p>
          <p className="text-2xl font-semibold text-gray-100 mt-1">
            {topCategory}
          </p>
          <p className="text-sm text-gray-400 mt-1">
            This category represents{" "}
            <span className="text-cyan-400 font-medium">{topPercent}%</span>{" "}
            of your total spending, highlighting a key area to monitor.
          </p>
        </div>

        <div className="h-px bg-white/10" />

     
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">
            Total Expenditure
          </span>
          <span className="text-lg font-semibold text-gray-100">
            ₹ {total.toLocaleString()}
          </span>
        </div>

    
        <div className="
          p-4 rounded-xl
          backdrop-blur-lg
          bg-white/5
          border border-white/10
          text-sm text-gray-300 leading-relaxed
        ">
          Your spending is primarily concentrated in{" "}
          <span className="text-indigo-400 font-medium">{topCategory}</span>. 
          Maintaining awareness of this category can help you manage your budget 
          more effectively. Consider reviewing these expenses regularly or setting 
          a soft limit to optimize savings and ensure a healthier financial balance.
        </div>

      </div>
    </div>
  );
}