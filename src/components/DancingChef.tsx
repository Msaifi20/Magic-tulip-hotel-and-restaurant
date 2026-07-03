import { motion } from 'motion/react';

export default function DancingChef() {
  // Wavy steam path definitions for the hot plate
  const steamVariants = {
    animate: (custom: number) => ({
      y: [0, -12, 0],
      opacity: [0, 0.8, 0],
      transition: {
        duration: 1.6,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: custom * 0.4,
      }
    })
  };

  return (
    <div className="w-full h-full flex items-center justify-center select-none translate-y-3">
      <motion.svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-[0_4px_12px_rgba(245,158,11,0.15)]"
        animate={{
          y: [0, -4, 0],
          rotate: [-5, 5, -5],
          scaleY: [1, 0.96, 1],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* LEFT ARM (Dancing / Waving) */}
        <motion.g
          animate={{ rotate: [-20, 15, -20] }}
          style={{ originX: '32px', originY: '52px' }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Sleeve */}
          <path d="M 32 52 C 24 46 18 48 18 54" stroke="white" strokeWidth="6" strokeLinecap="round" fill="none" />
          {/* Hand (Beige) */}
          <circle cx="16" cy="54" r="3.5" fill="#fcd34d" />
        </motion.g>

        {/* LEGS (Dancing stance) */}
        {/* Left Leg */}
        <motion.path
          d="M 42 78 L 38 88 L 34 88"
          stroke="#1c1917"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          animate={{ rotate: [-8, 8, -8] }}
          style={{ originX: '42px', originY: '78px' }}
          transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Right Leg */}
        <motion.path
          d="M 54 78 L 58 88 L 64 88"
          stroke="#1c1917"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          animate={{ rotate: [8, -8, 8] }}
          style={{ originX: '54px', originY: '78px' }}
          transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* BODY (Chef Coat) */}
        <path d="M 34 52 L 62 52 L 58 78 L 38 78 Z" fill="white" />
        {/* Double-breasted buttons (grey/gold dots) */}
        <circle cx="42" cy="58" r="1.5" fill="#78716c" />
        <circle cx="42" cy="64" r="1.5" fill="#78716c" />
        <circle cx="42" cy="70" r="1.5" fill="#78716c" />
        <circle cx="50" cy="58" r="1.5" fill="#78716c" />
        <circle cx="50" cy="64" r="1.5" fill="#78716c" />
        <circle cx="50" cy="70" r="1.5" fill="#78716c" />

        {/* Red Neckerchief */}
        <path d="M 40 50 L 56 50 L 48 55 Z" fill="#ef4444" />
        <path d="M 48 53 L 42 58 L 45 61 Z" fill="#dc2626" />

        {/* HEAD */}
        <circle cx="48" cy="40" r="11" fill="#fed7aa" />
        {/* Rosy Cheeks */}
        <circle cx="40" cy="42" r="2" fill="#f87171" opacity="0.6" />
        <circle cx="56" cy="42" r="2" fill="#f87171" opacity="0.6" />
        {/* Happy Eyes (^-^) */}
        <path d="M 41 37 Q 44 35 45 38" stroke="#78350f" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M 51 37 Q 52 35 55 38" stroke="#78350f" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* Cute smile */}
        <path d="M 45 44 Q 48 48 51 44" stroke="#78350f" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* Chef mustache */}
        <path d="M 42 42 Q 45 40 48 42 Q 51 40 54 42" stroke="#d97706" strokeWidth="1.8" strokeLinecap="round" fill="none" />

        {/* CHEF HAT */}
        <path d="M 37 31 C 36 22 43 16 48 20 C 51 15 59 18 58 25 C 62 25 61 31 59 31 Z" fill="#fafaf9" />
        {/* Hat band */}
        <path d="M 38 29 L 58 29 L 57 32 L 39 32 Z" fill="#e7e5e4" />

        {/* RIGHT ARM (Holding Plate) */}
        <motion.g
          animate={{ y: [-1, 2, -1], rotate: [0, 5, 0] }}
          style={{ originX: '56px', originY: '56px' }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Arm */}
          <path d="M 56 56 C 64 56 72 50 72 46" stroke="white" strokeWidth="6" strokeLinecap="round" fill="none" />
          {/* Hand */}
          <circle cx="72" cy="45" r="3" fill="#fcd34d" />
          
          {/* Silver/Gold Plate */}
          <path d="M 64 42 L 82 42 Q 82 44 80 44 L 66 44 Q 64 44 64 42 Z" fill="#d6d3d1" />
          {/* Delicious Food on Plate */}
          <path d="M 68 42 Q 73 34 78 42 Z" fill="#f59e0b" />
          {/* Cherry / garnish on top */}
          <circle cx="73" cy="36" r="1.5" fill="#ef4444" />

          {/* Dynamic rising steam paths */}
          <motion.path
            d="M 69 32 Q 67 25 70 20"
            stroke="#f59e0b"
            strokeWidth="1"
            strokeLinecap="round"
            fill="none"
            variants={steamVariants}
            custom={1}
            animate="animate"
          />
          <motion.path
            d="M 73 32 Q 75 24 72 18"
            stroke="#f59e0b"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
            variants={steamVariants}
            custom={2}
            animate="animate"
          />
          <motion.path
            d="M 77 32 Q 75 26 78 22"
            stroke="#f59e0b"
            strokeWidth="1"
            strokeLinecap="round"
            fill="none"
            variants={steamVariants}
            custom={3}
            animate="animate"
          />
        </motion.g>
      </motion.svg>
    </div>
  );
}
