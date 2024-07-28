import React, { useEffect, useState } from 'react';
import styles from './toast.module.css';

interface ToastProps {
  message: string;
  classStyle?: string;
  isSuccess: boolean;
  duration?: number; // Duration in milliseconds
}

const Toast: React.FC<ToastProps> = ({ message, isSuccess, classStyle = '', duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [duration]);

  if (!isVisible) return null;

  return <div className={`${styles.toast} ${isSuccess ? styles.success : styles.error} ${classStyle}`}>{message}</div>;
};

export default Toast;
