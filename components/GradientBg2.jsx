import PropTypes from "prop-types";
import React from "react";

export default function GradientBg2() {
  return (
    <GradientWrapper>
      <img
        src="/img/Eclipse.png"
        alt="gradient"
        className="w-[700px] md:w-[1000px] h-[700px] md:h-[1000px] transform translate-x-60 md:translate-x-[500px] translate-y-1/3 opacity-50 blur -rotate-180"
      />
    </GradientWrapper>
  );
}

function GradientWrapper({ children }) {
  return (
    <div className="mx-auto absolute bottom-0 right-0 overflow-hidden">
      {children}
    </div>
  );
}

GradientWrapper.propTypes = {
  children: PropTypes.element,
};
