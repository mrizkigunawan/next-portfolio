import PropTypes from "prop-types";
import classNames from "classnames";
import { motion } from "framer-motion";
import { contentVariants } from "./variants.js";

export default function PortfolioWrapper({ children, reverse }) {
  return (
    <motion.div
      variants={contentVariants}
      initial="hidden"
      animate="visible"
      className={classNames(wrapperClasses, {
        "lg:flex-row-reverse": reverse,
      })}
    >
      {children}
    </motion.div>
  );
}

const wrapperClasses =
  "lg:flex lg:justify-between lg:items-center space-y-3 lg:space-y-0";

PortfolioWrapper.defaultProps = {
  reverse: false,
};

PortfolioWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  reverse: PropTypes.bool,
};
