import Image from "next/image";
export const Img = ({ src, alt, width, height }) => {
  return (
    <>
      <Image priority src={src} alt={alt} width={width} height={height} />
    </>
  );
};
