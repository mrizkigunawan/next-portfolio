import PropTypes from "prop-types";
import Container from "../components/Container";
import Title from "../components/Title";
import Description from "../components/Description";
import PortfolioButton from "../components/PortfolioButton";
import Image3D from "../components/Image3D";
import GradientBg from "../components/GradientBg";
import Wrapper from "../components/Layout";
import ContentWrapper from "../components/ContentWrapper";
import GradientBg3 from "../components/GradientBg3";

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <FlexWrapper>
          <ContentWrapper>
            <Title />
            <Description />
            <PortfolioButton />
          </ContentWrapper>

          {/* image */}
          <Image3D />
        </FlexWrapper>
      </Container>

      <GradientBg />
      <GradientBg3 />
    </Wrapper>
  );
}

function FlexWrapper({ children }) {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between">
      {children}
    </div>
  );
}

FlexWrapper.propTypes = {
  children: PropTypes.node,
};
