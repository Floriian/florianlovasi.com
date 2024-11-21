import { animated } from "@/components";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { payload } from "./payload-instance";

export default async function Home() {
  const { docs } = await payload.find({ collection: "common-settings" });

  const cv = docs[0].cv;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <animated.h1
          className="text-4xl text-center sm:text-left font-geist-mono"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Flórián Lovasi
        </animated.h1>
        <animated.p
          className="text-lg text-center sm:text-left font-geist-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Fullstack Developer
        </animated.p>

        <div className="flex w-full gap-4 justify-center sm:justify-start">
          <animated.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              href="https://www.linkedin.com/in/florianlovasi/"
              target="_blank"
            >
              <LinkedinIcon className="hover:text-[#0077B5] transition-colors duration-150" />
            </Link>
          </animated.div>

          <animated.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Link href="https://github.com/Floriian" target="_blank">
              <GithubIcon className="hover:text-[#6e5494] transition-colors duration-150" />
            </Link>
          </animated.div>
        </div>

        <animated.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            href={cv.url}
            className="text-lg text-center sm:text-left font-geist-sans relative group"
            target="_blank"
          >
            Download CV
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </animated.div>
      </main>
    </div>
  );
}
