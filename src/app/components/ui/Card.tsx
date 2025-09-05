'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
}) => {
  return (
    <div
      className={`transition-all ${className}`}
      style={{
        backgroundColor: 'var(--color-white)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        transition: 'var(--transition-shadow)',
        boxShadow: 'var(--shadow-sm)',
      }}
      onMouseEnter={(e) => {
        if (hover) {
          e.currentTarget.style.boxShadow = 'var(--shadow-md)';
        }
      }}
      onMouseLeave={(e) => {
        if (hover) {
          e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
        }
      }}
    >
      {children}
    </div>
  );
};