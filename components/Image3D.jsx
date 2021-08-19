import Image from "next/image";

export default function Image3D() {
  return (
    <ImageWrapper>
      <Image
        src="/img/saly.png"
        width={450}
        height={450}
        className="w-80 h-80 object-center object-cover rounded"
        alt="3d elemen saly"
      />
    </ImageWrapper>
  );
}

function ImageWrapper({ children }) {
  return (
    <div className="mb-10 lg:mb-0 flex justify-center lg:flex-none">
      {" "}
      {children}
    </div>
  );
}
