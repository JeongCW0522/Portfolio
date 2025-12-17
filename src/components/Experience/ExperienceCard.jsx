import clsx from "clsx";

const ExperienceCard = ({ title, date, desc, Achieve1, Achieve2, color }) => {
  return (
    <div>
      <div className="flex relative transition-all duration-300 hover:-translate-y-1 hover:scale-103">
        <div
          className={clsx(
            "absolute left-0 top-1/2 -translate-y-1/2 w-2 h-full bg-linear-to-b rounded-full",
            color
          )}
        />
        <div className="w-full max-w-xl p-8 rounded-xl border border-white/10 bg-linear-to-br from-[#271b38] to-[rgb(1,11,26)] space-y-3 hover:border-white/20 transision">
          <h3 className="text-white text-xl">{title}</h3>
          <p className="text-gray-500">{date}</p>
          <p className="text-gray-400 my-5 mb-10">{desc}</p>
          <h3 className="text-white text-lg mb-5">Activities</h3>

          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-gray-300 rounded-full" />
            <p className="text-gray-400">{Achieve1}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-gray-300 rounded-full" />
            <p className="text-gray-400">{Achieve2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
