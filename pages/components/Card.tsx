import Link from 'next/link';
import { motion } from 'framer-motion';

interface CardProps {
  href: string;
  imgSrc: string;
  layoutId: string;
}

export function Card({ href, imgSrc, layoutId }: CardProps) {
  return (
    <Link href={href} passHref>
      <div className="relative h-20 md:h-40 bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition">
        <motion.img src={imgSrc} className="w-full h-full" layoutId={layoutId} />
      </div>
    </Link>
  )
}