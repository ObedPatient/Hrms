import React from "react";
import { motion } from "framer-motion";

interface ConfirmDialogProps {
  isOpen: boolean;
  icon?: React.ReactNode;
  title: string;
  message: string;
  buttonLabel?: string;
  onClose: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  isOpen,
  icon,
  title,
  message,
  buttonLabel = "Close",
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl shadow-xl p-10 text-center w-[400px]"
      >
        {icon && <div className="mb-6 flex justify-center">{icon}</div>}

        <h2 className="text-xl font-semibold text-primary mb-3">{title}</h2>
        <p className="text-primary mb-8 text-sm leading-relaxed">{message}</p>

        <button
          onClick={onClose}
          className="w-full bg-primary hover:bg-primary-light text-white font-semibold py-3 rounded-xl"
        >
          {buttonLabel}
        </button>
      </motion.div>
    </div>
  );
};

export default ConfirmDialog;
