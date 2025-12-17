import clsx from "clsx";

const InfoCard = ({ icon, title, children, hoverColor, iconBgColor }) => {
  return (
    <div
      className={clsx(
        "p-6 rounded-2xl bg-white/60 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:scale-103 shadow-sm",
        hoverColor
      )}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className={clsx(
            "bg-linear-to-br rounded-xl p-2 text-white",
            iconBgColor
          )}
        >
          {icon}
        </div>
        <h2 className="text-gray-500 text-xl font-semibold">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default InfoCard;
