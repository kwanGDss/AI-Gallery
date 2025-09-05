'use client';

import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'pro' | 'category';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = '',
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'pro':
        return {
          backgroundColor: 'var(--color-accent-gold)',
          color: 'var(--color-gray-950)',
        };
      case 'category':
        return {
          backgroundColor: 'var(--color-gray-100)',
          color: 'var(--color-gray-700)',
        };
      case 'default':
      default:
        return {
          backgroundColor: 'var(--color-gray-200)',
          color: 'var(--color-gray-900)',
        };
    }
  };

  return (
    <span
      className={`inline-flex items-center ${className}`}
      style={{
        fontFamily: 'var(--font-family)',
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--font-medium)',
        padding: '2px 8px',
        borderRadius: 'var(--radius-sm)',
        ...getVariantStyles(),
      }}
    >
      {children}
    </span>
  );
};