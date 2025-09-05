'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: 'var(--color-gray-950)',
          color: 'var(--color-white)',
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          color: 'var(--color-gray-950)',
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: 'var(--color-gray-950)',
          border: '1px solid var(--color-gray-200)',
        };
      default:
        return {};
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return {
          fontSize: 'var(--text-xs)',
          padding: '4px 8px',
          height: '28px',
        };
      case 'md':
        return {
          fontSize: 'var(--text-sm)',
          padding: '6px 12px',
          height: '32px',
        };
      case 'lg':
        return {
          fontSize: 'var(--text-base)',
          padding: '8px 16px',
          height: '40px',
        };
      default:
        return {};
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (variant === 'ghost') {
      e.currentTarget.style.backgroundColor = 'var(--color-gray-100)';
    } else if (variant === 'outline') {
      e.currentTarget.style.backgroundColor = 'var(--color-gray-50)';
      e.currentTarget.style.borderColor = 'var(--color-gray-300)';
    } else {
      e.currentTarget.style.opacity = '0.9';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (variant === 'ghost') {
      e.currentTarget.style.backgroundColor = 'transparent';
    } else if (variant === 'outline') {
      e.currentTarget.style.backgroundColor = 'transparent';
      e.currentTarget.style.borderColor = 'var(--color-gray-200)';
    } else {
      e.currentTarget.style.opacity = '1';
    }
  };

  return (
    <button
      className={`inline-flex items-center justify-center gap-1 cursor-pointer transition-all ${className}`}
      style={{
        fontFamily: 'var(--font-family)',
        fontWeight: 'var(--font-medium)',
        borderRadius: 'var(--radius-full)',
        border: '1px solid transparent',
        transition: 'var(--transition-all)',
        ...getVariantStyles(),
        ...getSizeStyles(),
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  );
};