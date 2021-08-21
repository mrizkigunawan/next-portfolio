import Wrapper from "../components/Layout";
import GradientBg from "../components/GradientBg";
import Container from "../components/Container";
import PortfolioDescription from "../components/PortfolioDescription";
import PortfolioGridWrapper from "../components/PortfolioGridWrapper";
import PortfolioImage from "../components/PortfolioImage";
import PortfolioSection from "../components/PortfolioSection";
import PortfolioTitle from "../components/PortfolioTitle";
import PortfolioWrapper from "../components/PortfolioWrapper";
import FindOutMore from "../components/FindOutMore";
import GradientBg2 from "../components/GradientBg2";
import GradientBg3 from "../components/GradientBg3";
import {
  IconBootstrap,
  IconCSS,
  IconFigma,
  IconFirebase,
  IconHTML,
  IconJS,
  IconNodeJS,
  IconReact,
  IconTailwind,
  IconWrapper,
} from "../components/Icons";

export default function Portfolio() {
  return (
    <Wrapper>
      <div className="relative z-10">
        <Container className="space-y-12">
          {/* section desain konten */}
          <PortfolioSection>
            <PortfolioWrapper>
              <PortfolioTitle>Desain Konten</PortfolioTitle>
              <PortfolioDescription>
                <p>
                  Karya desain dari freelance sebagai social media content
                  designer dan dari organisasi semasa kuliah. Total lebih dari
                  50 desain telah saya hasilkan.
                </p>
              </PortfolioDescription>
            </PortfolioWrapper>

            <PortfolioGridWrapper className="grid-cols-2 md:grid-cols-4">
              {[1, 3, 5, 7].map((num) => (
                <PortfolioImage
                  src={`/img/konten-${num}-compressed.webp`}
                  alt="desain konten instagram"
                  key={num}
                />
              ))}
            </PortfolioGridWrapper>
          </PortfolioSection>

          {/* section desain user interface */}
          <PortfolioSection>
            <PortfolioWrapper reverse>
              <PortfolioTitle right>Desain User Interface</PortfolioTitle>
              <PortfolioDescription>
                <p>
                  Eksplorasi desain user interface dashboard system dan online
                  store webview. Hasil eksplorasi desain tersebut dibuat di
                  Figma.
                </p>
                <IconWrapper>
                  <IconFigma />
                </IconWrapper>
              </PortfolioDescription>
            </PortfolioWrapper>

            <PortfolioGridWrapper className="grid-cols-1 md:grid-cols-3">
              {[1, 2, 3].map((num) => (
                <PortfolioImage
                  src={`/img/ui-${num}-compressed.webp`}
                  alt="desain user interface"
                  key={num}
                />
              ))}
            </PortfolioGridWrapper>
          </PortfolioSection>

          {/* section desain landing page */}
          <PortfolioSection>
            <PortfolioWrapper>
              <PortfolioTitle>Desain Landing Page</PortfolioTitle>
              <PortfolioDescription>
                <p>
                  Tampilan responsive landing page website yang dibuat
                  menggunakan HTML, CSS, JavaScript dan Framework Tailwind CSS.
                </p>
                <IconWrapper>
                  <IconHTML />
                  <IconCSS />
                  <IconJS />
                  <IconTailwind />
                </IconWrapper>
              </PortfolioDescription>
            </PortfolioWrapper>

            <PortfolioGridWrapper className="grid-cols-1 md:grid-cols-2">
              {[2, 3, 4, 5].map((num) => (
                <PortfolioImage
                  src={`/img/landing-${num}-compressed.webp`}
                  alt="landing page"
                  key={num}
                />
              ))}
            </PortfolioGridWrapper>
          </PortfolioSection>

          {/* section projects */}
          <PortfolioSection>
            <PortfolioWrapper reverse>
              <PortfolioTitle right>Projects</PortfolioTitle>

              <PortfolioDescription>
                <p>
                  Projek-projek website dari Workshop dan Tugas Akhir yang
                  menggunakan teknologi JavaScript, React.js, Bootstrap Admin
                  Template, MongoDB, Google Firebase, dan Cloud Firestore.
                </p>
                <IconWrapper>
                  <IconReact />
                  <IconNodeJS />
                  <IconBootstrap />
                  <IconFirebase />
                </IconWrapper>
              </PortfolioDescription>
            </PortfolioWrapper>

            <PortfolioGridWrapper className="grid-cols-1 md:grid-cols-2">
              {[2, 3].map((num) => (
                <PortfolioImage
                  src={`/img/project-${num}-compressed.webp`}
                  alt="project"
                  key={num}
                />
              ))}
            </PortfolioGridWrapper>
          </PortfolioSection>
        </Container>

        <FindOutMore />
        <GradientBg2 />
      </div>
      <GradientBg />
      <GradientBg3 />
    </Wrapper>
  );
}
