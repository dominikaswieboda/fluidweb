import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  index: number;
  component: string;
}

export const PortfolioCard = ({
  image,
  title,
  category,
  description,
  index,
  component,
}: PortfolioCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 hover:border-purple-500/50 transition-all duration-300"
    >
      <Link to={`/portfolio/${component}`} className="block">
      <div className="aspect-video overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <span className="text-purple-400 text-sm mb-2 block">{category}</span>
          <h3 className="text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm mb-4">{description}</p>
          <div className="flex items-center gap-2 text-purple-400 text-sm">
            <span>Zobacz demo strony</span>
            <ExternalLink className="w-4 h-4" />
          </div>
        </div>
      </div>
      <div className="p-4">
        <span className="text-purple-400 text-sm">{category}</span>
        <h3 className="text-white mt-1">{title}</h3>
      </div>
      </Link>
    </motion.div>
  );
};
