import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  external?: boolean;
  primary?: boolean;
  secondary?: boolean;
  light?: boolean;
  fullWidth?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  external,
  primary,
  secondary,
  light,
  fullWidth,
  className = '',
}) => {
  const baseClasses = 'inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  let variantClasses = '';
  
  if (primary) {
    variantClasses = 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500';
  } else if (secondary) {
    variantClasses = 'bg-slate-100 text-slate-700 hover:bg-slate-200 focus:ring-slate-400';
  } else if (light) {
    variantClasses = 'bg-white text-blue-600 hover:bg-blue-50 focus:ring-white';
  } else {
    variantClasses = 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500';
  }
  
  const classes = `${baseClasses} ${variantClasses} ${fullWidth ? 'w-full' : ''} ${className}`;
  
  if (href) {
    return (
      <a 
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;