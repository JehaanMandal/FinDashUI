import { useDispatch, useSelector } from "react-redux";
import {
  addTransaction,
  deleteTransaction,
  editTransaction,
  setSearch,
} from "../store/financeSlice";
import { useState } from "react";

export default function Transactions() {
  const dispatch = useDispatch();
  const { transactions, role, search } = useSelector(
    (state) => state.finance
  );

  const [form, setForm] = useState({
    id: null,
    amount: "",
    category: "",
    date: "",
    type: "expense",
  });

  const filtered = transactions.filter((t) =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleSubmit = () => {
    if (form.id) {
      dispatch(editTransaction(form));
    } else {
      dispatch(
        addTransaction({
          ...form,
          id: Date.now(),
          amount: +form.amount,
        })
      );
    }

    setForm({
      id: null,
      amount: "",
      category: "",
      date: "",
      type: "expense",
    });
  };

  const glass = `
    relative
    backdrop-blur-xl
    border border-white/20
    rounded-2xl
    shadow-[0_8px_32px_rgba(99,102,241,0.25)]
    overflow-hidden
    before:absolute before:inset-0
    before:bg-gradient-to-r before:from-indigo-500/20 before:via-cyan-400/10 before:to-emerald-400/20
    before:opacity-40 before:blur-xl before:-z-10
  `;

  const inputStyle = `
    w-full p-3 rounded-xl
    backdrop-blur-lg
    border border-white/10
    text-gray-200 placeholder-gray-400
    focus:outline-none focus:border-cyan-400
    transition-all duration-300
  `;

  const buttonStyle = `
    rounded-xl font-medium
    bg-gradient-to-r from-indigo-500 to-cyan-500
    text-white
    hover:scale-105 transition-all duration-300
  `;

  return (
    <div className={`mt-8 p-6 ${glass}`}>

      <h2 className="
        text-xl md:text-2xl font-semibold mb-5
        bg-linear-to-r from-indigo-400 via-cyan-400 to-emerald-400
        bg-clip-text text-transparent
      ">
        Transactions Overview
      </h2>


      <input
        placeholder="Search by category..."
        className={`${inputStyle} mb-6`}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />

      {role === "admin" && (
        <div className="grid md:grid-cols-4 gap-3 mb-6">

          <input
            placeholder="Amount"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
            className={inputStyle}
          />

          <input
            placeholder="Category"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className={inputStyle}
          />

          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className={inputStyle}
          />

          <button onClick={handleSubmit} className={buttonStyle}>
            {form.id ? "Update" : "Add"}
          </button>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm backdrop-blur-xl border border-white/10 rounded-xl">

          <thead className="text-gray-400 border-b border-white/10">
            <tr>
              <th className="py-3 px-2">Date</th>
              <th className="px-2">Category</th>
              <th className="px-2">Amount</th>
              <th className="px-2">Type</th>
              {role === "admin" && <th className="px-2">Action</th>}
            </tr>
          </thead>

          <tbody>
            {filtered.map((t) => (
              <tr
                key={t.id}
                className="
                  border-b border-white/5
                  hover:bg-white/5
                  transition-all
                "
              >
                <td className="py-3 px-2 text-gray-300">{t.date}</td>
                <td className="px-2 text-gray-200">{t.category}</td>

                <td className="px-2 font-medium text-cyan-400">
                  ₹ {t.amount}
                </td>

                <td className={`px-2 font-medium ${
                  t.type === "income" ? "text-emerald-400" : "text-pink-400"
                }`}>
                  {t.type}
                </td>

                {role === "admin" && (
                  <td className="px-2 space-x-3">

                    <button
                      onClick={() => setForm(t)}
                      className="text-indigo-400 hover:text-cyan-400 transition"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => dispatch(deleteTransaction(t.id))}
                      className="text-pink-400 hover:text-red-400 transition"
                    >
                      Delete
                    </button>

                  </td>
                )}
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}