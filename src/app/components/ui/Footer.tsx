import { Github, Twitter, Instagram, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  const footerLinks = {
    platform: [
      { label: '갤러리 둘러보기', href: '/gallery' },
      { label: '작품 업로드', href: '/upload' },
      { label: 'API 문서', href: '/api-docs' },
      { label: '가격 정책', href: '/pricing' }
    ],
    resources: [
      { label: '도움말 센터', href: '/help' },
      { label: '디자인 가이드', href: '/design-guide' },
      { label: '블로그', href: '/blog' },
      { label: '커뮤니티', href: '/community' }
    ],
    legal: [
      { label: '이용약관', href: '/terms' },
      { label: '개인정보처리방침', href: '/privacy' },
      { label: '저작권 정책', href: '/copyright' },
      { label: '라이선스', href: '/license' }
    ],
    company: [
      { label: '회사 소개', href: '/about' },
      { label: '채용 정보', href: '/careers' },
      { label: '언론 보도', href: '/press' },
      { label: '파트너십', href: '/partnership' }
    ]
  }

  return (
    <footer className="bg-gray-950 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              AI Gallery
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              AI로 생성된 고품질 이미지를 무료로 제공하는 플랫폼입니다. 
              창작자들과 함께 만들어가는 새로운 디지털 아트 커뮤니티입니다.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-white font-semibold mb-4">플랫폼</h3>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">리소스</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">법적 고지</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">회사</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="text-white font-semibold mb-3">뉴스레터 구독</h3>
            <p className="text-gray-400 text-sm mb-4">
              새로운 AI 이미지와 업데이트 소식을 받아보세요.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 px-6">
                구독
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 AI Gallery. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">
                Made with AI & ❤️ in Korea
              </span>
              <div className="flex items-center space-x-2">
                <span className="text-gray-400 text-sm">Language:</span>
                <button className="text-white text-sm hover:text-blue-400 transition-colors">
                  한국어
                </button>
                <span className="text-gray-600">|</span>
                <button className="text-gray-400 text-sm hover:text-white transition-colors">
                  English
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}