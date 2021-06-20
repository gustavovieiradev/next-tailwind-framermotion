import Link from 'next/link';

export function Header() {
  return (
    <header className="flex justify-center md:justify-between py-2 md:py-4 items-center">
      <Link href="https://github.com/gustavovieiradev/next-tailwind-framermotion">
        <a className="hover:text-gray-300 transition" target="_blank">gustavovieiradev</a>
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