import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  delay = 0,
}: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-purple-500/50 transition-colors"
    >
      <div className="w-14 h-14 bg-purple-600/20 rounded-xl flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-purple-500" />
      </div>
      <h3 className="text-2xl mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

