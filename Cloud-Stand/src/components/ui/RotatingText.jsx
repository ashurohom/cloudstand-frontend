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
        justifyContent: 'center',
        overflow: 'hidden',
        verticalAlign: 'middle',
        position: 'relative',
        lineHeight: 1,
        padding: '6px 0',
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
            gap: '10px',
            whiteSpace: 'nowrap',
            position: 'relative',
            zIndex: 1,
            transformOrigin: '50% 50%',
            fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
            fontWeight: 800,
            fontSize: '1.08em',
            letterSpacing: '-0.03em',
            color: '#9a3412',
            background: 'linear-gradient(135deg, rgba(255,237,213,0.95) 0%, rgba(254,215,170,0.92) 100%)',
            border: '1px solid rgba(249,115,22,0.24)',
            borderRadius: '999px',
            padding: '12px 18px',
            boxShadow: '0 10px 24px rgba(249,115,22,0.12)',
          }}
        >
          <span
            aria-hidden="true"
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '999px',
              background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
              boxShadow: '0 0 0 4px rgba(249,115,22,0.14), 0 8px 20px rgba(234,88,12,0.28)',
              flexShrink: 0,
            }}
          />
          {currentWord}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
