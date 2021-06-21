import Link, { LinkProps } from 'next/link';
import { motion } from 'framer-motion';

interface CardProps extends LinkProps {
  imgSrc: string;
  layoutId: string;
}

export function Card({ imgSrc, layoutId, ...rest }: CardProps) {
  return (
    <Link {...rest}>
      <div className="relative h-20 md:h-40 bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition">
        <motion.img src={imgSrc} className="w-full h-full" layoutId={layoutId} />
      </div>
    </Link>
  )
}