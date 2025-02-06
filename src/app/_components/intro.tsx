import { CMS_NAME } from "@/lib/constants";
import Image from "next/image";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="md:pr-8">
        <Image
          src="/assets/logo.png"
          alt="Blog Logo"
          width={150}
          height={50}
          className="w-full"
          priority
        />
      </div>
      <h4 className="text-center md:text-left text-xl mt-5 md:pl-8">
        AI for Middle Managers
      </h4>
    </section>
  );
}
