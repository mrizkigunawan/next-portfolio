import PropTypes from "prop-types";
import Image from "next/image";
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
      delay: 1,
    },
  },
};

export default function Image3D() {
  return (
    <ImageWrapper>
      <Image
        src="/img/saly-compressed.png"
        width={450}
        height={450}
        className="w-80 h-80 object-center object-cover rounded"
        alt="3d elemen saly"
      />
    </ImageWrapper>
  );
}

function ImageWrapper({ children }) {
  return (
    <motion.div
      variants={imgVariants}
      initial="hidden"
      animate="visible"
      className="mb-10 lg:mb-0 flex justify-center lg:flex-none"
    >
      {" "}
      {children}
    </motion.div>
  );
}

ImageWrapper.propTypes = {
  children: PropTypes.element,
};
