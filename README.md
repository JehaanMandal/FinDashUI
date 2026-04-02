
# FinDashUI 

**FinDashUI** is a modern, responsive finance dashboard built with **React**, **Redux Toolkit**, **Tailwind CSS**, **React Router**, and **Recharts**. It helps users track income, expenses, and financial insights in a sleek, interactive UI.

---
<img width="1916" height="858" alt="Screenshot 2026-04-02 191722" src="https://github.com/user-attachments/assets/fbd59a0b-2e09-4969-bcc9-07ee070da774" />

<img width="1912" height="864" alt="Screenshot 2026-04-02 191803" src="https://github.com/user-attachments/assets/75a4663c-bba3-4e8f-8bf7-b44006b9c85a" />

<img width="1919" height="864" alt="Screenshot 2026-04-02 191753" src="https://github.com/user-attachments/assets/966d6c2b-b9c7-43c6-9b6a-2f5d26db2aad" />






## Features

- **Dashboard Overview:** Summarizes income, expenses, and balance with interactive cards.
- **Transactions Management:** View a list of transactions with categories, dates, amounts, and types.
- **Insights & Charts:** Visual representation of income vs expenses and category-wise spending using **Recharts**.
- **Role-based View:** Switch between "Viewer" and "Admin" roles using a custom dropdown.
- **Persistent Data:** Transactions are stored in `localStorage` for persistent data across sessions.
- **Responsive Design:** Works seamlessly on desktop and mobile devices.

---

## Tech Stack

- **React 18** – Frontend framework
- **Redux Toolkit** – State management
- **React Router DOM v6** – Navigation and routing
- **Recharts** – Interactive charts and data visualization
- **Tailwind CSS** – Styling and responsive design
- **Vite** – Build tool for fast development

---

## Project Structure

FinDashUI/
├── public/
├── src/
│   ├── components/
│   │   ├── SummaryCards.jsx
│   │   ├── Charts.jsx
│   │   ├── Insights.jsx
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Transactions.jsx
│   │
│   ├── store/
│   │   ├── store.js
│   │   ├── financeSlice.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
├── package.json
├── vite.config.js


---
## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/FinDashUI.git
cd FinDashUI

2. Install dependencies:

npm install
# or
yarn

3. Start the development server:

npm run dev
# or
yarn dev

4. Open your browser and go to http://localhost:5173.
---

## Usage

* **Switch Role:** Use the top-right dropdown to toggle between `Viewer` and `Admin`.
* **View Transactions:** Navigate to the **Transactions** page to see all transactions.
* **Dashboard:** Get a quick summary of income, expenses, and balance.
* **Insights:** Interactive charts using **Recharts** show financial trends and spending categories.


## Contributing

Contributions are welcome! You can:

* Improve UI/UX
* Add more charts or analytics
* Connect to a backend for real user data
* Optimize performance
