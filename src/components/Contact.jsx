import { motion } from "framer-motion";
import PageTitle from "./layouts/PageTitle";
import ContactItem from "./Contact/ContactCard";
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
        <div className="w-full max-w-2xl p-8 bg-bgColor border border-border rounded-3xl">
          <h2 className="text-gray-500 text-3xl font-semibold mb-8">Contact</h2>

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
