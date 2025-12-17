import { motion, useAnimation } from "framer-motion";

const RotatingValueCard = ({ icon, title, desc }) => {
  const controls = useAnimation();

  const handleRotate = async () => {
    await controls.start({
      rotate: 360,
      transition: { duration: 0.8, ease: "easeInOut" },
    });
    controls.set({ rotate: 0 });
  };

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <motion.div
        onClick={handleRotate}
        animate={controls}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-20 h-20 flex items-center justify-center cursor-pointer"
      >
        {icon}
      </motion.div>

      <h3 className="text-gray-500 text-lg font-semibold">{title}</h3>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );
};

export default RotatingValueCard;
