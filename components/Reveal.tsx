'use client';

import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';

type Effect = 'rise' | 'wipe' | 'curtain' | 'drift' | 'emerge';

const effects: Record<Effect, Variants> = {
  rise: {
    hidden: { opacity: 0, y: 48, filter: 'blur(5px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
    }
  },
  wipe: {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: {
      clipPath: 'inset(0 0% 0 0)',
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
    }
  },
  curtain: {
    hidden: { clipPath: 'inset(100% 0 0 0)', opacity: 1 },
    visible: {
      clipPath: 'inset(0% 0 0 0)',
      opacity: 1,
      transition: { duration: 1.0, ease: [0.76, 0, 0.24, 1] }
    }
  },
  drift: {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] }
    }
  },
  emerge: {
    hidden: { opacity: 0, scale: 0.94, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 1.0, ease: [0.34, 1.2, 0.64, 1] }
    }
  }
};

interface RevealProps {
  children: React.ReactNode;
  effect?: Effect;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function Reveal({
  children,
  effect = 'rise',
  delay = 0,
  className,
  style
}: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-8% 0px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      variants={effects[effect]}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
