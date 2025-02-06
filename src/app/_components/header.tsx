import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
      <Link href="/" className="hover:underline flex items-center w-[250px]">
        <Image
          src="/assets/logo.png"
          alt="Blog Logo"
          width={150}
          height={50}
          className="w-full"
          priority
        />
      </Link>
    </h2>
  );
};

export default Header;
