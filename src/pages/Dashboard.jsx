import { useDispatch, useSelector } from "react-redux";
import { setRole } from "../store/financeSlice";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function Dashboard() {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.finance.role);
  const location = useLocation();

  const linkStyle = ({ isActive }) =>
    `transition ${
      isActive
        ? "text-white border-b border-cyan-400 pb-1"
        : "text-gray-400 hover:text-gray-200"
    }`;

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const roles = [
    { label: "Viewer", value: "viewer" },
    { label: "Admin", value: "admin" },
  ];

  return (
    <div className="flex flex-col min-h-screen text-gray-300 relative">
      <nav className="sticky top-0 z-[999] backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
        <div className="w-full flex flex-col md:flex-row justify-between items-center px-6 py-4 gap-4 md:gap-0">
          <h1 className="text-lg font-medium text-gray-200">FinDashUI</h1>

          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 w-full md:w-auto">
            <NavLink to="/" className={linkStyle}>
              Dashboard
            </NavLink>
            <NavLink to="/transactions" className={linkStyle}>
              Transactions
            </NavLink>
            <NavLink to="/insights" className={linkStyle}>
              Insights
            </NavLink>

            {location.pathname === "/transactions" && (
              <div ref={dropdownRef} className="relative">
                <div
                  onClick={() => setOpen((prev) => !prev)}
                  className="flex items-center justify-between bg-white/5 border border-white/10 rounded-md px-3 py-1 text-gray-300 min-w-20 cursor-pointer"
                >
                  <span>{roles.find((r) => r.value === role)?.label}</span>
                  <span className="ml-2 text-gray-400">&#9662;</span>
                </div>

                {open && (
                  <div className="absolute right-0 mt-1 w-full bg-[#111] border border-white/10 rounded-md overflow-hidden z-50">
                    {roles.map((r) => (
                      <div
                        key={r.value}
                        onClick={() => {
                          dispatch(setRole(r.value));
                          setOpen(false);
                        }}
                        className="px-3 py-2 hover:bg-cyan-500/20 cursor-pointer text-gray-200"
                      >
                        {r.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>

      <main className="flex-1 relative z-10 px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}