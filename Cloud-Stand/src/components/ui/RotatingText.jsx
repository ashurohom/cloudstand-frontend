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
        minWidth: '220px',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        verticalAlign: 'middle',
        position: 'relative',
        lineHeight: 1,
        padding: '0',
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={currentWord}
          initial={{ opacity: 0, scale: 0.78, y: 10, rotateX: -18 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, scale: 1.14, y: -10, rotateX: 18 }}
          transition={{
            duration: 0.46,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            position: 'relative',
            zIndex: 1,
            transformOrigin: '50% 50%',
            fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
            fontWeight: 800,
            fontSize: '1.45em',
            letterSpacing: '-0.03em',
            color: '#d63b25',
            padding: '8px 16px',
            borderRadius: '999px',
            border: '2px solid #d63b25',
          }}
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
