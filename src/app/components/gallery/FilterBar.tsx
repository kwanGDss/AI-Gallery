'use client';

import React, { useState } from 'react';
import { Filter, ChevronDown } from 'lucide-react';

interface FilterBarProps {
  onFilterChange?: (filters: { category: string; sortBy: string }) => void;
  className?: string;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  onFilterChange,
  className = '',
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('전체');
  const [activeSortBy, setActiveSortBy] = useState<string>('최신순');

  const categories = ['전체', '이미지', '일러스트', '3D', '음악', '영상'];
  const sortOptions = ['최신순', '인기순', '다운로드순', '이름순'];

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    onFilterChange?.({ category, sortBy: activeSortBy });
  };

  const handleSortChange = (sortBy: string) => {
    setActiveSortBy(sortBy);
    onFilterChange?.({ category: activeCategory, sortBy });
  };

  return (
    <div className={`flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between ${className}`}>
      {/* 카테고리 필터 */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex items-center gap-1">
          <Filter size={16} style={{ color: 'var(--color-gray-500)' }} />
          <span
            style={{
              fontFamily: 'var(--font-family)',
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--font-medium)',
              color: 'var(--color-gray-700)',
            }}
          >
            카테고리:
          </span>
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className="transition-all"
              style={{
                fontFamily: 'var(--font-family)',
                fontSize: 'var(--text-xs)',
                fontWeight: 'var(--font-medium)',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--color-gray-200)',
                backgroundColor: activeCategory === category ? 'var(--color-gray-950)' : 'var(--color-white)',
                color: activeCategory === category ? 'var(--color-white)' : 'var(--color-gray-700)',
                cursor: 'pointer',
                transition: 'var(--transition-all)',
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== category) {
                  e.currentTarget.style.backgroundColor = 'var(--color-gray-50)';
                  e.currentTarget.style.borderColor = 'var(--color-gray-300)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== category) {
                  e.currentTarget.style.backgroundColor = 'var(--color-white)';
                  e.currentTarget.style.borderColor = 'var(--color-gray-200)';
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* 정렬 옵션 */}
      <div className="flex items-center gap-2">
        <span
          style={{
            fontFamily: 'var(--font-family)',
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--font-medium)',
            color: 'var(--color-gray-700)',
          }}
        >
          정렬:
        </span>
        <div className="relative">
          <select
            value={activeSortBy}
            onChange={(e) => handleSortChange(e.target.value)}
            className="appearance-none cursor-pointer pr-8 transition-all"
            style={{
              fontFamily: 'var(--font-family)',
              fontSize: 'var(--text-sm)',
              padding: '6px 32px 6px 12px',
              border: '1px solid var(--color-gray-200)',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--color-white)',
              color: 'var(--color-gray-950)',
              outline: 'none',
            }}
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
            size={16}
            style={{ color: 'var(--color-gray-400)' }}
          />
        </div>
      </div>
    </div>
  );
};