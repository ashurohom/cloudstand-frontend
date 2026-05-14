import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const words = [
  'HCM',
  'ERP',
  'Payroll',
  'OIC',
  'BI & Analytics',
  'AI Solutions'
];

const ROTATION_INTERVAL = 2200;

export default function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % words.length);
    }, ROTATION_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const currentWord = words[index];

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        color: '#c2410c',
        fontWeight: 800,
        minWidth: '180px',
        justifyContent: 'center',
        overflow: 'hidden',
        verticalAlign: 'middle',
        position: 'relative',
        lineHeight: 1.1,
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={currentWord}
          initial={{ opacity: 0, scale: 0.82 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.12 }}
          transition={{
            duration: 0.38,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            display: 'inline-block',
            whiteSpace: 'nowrap',
          }}
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
