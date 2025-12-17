import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { routeItems } from "../../data/routeItems";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const activePath = location.pathname;
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header className="bg-bgColor p-4 flex justify-center items-center h-20 top-0 left-0 w-full border-b border-border relative z-50">
      <div className="flex justify-between items-center w-full max-w-6xl">
        <h2 className="bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent text-2xl font-bold">
          MyPortfolio
        </h2>

        <nav className="hidden md:flex relative gap-4">
          {routeItems.map((item) => (
            <Link
              to={item.path}
              key={item.path}
              className="px-4 py-3 relative cursor-pointer group"
            >
              <span className="absolute inset-0 rounded-3xl bg-linear-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition" />

              {activePath === item.path && (
                <motion.span
                  className="absolute inset-0 bg-linear-to-r from-purple-500 to-blue-500 rounded-3xl"
                  layoutId="activeBackground"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              <span
                className={clsx(
                  "font-semibold relative transition-all",
                  activePath === item.path ? "text-white" : "text-[#9a9898]"
                )}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsMobile((prev) => !prev)}
          className="md:hidden text-[#9a9898]"
        >
          {isMobile ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobile && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-bgColor border-t border-b border-border md:hidden overflow-hidden"
          >
            <nav className="flex flex-col gap-2 p-4">
              {routeItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobile(false)}
                  className={clsx(
                    "px-4 py-3 rounded-xl font-semibold transition",
                    activePath === item.path &&
                      "bg-linear-to-r from-purple-500 to-blue-500"
                  )}
                >
                  <span
                    className={clsx(
                      "block transition-colors",
                      activePath === item.path ? "text-white" : "text-[#9a9898]"
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
