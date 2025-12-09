import clsx from "clsx";

const InfoCard = ({ icon, title, children, hoverColor, iconBgColor }) => {
  return (
    <div
      className={clsx(
        "p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-103",
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
        <h2 className="text-white text-xl font-semibold">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default InfoCard;
