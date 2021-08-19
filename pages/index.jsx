import Head from "next/head";
import Nav from "../components/Nav";
import Title from "../components/Title";
import Description from "../components/Description";
import PortfolioButton from "../components/PortfolioButton";
import Image3D from "../components/Image3D";
import GradientBg from "../components/GradientBg";

export default function Home() {
  return (
    <div className="relative font-poppin bg-white">
      <Head>
        <title>Gunawan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <main className="relative z-10">
        <div className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto py-16">
          <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between">
            {/* text */}
            <div className="text-center lg:text-left space-y-8">
              <Title />
              <Description />
              <div>
                <PortfolioButton />
              </div>
            </div>

            {/* image */}
            <Image3D />
          </div>
        </div>
      </main>

      <GradientBg />
    </div>
  );
}
