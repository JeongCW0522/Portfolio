import clsx from "clsx";

const InfoCard = ({ icon, title, children, hoverColor }) => {
  return (
    <div
      className={clsx(
        "p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-105",
        `hover:border-${hoverColor}`
      )}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-linear-to-br from-blue-500 to-purple-500 rounded-xl p-2 text-white">
          {icon}
        </div>
        <h2 className="text-white text-xl font-semibold">{title}</h2>
      </div>

      {children}
    </div>
  );
};

export default InfoCard;
