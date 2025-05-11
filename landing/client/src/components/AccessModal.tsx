import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent } from '@/lib/analytics';

interface AccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AccessModal({ isOpen, onClose }: AccessModalProps) {
  // Track modal opening
  useEffect(() => {
    if (isOpen) {
      trackEvent('modal_opened', 'interaction', 'beta_access_modal');
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="fixed inset-0 bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <motion.div 
              className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 p-6 z-10 relative"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button 
                onClick={onClose} 
                className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors duration-300"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="text-center py-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="text-green-500 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Request Received</h3>
                <p className="text-neutral-600 mb-6">Thank you for your interest in Oceanz! We'll review your application and reach out soon.</p>
                <Button 
                  onClick={onClose} 
                  className="bg-secondary text-white font-medium px-6 py-3 rounded-md hover:bg-secondary/90 transition-colors duration-300"
                >
                  Got it
                </Button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
