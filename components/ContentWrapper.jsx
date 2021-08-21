import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { contentVariants } from "./variants.js";

export default function ContentWrapper({ children }) {
  return (
    <motion.div
      variants={contentVariants}
      className="text-center lg:text-left space-y-6"
    >
      {children}
    </motion.div>
  );
}

ContentWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};
