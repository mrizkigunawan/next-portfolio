import PropTypes from "prop-types";
import { motion } from "framer-motion";

const imgVariants = {
  hidden: {
    scale: 0.7,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 1,
      damping: 15,
    },
  },
  exit: {
    opacity: 0,
  },
};

export default function Image3D() {
  return (
    <ImageWrapper>
      <img
        src="/img/saly-compressed-2.webp"
        layout="fill"
        alt="3d elemen saly"
      />
    </ImageWrapper>
  );
}

function ImageWrapper({ children }) {
  return (
    <motion.div
      variants={imgVariants}
      className="mb-10 lg:mb-0 flex justify-center lg:flex-none xl:mr-14 w-72 h-72 md:w-96 md:h-96 mx-auto relative"
    >
      {children}
    </motion.div>
  );
}

ImageWrapper.propTypes = {
  children: PropTypes.element,
};
