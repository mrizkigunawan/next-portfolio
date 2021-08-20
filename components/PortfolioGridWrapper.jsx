import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { contentVariants } from "./variants.js";

export default function PortfolioGridWrapper({ children, className }) {
  return (
    <motion.div
      variants={contentVariants}
      initial="hidden"
      animate="visible"
      className={`grid ${className} gap-3`}
    >
      {children}
    </motion.div>
  );
}

PortfolioGridWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
