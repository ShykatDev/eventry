import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="/" className="text-xl">
        Even<span className="text-amber-200">try</span>
      </Link>
    </div>
  );
};

export default Logo;
