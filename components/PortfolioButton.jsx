import Link from "next/link";
import { motion } from "framer-motion";
import { childVariants } from "./variants.js";

export default function PortfolioButton() {
  return (
    <div>
      <Link href="/portfolio">
        <motion.a
          variants={childVariants}
          className="px-7 py-3 inline-block bg-gray-800 dark:bg-yellow-600 text-gray-50 dark:text-gray-50 shadow-xl hover:bg-gray-700 dark:hover:bg-gray-100 transition duration-200 ease-out cursor-pointer rounded"
        >
          Lihat Portofolio <span className="ml-2">&rarr;</span>
        </motion.a>
      </Link>
    </div>
  );
}
