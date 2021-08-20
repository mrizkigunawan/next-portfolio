import PropTypes from "prop-types";
import React from "react";

export default function GradientBg() {
  return (
    <GradientWrapper>
      <img
        src="/img/Gradient.png"
        alt="gradient"
        className="w-[700px] h-[700px] md:w-[900px] md:h-[900px] transfrom -translate-x-1/3 -translate-y-60 blur opacity-60 -rotate-90 dark:hidden"
      />
    </GradientWrapper>
  );
}

function GradientWrapper({ children }) {
  return (
    <div className="mx-auto absolute inset-0 overflow-hidden">{children}</div>
  );
}

GradientWrapper.propTypes = {
  children: PropTypes.element,
};
