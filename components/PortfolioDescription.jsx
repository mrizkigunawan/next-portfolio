import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { childVariants } from "./variants.js";

export default function PortfolioDescription({ children }) {
  return (
    <motion.div
      variants={childVariants}
      className="lg:max-w-xl text-lg justify-self-end text-gray-600 dark:text-gray-200 leading-9 text-center lg:text-left"
    >
      {children}
    </motion.div>
  );
}

PortfolioDescription.propTypes = {
  children: PropTypes.node,
};
