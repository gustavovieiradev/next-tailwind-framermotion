import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export function Header() {
  return (
    <header className="flex justify-center md:justify-between py-2 md:py-4 items-center">
      <Link href="https://github.com/gustavovieiradev/next-tailwind-framermotion" passHref>
        <div className="flex align-center space-x-2 cursor-pointer block hover:text-gray-300 transition">
          <FaGithub size={20} className="mt-1" />
          <a target="_blank">gustavovieiradev</a>
        </div>
      </Link>

      <nav className="hidden md:block space-x-8">
        <Link href="nextjs">
          <a className="tracking-wide hover:text-gray-300 transition">Next.js</a>
        </Link>
        <Link href="tailwind">
          <a className="tracking-wide hover:text-gray-300 transition">Tailwind</a>
        </Link>
        <Link href="framermotion">
          <a className="tracking-wide hover:text-gray-300 transition">Framer Motion</a>
        </Link>
      </nav>

    </header>
  )
}