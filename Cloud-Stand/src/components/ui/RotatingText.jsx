import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = [
  'HCM',
  'ERP',
  'Payroll',
  'OIC',
  'BI & Analytics',
  'AI Solutions'
];

const ROTATION_INTERVAL = 2500;

export default function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % words.length);
    }, ROTATION_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const currentWord = words[index];
  const wordParts = currentWord.split(' ');

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        minWidth: '180px',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        verticalAlign: 'middle',
        height: '1.4em',
        position: 'relative',
        background: 'none',
        border: 'none',
        padding: '0 8px',
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={currentWord}
          style={{
            display: 'inline-flex',
            gap: '0.35em',
            overflow: 'hidden',
            color: '#C74634',
            fontWeight: 700,
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            lineHeight: 1.4,
          }}
        >
          {wordParts.map((part, i) => (
            <motion.span
              key={i}
              initial={{ y: '-120%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              exit={{ y: '120%', opacity: 0 }}
              transition={{
                duration: 0.35,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                display: 'inline-block',
                whiteSpace: 'nowrap',
                lineHeight: 1.4,
              }}
            >
              {part}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
