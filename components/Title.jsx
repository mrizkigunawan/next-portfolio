export default function Title() {
  return (
    <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-gray-800 leading-normal lg:space-y-3">
      <span className="inline-block md:block">Halo! Saya Gunawan</span>
      <span className="inline-block md:block">
        Seorang{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500">
          Designer
        </span>{" "}
        dan
      </span>
      <span className="inline-block md:block text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-indigo-800">
        Developer
      </span>
    </h1>
  );
}
