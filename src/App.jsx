import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Insights from "./components/Insights";
import SummaryCards from "./components/SummaryCards";
import Charts from "./components/Charts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />, // layout
    children: [
      {
        index: true,
        element: (
          <div className="space-y-16">
            <SummaryCards />
            <Charts />
          </div>
        ),
      },
      {
        path: "transactions",
        element: <Transactions />,
      },
      {
        path: "insights",
        element: <Insights />,
      },
    ],
  },
]);

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden text-purple-300">

      <div className="absolute inset-0 bg-[linear-gradient(135deg,#000005_0%,#05000a_50%,#100019_100%)]"></div>

   
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(100,30,180,0.03),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(60,20,120,0.025),transparent_55%)]"></div>

    
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(255,255,255,0.01),transparent_90%)]"></div>

 
      <div className="absolute inset-0 animate-aurora bg-[radial-gradient(circle,rgba(120,60,200,0.04),transparent_90%)]"></div>

     
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent,rgba(0,0,0,0.7))]"></div>

 
      <div className="relative z-10">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}