import { motion } from "framer-motion";
import { childVariants } from "./variants.js";

export default function Description() {
  return (
    <motion.p
      variants={childVariants}
      className="mx-auto lg:mx-0 max-w-lg text-gray-600 dark:text-gray-200 leading-9"
    >
      Passionate di bidang Frontend Dev dan UI/UX Design. Suka membangun
      antarmuka website yang fast-performace dan well-design menggunakan
      teknologi-teknologi terbaru.
    </motion.p>
  );
}
