const IndexCard = ({ children }) => {
  return (
    <div className="p-6 rounded-xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-md">
      <div className="flex items-center gap-3 mb-4">{children}</div>
    </div>
  );
};

export default IndexCard;
