import Link from "next/link";
import { animated } from "@/components";

export default function Navbar() {
  return (
    <nav className="flex justify-start items-center p-4 border-b-2 border-gray-200">
      <animated.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          href="/"
          className="text-2xl text-center sm:text-left font-geist-mono font-extrabold"
        >
          FL
        </Link>
      </animated.h1>
    </nav>
  );
}
