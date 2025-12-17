import clsx from "clsx";

const ContactCard = ({ icon, label, value, bgColor, link }) => {
  return (
    <div className="block p-4 rounded-2xl bg-white/25 border border-border backdrop-blur-lg transition-all duration-300 hover:translate-x-2 hover:bg-white/30">
      <div className="flex items-center gap-5">
        <div className={clsx("rounded-2xl text-white", bgColor)}>{icon}</div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium text-gray-500">{label}</p>

          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 break-keep no-underline"
            >
              <span className="text-gray-400 break-keep hover:text-gray-600 transition">
                {value}
              </span>
            </a>
          ) : (
            <span className="text-gray-400 break-keep">{value}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
