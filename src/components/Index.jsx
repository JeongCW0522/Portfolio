import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="flex justify-center items-start p-15">
        <div className="w-full max-w-6xl p-10 bg-[#271b38] border border-[#272727] rounded-2xl">
          <h1 className="text-4xl font-semibold text-gray-400 mb-15">
            My Profile
          </h1>
          <div className="flex items-center gap-10">
            <div className="h-64 w-64 rounded-full bg-linear-to-tr from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center hover:scale-105 transition duration-300">
              <img
                src={profileImg}
                alt="profile"
                className="h-60 w-60 rounded-full"
              />
            </div>
            <div>
              <h3 className="text-white text-3xl font-semibold mb-3">정찬원</h3>
              <p className="text-gray-400 text-lg">
                안녕하세요! 더 나은 사용자 경험을 만드는 프론트엔드 개발자가
                <br />
                되기 위해 노력하고 있습니다. <br />
                계속해서 새로운 기술을 배우고 성장하는 개발자가 되는 것을 목표로
                하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Index;
