import PropTypes from "prop-types";

export default function Container({ children, className }) {
  return (
    <div
      className={`relative z-10 px-6 sm:px-0 sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto py-6 lg:py-16 ${className}`}
    >
      {children}
    </div>
  );
}

Container.defaultProps = {
  className: "",
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
