import { IconDribbble, IconGithub, IconLinkedIn } from "./Icons";

export default function FindOutMore() {
  return (
    <div className="relative z-10 px-6 lg:px-0 py-12 text-center bg-transparent">
      <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-600">
        Ingin menciptakan sesuatu yang memiliki visual yang indah?
      </h3>
      <div className="text-gray-400 mt-12 mb-5">Temukan saya di</div>
      <div className="flex items-center justify-center space-x-5 lg:space-x-10 my-5">
        <a
          href="https://github.com/mrizkigunawan"
          target="_blank"
          rel="noreferrer"
        >
          <IconGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/rizki-gunawan-609a29150/"
          target="_blank"
          rel="noreferrer"
        >
          <IconLinkedIn />
        </a>
        <a
          href="https://dribbble.com/rizkiguna"
          target="_blank"
          rel="noreferrer"
        >
          <IconDribbble />
        </a>
      </div>
      <div className="py-8 pt-16 px-6 text-sm text-center text-gray-400 dark:text-gray-700">
        &copy; Rizki Gunawan 2021
      </div>
    </div>
  );
}
