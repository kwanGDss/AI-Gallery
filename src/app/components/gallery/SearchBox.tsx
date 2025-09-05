'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBoxProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder = '검색어를 입력하세요...',
  onSearch,
  className = '',
}) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="relative">
        <Search 
          className="absolute left-3 top-1/2 transform -translate-y-1/2"
          size={18}
          style={{ color: 'var(--color-gray-400)' }}
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full transition-all"
          style={{
            fontFamily: 'var(--font-family)',
            fontSize: 'var(--text-sm)',
            padding: '10px 12px 10px 44px',
            border: '1px solid var(--color-gray-200)',
            borderRadius: 'var(--radius-full)',
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
        />
      </div>
    </form>
  );
};