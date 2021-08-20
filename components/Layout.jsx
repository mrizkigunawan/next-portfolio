import PropTypes from "prop-types";
import React from "react";

export default function Wrapper({ children }) {
  return (
    <main className="font-poppin bg-white dark:bg-[#121212]">{children}</main>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node,
};
