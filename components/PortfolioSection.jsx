import PropTypes from "prop-types";

export default function PortfolioSection({ children }) {
  return <section className="py-6 space-y-3 lg:space-y-10">{children}</section>;
}

PortfolioSection.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};
