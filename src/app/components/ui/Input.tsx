'use client';

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label 
          className="block text-sm font-medium mb-2"
          style={{ 
            color: 'var(--color-gray-700)',
            fontFamily: 'var(--font-family)'
          }}
        >
          {label}
        </label>
      )}
      <input
        className={`w-full transition-all ${className}`}
        style={{
          fontFamily: 'var(--font-family)',
          fontSize: 'var(--text-sm)',
          padding: '8px 12px',
          border: '1px solid var(--color-gray-200)',
          borderRadius: 'var(--radius-md)',
          backgroundColor: 'var(--color-white)',
          color: 'var(--color-gray-950)',
          transition: 'var(--transition-colors)',
          outline: 'none',
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = 'var(--color-gray-400)';
          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(113, 113, 122, 0.1)';
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = 'var(--color-gray-200)';
          e.currentTarget.style.boxShadow = 'none';
        }}
        {...props}
      />
    </div>
  );
};