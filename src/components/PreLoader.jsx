// PreLoader.jsx
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PreLoader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 1600); // Adjust timing to match your design

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-[#f9f5f0] overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute top-0 bottom-0 right-0 bg-[#660b0b]"
          initial={{ width: '100vw', x: 0 }}
          animate={{ width: '0vw', x: '-100vw' }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default PreLoader;
