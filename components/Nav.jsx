import Link from "next/link";

export default function Nav() {
  return (
    <header className="w-full relative z-10">
      <nav className="py-6 mx-auto max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <div className="space-y-5 md:space-y-0 md:flex md:items-center md:justify-between">
          {/* brand */}
          <div className="text-center md:text-left font-bold text-2xl text-gray-900">
            Gun!
          </div>
          {/* links */}
          <div className="text-center md:text-right space-x-10">
            <Link href="/">
              <a className="inline-block text-lg text-gray-700 hover:underline">
                Tentang
              </a>
            </Link>
            <Link href="/portfolio">
              <a className="inline-block text-lg text-gray-700 hover:underline">
                Portfolio
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
