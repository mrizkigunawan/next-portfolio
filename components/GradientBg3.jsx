import PropTypes from "prop-types";
import React from "react";

export default function GradientBg3() {
  return (
    <GradientWrapper>
      <img
        src="/img/Eclipse.png"
        alt="gradient"
        className="hidden dark:block w-[500px] h-[500px] md:w-[800px] md:h-[800px] transfrom -translate-x-1/3 -translate-y-40 md:-translate-y-96 blur opacity-60 -rotate-90"
      />
    </GradientWrapper>
  );
}

function GradientWrapper({ children }) {
  return (
    <div className="mx-auto absolute top-0 left-0 overflow-hidden">
      {children}
    </div>
  );
}

GradientWrapper.propTypes = {
  children: PropTypes.element,
};
