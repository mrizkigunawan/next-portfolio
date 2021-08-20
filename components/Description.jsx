import { motion } from "framer-motion";
import { childVariants } from "./variants.js";

export default function Description() {
  return (
    <motion.p
      variants={childVariants}
      className="mx-auto lg:mx-0 max-w-lg text-lg text-gray-600 dark:text-gray-200 leading-9"
    >
      Saya suka membangun tampilan website menggunakan teknologi-teknologi
      terkini yang memiliki visual yang baik, tampilan yang interaktif dan
      performance yang cepat. Mengubah ide menjadi sebuah desain adalah hal yang
      saya gemari, lihat lebih lanjut pada portofolio saya.
    </motion.p>
  );
}
