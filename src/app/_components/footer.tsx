import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-black dark:border-neutral-800">
      <Container>
        {/* Social Icons */}
        <div className="flex justify-center py-16">
          <div className="flex gap-16">
            <a 
              href="https://x.com/aiengmanager" 
              className="w-16 flex items-center justify-center" 
              aria-label="X (Twitter)"
            >
              <Image
                src="/assets/social/x.svg"
                alt="X"
                width={64}
                height={64}
                className="transition-opacity hover:opacity-70 dark:invert dark:opacity-70 dark:hover:opacity-100"
              />
            </a>
            <a 
              href="https://github.com/israelvicars" 
              className="w-16 flex items-center justify-center" 
              aria-label="GitHub"
            >
              <Image
                src="/assets/social/github.svg"
                alt="GitHub"
                width={64}
                height={64}
                className="transition-opacity hover:opacity-70 dark:invert dark:opacity-70 dark:hover:opacity-100"
              />
            </a>
            <a 
              href="https://linkedin.com/in/israelvicars" 
              className="w-16 flex items-center justify-center" 
              aria-label="LinkedIn"
            >
              <Image
                src="/assets/social/linkedin.svg"
                alt="LinkedIn"
                width={76}
                height={76}
                className="transition-opacity hover:opacity-70 dark:invert dark:opacity-70 dark:hover:opacity-100 -mt-1.5"
              />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
