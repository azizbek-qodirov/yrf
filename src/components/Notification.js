import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, CheckCircle, InfoIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export const NotificationToast = ({ message, type, duration = 3000, onClose }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const startTime = Date.now();
    const updateProgress = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingProgress = Math.max(0, 100 - (elapsedTime / duration) * 100);
      
      if (remainingProgress > 0) {
        setProgress(remainingProgress);
        requestAnimationFrame(updateProgress);
      } else {
        onClose();
      }
    };

    const timer = setTimeout(onClose, duration);
    requestAnimationFrame(updateProgress);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-6 h-6 mr-2" />;
      case 'error':
        return <AlertCircle className="w-6 h-6 mr-2" />;
      case 'info':
        return <InfoIcon className="w-6 h-6 mr-2" />;
      default:
        return null;
    }
  };

  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500/90 border-green-400';
      case 'error':
        return 'bg-red-500/90 border-red-400';
      case 'info':
        return 'bg-blue-500/90 border-blue-400';
      default:
        return 'bg-gray-500/90 border-gray-400';
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-4 right-4 z-50 w-96 rounded-xl shadow-2xl overflow-hidden 
                    ${getTypeStyles()} border text-white backdrop-blur-sm`}
      >
        <div className="p-4 flex items-center">
          {getIcon()}
          <div className="flex-grow">
            <p className="font-semibold">{message}</p>
          </div>
        </div>
        <div 
          className="h-1 bg-white absolute bottom-0 left-0 right-0"
          style={{ 
            transformOrigin: 'left', 
            transform: `scaleX(${progress / 100})`,
            transition: 'transform 0.1s linear'
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export const showNotification = ({ message, type, duration }) => {
  const event = new CustomEvent('showNotification', {
    detail: { message, type, duration },
  });
  window.dispatchEvent(event);
};
