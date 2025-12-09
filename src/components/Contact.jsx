import { motion } from "framer-motion";
import PageTitle from "./layouts/PageTitle";
import ContactItem from "./Contact/ContactCard";
import { MessageCircle } from "lucide-react";
import { contactItems } from "../data/contactItems";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <PageTitle
        title="Get In Touch"
        subTitle="Feel free to contact me anytime"
      />

      <div className="flex justify-center">
        <div className="w-full max-w-2xl p-8 bg-linear-to-br from-[#271b38] to-[rgb(1,18,44)] border border-[#272727] rounded-3xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-linear-to-br from-blue-500 to-purple-500 rounded-2xl p-3 text-white">
              <MessageCircle size={30} />
            </div>
            <h2 className="text-white text-2xl font-semibold">Contact</h2>
          </div>

          <div className="space-y-5">
            {contactItems.map((item) => (
              <ContactItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                value={item.value}
                bgColor={item.bgColor}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
