import React, { useEffect } from 'react';
import clsx from 'clsx';
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/solid';

export type AlertType = 'success' | 'error' | 'warning' | 'info';

type AlertProps = {
  type?: AlertType;
  message: string;
  className?: string;
  withIcon?: boolean;
  onClose?: () => void;
};

const baseStyles = 'px-4 py-3 rounded border text-sm flex items-center shadow-lg';
const positionStyles = 'fixed bottom-4 left-4 z-50';
const widthStyles = 'w-full max-w-[calc(100vw-2rem)] sm:max-w-sm';

const alertStyles: Record<AlertType, string> = {
  success: 'bg-green-100 text-green-800 border-green-400',
  error: 'bg-red-100 text-red-800 border-red-400',
  warning: 'bg-yellow-100 text-yellow-800 border-yellow-400',
  info: 'bg-blue-100 text-blue-800 border-blue-400',
};

const iconMap: Record<AlertType, React.JSX.Element> = {
  success: <CheckCircleIcon className="w-10 h-10 mr-2 flex-shrink-0" />,
  error: <ExclamationTriangleIcon className="w-10 h-10 mr-2 flex-shrink-0" />,
  warning: <ExclamationCircleIcon className="w-10 h-10 mr-2 flex-shrink-0" />,
  info: <InformationCircleIcon className="w-10 h-10 mr-2 flex-shrink-0" />,
};

const Alert: React.FC<AlertProps> = ({
  type = 'info',
  message,
  className,
  withIcon = true,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose?.();
    }, 60000); // 1 minuto = 60000 ms

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={clsx(baseStyles, alertStyles[type], positionStyles, widthStyles, className)}
      role="alert"
    >
      {withIcon && iconMap[type]}
      <span>{message}</span>
    </div>
  );
};

export default Alert;
