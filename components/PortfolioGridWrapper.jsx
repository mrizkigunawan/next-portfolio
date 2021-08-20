import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { contentVariants } from "./variants.js";

export default function PortfolioGridWrapper({ children, md, xs }) {
  return (
    <motion.div
      variants={contentVariants}
      initial="hidden"
      animate="visible"
      className={`grid grid-cols-${xs} md:grid-cols-${md} gap-3`}
    >
      {children}
    </motion.div>
  );
}

PortfolioGridWrapper.defaultProps = {
  xs: 1,
};

PortfolioGridWrapper.propTypes = {
  xs: PropTypes.number,
  md: PropTypes.number,
  children: PropTypes.arrayOf(PropTypes.element),
};
