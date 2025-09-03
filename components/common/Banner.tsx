import Image from "next/image";

const Banner = ({ src }: { src?: string | undefined }) => {
  return (
    <div className="p-4 bg-border/50">
      <Image
        src={src ?? "/assets/hero.jpg"}
        width={1080}
        height={340}
        alt="hero-image"
        className=" w-full rounded-xl object-cover object-center"
      />
    </div>
  );
};

export default Banner;
