import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: JSON.parse(localStorage.getItem("transactions")) || [
    { id: 1, date: "2026-03-01", amount: 5000, category: "Salary", type: "income" },
    { id: 2, date: "2026-03-02", amount: 1200, category: "Food", type: "expense" },
    { id: 3, date: "2026-03-03", amount: 300, category: "Transport", type: "expense" },
    { id: 4, date: "2026-03-04", amount: 1500, category: "Freelance", type: "income" },
    { id: 5, date: "2026-03-05", amount: 700, category: "Entertainment", type: "expense" },
    { id: 6, date: "2026-03-06", amount: 2500, category: "Investment", type: "income" },
    { id: 7, date: "2026-03-07", amount: 900, category: "Shopping", type: "expense" },
    { id: 8, date: "2026-03-08", amount: 450, category: "Groceries", type: "expense" },
    { id: 9, date: "2026-03-09", amount: 2000, category: "Bonus", type: "income" },
    { id: 10, date: "2026-03-10", amount: 600, category: "Transport", type: "expense" },
    { id: 11, date: "2026-03-11", amount: 800, category: "Dining Out", type: "expense" },
    { id: 12, date: "2026-03-12", amount: 1000, category: "Freelance", type: "income" },
    { id: 13, date: "2026-03-13", amount: 1200, category: "Rent", type: "expense" },
    { id: 14, date: "2026-03-14", amount: 400, category: "Subscriptions", type: "expense" },
    { id: 15, date: "2026-03-15", amount: 3500, category: "Salary", type: "income" },
  ],
  role: "viewer",
  search: "",
};

const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
    },

    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
      localStorage.setItem("transactions", JSON.stringify(state.transactions));
    },

    deleteTransaction: (state, action) => {
      state.transactions = state.transactions.filter(t => t.id !== action.payload);
      localStorage.setItem("transactions", JSON.stringify(state.transactions));
    },

    editTransaction: (state, action) => {
      const index = state.transactions.findIndex(t => t.id === action.payload.id);
      if (index !== -1) {
        state.transactions[index] = action.payload;
        localStorage.setItem("transactions", JSON.stringify(state.transactions));
      }
    },

    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const {
  setRole,
  addTransaction,
  deleteTransaction,
  editTransaction,
  setSearch,
} = financeSlice.actions;

export default financeSlice.reducer;