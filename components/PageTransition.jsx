import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import { opacityVariants } from "./variants";

export default function PageTransition({ children, route }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={route}
        variants={opacityVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

PageTransition.propTypes = {
  route: PropTypes.any,
  children: PropTypes.node,
};
