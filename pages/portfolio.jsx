import Head from "next/head";
// import Image from "next/image";
import Nav from "../components/Nav";

export default function Portfolio() {
  return (
    <div className="relative font-poppin bg-white">
      <Head>
        <title>Gunawan | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <main className="relative z-10">
        <div className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto py-16 space-y-16">
          <section className="py-12 space-y-6 lg:space-y-10">
            <div className="lg:flex lg:justify-between lg:items-center space-y-6 lg:space-y-0">
              <h2 className="text-center lg:text-left text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800">
                Desain Konten
              </h2>
              <div className="lg:max-w-xl text-base lg:text-lg justify-self-end text-gray-600 leading-9 text-center lg:text-left">
                Karya desain dari freelance sebagai social media content
                designer dan dari organisasi semasa kuliah.
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {numbers.map((num) => (
                <img
                  src={`/img/konten-${num}-compressed.webp`}
                  alt="desain konten instagram"
                  className="object-cover object-center rounded transform hover:scale-95 hover:rounded-lg transition duration-150 ease-out"
                  key={num}
                />
              ))}
            </div>
          </section>

          <section className="py-12 space-y-6 lg:space-y-10">
            <div className="lg:flex lg:flex-row-reverse lg:justify-between lg:items-center space-y-6 lg:space-y-0">
              <h2 className="text-center lg:text-right text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800">
                Desain User Interface
              </h2>
              <div className="lg:max-w-xl text-base lg:text-lg justify-self-end text-gray-600 leading-9 text-center lg:text-left">
                Eksplorasi desain user interface dashboard system dan online
                store webview. Hasil eksplorasi desain tersebut dibuat di Figma.
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[1, 2, 3].map((num) => (
                <img
                  src={`/img/ui-${num}-compressed.webp`}
                  alt="desain poster"
                  className="object-cover object-center rounded transform hover:scale-95 hover:rounded-lg transition duration-150 ease-out"
                  key={num}
                />
              ))}
            </div>
          </section>

          <section className="py-12 space-y-6 lg:space-y-10">
            <div className="lg:flex lg:justify-between lg:items-center space-y-6 lg:space-y-0">
              <h2 className="text-center lg:text-left text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800">
                Desain Landing Page
              </h2>
              <div className="lg:max-w-xl text-base lg:text-lg justify-self-end text-gray-600 leading-9 text-center lg:text-left">
                Tampilan responsive landing page website yang dibuat menggunakan
                HTML, CSS, JavaScript dan Framework Tailwind CSS.
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[2, 3, 4, 5].map((num) => (
                <img
                  src={`/img/landing-${num}-compressed.webp`}
                  alt="landing page"
                  className="object-cover object-center rounded transform hover:scale-95 hover:rounded-lg transition duration-150 ease-out"
                  key={num}
                />
              ))}
            </div>
          </section>

          <section className="py-12 space-y-6 lg:space-y-10">
            <div className="lg:flex lg:flex-row-reverse lg:justify-between lg:items-center space-y-6 lg:space-y-0">
              <h2 className="text-center lg:text-right text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800">
                Projects
              </h2>
              <div className="lg:max-w-xl text-base lg:text-lg justify-self-end text-gray-600 leading-9 text-center lg:text-left">
                Hasil project dari workshop menghasilkan sistem informasi
                monitoring berbasis website menggunakan teknologi React.js,
                Google Firebase, dan Cloud Firestor, dan project dari Skripsi
                Tugas Akhir menghasilkan sistem penyewaan menggunakan React.js,
                Node.js, dan Cloud Firestore.
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[2, 3].map((num) => (
                <img
                  src={`/img/project-${num}-compressed.webp`}
                  alt="project"
                  className="object-cover object-center rounded transform hover:scale-95 hover:rounded-lg transition duration-150 ease-out"
                  key={num}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      <div className="mx-auto absolute inset-0 overflow-hidden">
        <img
          src="/img/Gradient.png"
          alt="gradient"
          className="hidden w-[900px] h-[900px] lg:block transfrom -translate-x-1/3 -translate-y-48 opacity-25 rotate-180"
        />
      </div>
    </div>
  );
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
