export default function GradientBg() {
  return (
    <GradientWrapper>
      <img
        src="/img/Gradient.png"
        alt="gradient"
        className="hidden w-[900px] h-[900px] lg:block transfrom -translate-x-1/3 -translate-y-48 opacity-25 rotate-180"
      />
    </GradientWrapper>
  );
}

function GradientWrapper({ children }) {
  return (
    <div className="mx-auto absolute inset-0 overflow-hidden">{children}</div>
  );
}
