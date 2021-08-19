import Link from "next/link";

export default function PortfolioButton() {
  return (
    <Link href="/portfolio">
      <a className="px-8 py-4 inline-block bg-gray-800 text-gray-50 text-lg shadow-xl hover:bg-gray-700 transition duration-200 ease-out">
        Lihat Portofolio <span className="ml-2">&rarr;</span>
      </a>
    </Link>
  );
}
