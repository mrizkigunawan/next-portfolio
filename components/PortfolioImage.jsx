import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { opacityVariants } from "./variants";

export default function PortfolioImage({ src, alt }) {
  return (
    <motion.img
      variants={opacityVariants}
      src={src}
      alt={alt}
      className="object-cover object-center rounded transform hover:scale-95 hover:rounded-lg transition duration-150 ease-out"
    />
  );
}

PortfolioImage.defaultProps = {
  alt: "...",
};

PortfolioImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
