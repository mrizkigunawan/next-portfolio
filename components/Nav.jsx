import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import { AnimatePresence } from "framer-motion";
import { IconMoon, IconSun } from "./Icons";

export default function Nav() {
  const router = useRouter();

  return (
    <header className="w-full relative z-10 font-poppin">
      <nav className="py-6 mx-auto max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <div className="space-y-5 md:space-y-0 md:flex md:items-center md:justify-between">
          {/* brand */}
          <div className="text-center md:text-left font-bold text-2xl text-gray-900 dark:text-white">
            Gun!
          </div>
          {/* links */}
          <div className="text-center md:text-right space-x-10">
            <Link href="/">
              <a
                className={classNames(anchorClasses, {
                  [activeClasses]: router.pathname == "/",
                })}
              >
                Tentang
              </a>
            </Link>
            <Link href="/portfolio">
              <a
                className={classNames(anchorClasses, {
                  [activeClasses]: router.pathname == "/portfolio",
                })}
              >
                Portfolio
              </a>
            </Link>
            <AnimatePresence exitBeforeEnter>
              <IconMoon key="1" />
              <IconSun key="2" />
            </AnimatePresence>
          </div>
        </div>
      </nav>
    </header>
  );
}

const anchorClasses =
  "inline-block text-lg text-gray-700 dark:text-gray-50 pb-1 hover:border-b-2 hover:border-gray-700 dark:hover:border-gray-200 transition duration-200 ease-out";
const activeClasses = "border-b-2 border-gray-700 dark:border-gray-200";
