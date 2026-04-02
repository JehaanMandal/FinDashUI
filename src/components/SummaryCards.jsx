import { useSelector } from "react-redux";

export default function SummaryCards() {
  const tx = useSelector(state => state.finance.transactions);

  const income = tx.filter(t => t.type === "income").reduce((a,b)=>a+b.amount,0);
  const expense = tx.filter(t => t.type === "expense").reduce((a,b)=>a+b.amount,0);
  const balance = income - expense;

  const Card = ({ title, value, color }) => (
    <div className="
      relative p-6 rounded-2xl
      bg-[#121417]
      border border-white/5
      overflow-hidden
      transition-all duration-300
      hover:border-white/10
    ">

   
      <div className={`absolute -top-10 -right-10 w-40 h-40 ${color} blur-[80px] opacity-30`} />

      <p className="text-xs text-gray-400 tracking-wide">
        {title}
      </p>

      <h2 className="text-3xl font-semibold mt-2 text-gray-100">
        ₹ {value.toLocaleString()}
      </h2>

    </div>
  );

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <Card title="Balance" value={balance} color="bg-gray-500" />
      <Card title="Income" value={income} color="bg-green-400" />
      <Card title="Expenses" value={expense} color="bg-red-400" />
    </div>
  );
}