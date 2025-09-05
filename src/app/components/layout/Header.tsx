'use client';

import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { Container } from './Container';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: '사진', href: '/photos' },
    { label: '일러스트', href: '/illustrations' },
    { label: '3D', href: '/3d' },
    { label: '음악', href: '/music' },
    { label: '영상', href: '/videos' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: 'var(--color-white)',
        height: 'var(--header-height)',
        borderBottom: '1px solid var(--color-gray-200)',
      }}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <div className="flex items-center">
            <h1
              className="text-xl font-semibold"
              style={{
                color: 'var(--color-gray-950)',
                fontFamily: 'var(--font-family)',
              }}
            >
              AI Gallery
            </h1>
          </div>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors"
                style={{
                  fontFamily: 'var(--font-family)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--font-medium)',
                  color: 'var(--color-gray-700)',
                  textDecoration: 'none',
                  transition: 'var(--transition-colors)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-gray-950)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-gray-700)';
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* 우측 액션 버튼들 */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="p-2 rounded-full transition-colors"
              style={{
                color: 'var(--color-gray-500)',
                transition: 'var(--transition-colors)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-gray-100)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <Search size={20} />
            </button>
            <Button variant="ghost" size="sm">
              로그인
            </Button>
            <Button variant="primary" size="sm">
              Pro 무료체험
            </Button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: 'var(--color-gray-700)' }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden py-4 border-t"
            style={{ borderColor: 'var(--color-gray-200)' }}
          >
            <nav className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block"
                  style={{
                    fontFamily: 'var(--font-family)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-medium)',
                    color: 'var(--color-gray-700)',
                    textDecoration: 'none',
                  }}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="ghost" size="sm" className="w-full">
                  로그인
                </Button>
                <Button variant="primary" size="sm" className="w-full">
                  Pro 무료체험
                </Button>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};