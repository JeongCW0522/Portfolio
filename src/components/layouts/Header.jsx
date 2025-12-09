import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { routeItems } from "../../data/routeItems";

const Header = () => {
  const location = useLocation();
  const activePath = location.pathname;

  return (
    <div className="bg-[#0f0420] p-4 flex justify-center items-center h-20 fixed top-0 left-0 w-full z-50 border border-b-[#272727]">
      <div className="flex justify-between items-center w-full max-w-6xl">
        <h2 className="bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent text-xl font-bold">
          MyPortfolio
        </h2>

        <nav className="flex relative gap-4">
          {routeItems.map((item) => (
            <Link
              to={item.path}
              key={item.path}
              className="px-4 py-3 relative cursor-pointer"
            >
              {activePath === item.path && (
                <motion.span
                  className="absolute inset-0 bg-linear-to-r from-purple-500 to-blue-500 rounded-3xl"
                  layoutId="activeBackground"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
              <span
                className={clsx(
                  "text-[#9a9898] font-semibold relative hover:text-white hover:scale-105 active:scale-95 transition-all",
                  activePath === item.path ? "text-white" : "text-[#9a9898]"
                )}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
