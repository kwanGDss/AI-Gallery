'use client';

import React from 'react';
import { Container } from './Container';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-gray-950)',
        color: 'var(--color-gray-100)',
        padding: '3rem 0 2rem',
      }}
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* 회사 정보 */}
          <div>
            <h3
              className="text-lg font-semibold mb-4"
              style={{
                fontFamily: 'var(--font-family)',
                color: 'var(--color-white)',
              }}
            >
              AI Gallery
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-family)',
                fontSize: 'var(--text-sm)',
                color: 'var(--color-gray-400)',
                lineHeight: '1.6',
              }}
            >
              AI로 생성된 고품질 이미지와 콘텐츠를 
              자유롭게 공유하고 다운로드할 수 있는 
              커뮤니티 플랫폼입니다.
            </p>
          </div>

          {/* 서비스 */}
          <div>
            <h4
              className="font-medium mb-4"
              style={{
                fontFamily: 'var(--font-family)',
                color: 'var(--color-white)',
              }}
            >
              서비스
            </h4>
            <ul className="space-y-2">
              {['이미지 갤러리', '작품 업로드', 'AI 도구', '커뮤니티'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    style={{
                      fontFamily: 'var(--font-family)',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-gray-400)',
                      textDecoration: 'none',
                      transition: 'var(--transition-colors)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-white)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--color-gray-400)';
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 지원 */}
          <div>
            <h4
              className="font-medium mb-4"
              style={{
                fontFamily: 'var(--font-family)',
                color: 'var(--color-white)',
              }}
            >
              지원
            </h4>
            <ul className="space-y-2">
              {['도움말', '문의하기', 'API 문서', '개발자 가이드'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    style={{
                      fontFamily: 'var(--font-family)',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-gray-400)',
                      textDecoration: 'none',
                      transition: 'var(--transition-colors)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-white)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--color-gray-400)';
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 법적 고지 */}
          <div>
            <h4
              className="font-medium mb-4"
              style={{
                fontFamily: 'var(--font-family)',
                color: 'var(--color-white)',
              }}
            >
              법적 고지
            </h4>
            <ul className="space-y-2">
              {['이용약관', '개인정보처리방침', '저작권 정책', '라이선스'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    style={{
                      fontFamily: 'var(--font-family)',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-gray-400)',
                      textDecoration: 'none',
                      transition: 'var(--transition-colors)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-white)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--color-gray-400)';
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 하단 저작권 정보 */}
        <div
          className="pt-8 border-t flex flex-col md:flex-row justify-between items-center"
          style={{ borderColor: 'var(--color-gray-800)' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-family)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-gray-400)',
            }}
          >
            © {currentYear} AI Gallery. 모든 권리 보유.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              style={{
                fontFamily: 'var(--font-family)',
                fontSize: 'var(--text-sm)',
                color: 'var(--color-gray-400)',
                textDecoration: 'none',
                transition: 'var(--transition-colors)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-white)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-gray-400)';
              }}
            >
              한국어
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};