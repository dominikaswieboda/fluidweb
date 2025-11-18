import { motion } from 'motion/react';

export const FluidBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="gooey"
            />
          </filter>
        </defs>

        <g filter="url(#gooey)">
          <motion.circle
            cx="200"
            cy="200"
            r="120"
            fill="#a855f7"
            opacity="0.6"
            animate={{
              cx: [200, 300, 200],
              cy: [200, 400, 200],
              r: [120, 150, 120],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.circle
            cx="800"
            cy="300"
            r="100"
            fill="#9333ea"
            opacity="0.5"
            animate={{
              cx: [800, 700, 800],
              cy: [300, 500, 300],
              r: [100, 130, 100],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.circle
            cx="500"
            cy="700"
            r="140"
            fill="#c084fc"
            opacity="0.4"
            animate={{
              cx: [500, 600, 500],
              cy: [700, 600, 700],
              r: [140, 170, 140],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.circle
            cx="100"
            cy="600"
            r="90"
            fill="#7c3aed"
            opacity="0.5"
            animate={{
              cx: [100, 200, 100],
              cy: [600, 700, 600],
              r: [90, 120, 90],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </g>
      </svg>
    </div>
  );
};
