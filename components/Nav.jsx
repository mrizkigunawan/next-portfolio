import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import { IconMoon, IconSun } from "./Icons";

export default function Nav() {
  const router = useRouter();

  return (
    <header className="w-full relative z-10 font-poppin">
      <nav
        className="py-6 px-6 sm:px-0 mx-auto sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl"
        id="nav"
      >
        <div className="flex items-center justify-between">
          {/* brand */}
          <div className="text-left font-bold text-xl lg:text-2xl text-gray-900 dark:text-white">
            Gun!
          </div>
          {/* links */}
          <div className="text-center lg:place-self-end space-x-8 lg:space-x-16">
            <Link href="/" scroll={false}>
              <a
                className={classNames(anchorClasses, {
                  [activeClasses]: router.pathname == "/",
                })}
              >
                Tentang
              </a>
            </Link>
            <Link href="/portfolio" scroll={false}>
              <a
                className={classNames(anchorClasses, {
                  [activeClasses]: router.pathname == "/portfolio",
                })}
              >
                Portfolio
              </a>
            </Link>
          </div>
          <IconMoon key="1" />
          <IconSun key="2" />
        </div>
      </nav>
    </header>
  );
}

const anchorClasses =
  "inline-block text-base lg:text-lg text-gray-700 dark:text-gray-50 pb-1 hover:border-b-2 hover:border-gray-700 dark:hover:border-gray-200 transition duration-200 ease-out";
const activeClasses = "border-b-2 border-gray-700 dark:border-gray-200";
