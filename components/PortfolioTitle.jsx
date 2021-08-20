import PropTypes from "prop-types";
import classNames from "classnames";
import { motion } from "framer-motion";
import { childVariants } from "./variants.js";

export default function PortfolioTitle({ children, right }) {
  return (
    <motion.h2
      variants={childVariants}
      className={classNames(titleClasses, {
        "lg:text-right": right,
        "lg:text-left": !right,
      })}
    >
      {children}
    </motion.h2>
  );
}

const titleClasses =
  "text-center text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800 dark:text-gray-50";

PortfolioTitle.defaultProps = {
  right: false,
};

PortfolioTitle.propTypes = {
  children: PropTypes.string,
  right: PropTypes.bool,
};
