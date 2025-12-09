import clsx from "clsx";

const ContactCard = ({ icon, label, value, bgColor, link }) => {
  return (
    <div className="block p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:translate-x-2 hover:border-white/20">
      <div className="flex items-center gap-5">
        <div className={clsx("rounded-2xl text-white", bgColor)}>{icon}</div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-gray-400">{label}</p>

          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white break-keep no-underline"
            >
              <span className="text-white break-keep">{value}</span>
            </a>
          ) : (
            <span className="text-white break-keep">{value}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
