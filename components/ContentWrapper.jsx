import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { contentVariants } from "./variants.js";

export default function ContentWrapper({ children }) {
  return (
    <motion.div
      variants={contentVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="text-center lg:text-left space-y-8"
    >
      {children}
    </motion.div>
  );
}

ContentWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};
