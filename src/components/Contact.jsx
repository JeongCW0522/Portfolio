import { motion } from "framer-motion";
import PageTitle from "./layouts/PageTitle";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <PageTitle title="Get In Touch" subTitle="언제든지 연락주세요" />
    </motion.div>
  );
};

export default Contact;
