import React, { createContext, useContext, useState, ReactNode } from 'react';
import Toast from '../components/Toast';

interface ToastContextType {
  addToast: (message: string, isSuccess: boolean) => void;
}

interface ToastItem {
  message: string;
  isSuccess: boolean;
  id: number; // Unique ID for each toast
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const [nextId, setNextId] = useState(0);

  const addToast = (message: string, isSuccess: boolean) => {
    const id = nextId;
    setNextId(prevId => prevId + 1); // Increment ID for the next toast
    setToasts(prevToasts => [...prevToasts, { message, isSuccess, id }]);
    setTimeout(() => {
      setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
    }, 500); // Duration of toast
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="toast-container">
        {toasts.map(({ message, isSuccess, id }) => (
          <Toast key={id} message={message} isSuccess={isSuccess} classStyle="toast-custom-style" />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
