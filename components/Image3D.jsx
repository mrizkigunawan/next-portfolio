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
    },
  },
  exit: {
    opacity: 0,
  },
};

export default function Image3D() {
  return (
    <ImageWrapper>
      <Image
        src="/img/saly-compressed.png"
        width={400}
        height={400}
        className="object-center object-cover rounded"
        alt="3d elemen saly"
      />
    </ImageWrapper>
  );
}

function ImageWrapper({ children }) {
  return (
    <motion.div
      variants={imgVariants}
      className="mb-10 lg:mb-0 flex justify-center lg:flex-none xl:mr-14"
    >
      {children}
    </motion.div>
  );
}

ImageWrapper.propTypes = {
  children: PropTypes.element,
};
